export interface InstagramPost {
    id: string
    caption?: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
    mediaUrl: string
    thumbnailUrl?: string // for videos
    permalink: string
    timestamp?: string
}

export interface InstagramProfile {
    username: string
    followersCount: number
    profilePictureUrl?: string
}

const BEHOLD_URL = 'https://feeds.behold.so/OAwWL1RAYr1jcdj4rZZV'

export async function getInstagramData(): Promise<{ posts: InstagramPost[], profile: InstagramProfile | null }> {
    try {
        const response = await fetch(BEHOLD_URL, {
            next: { revalidate: 60 }, // Cache for 60 seconds (updated from 3600)
        })

        if (!response.ok) {
            return { posts: [], profile: null }
        }

        const data = await response.json()

        // Behold returns { posts: [...], username: ..., followersCount: ... }
        const profile: InstagramProfile = {
            username: data.username || 'primaventa.rs',
            followersCount: data.followersCount || 0,
            profilePictureUrl: data.profilePictureUrl
        }

        const posts = (data.posts || []).map((post: any) => ({
            id: post.id,
            caption: post.caption || '',
            // Behold sends 'IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'
            mediaType: post.mediaType,
            mediaUrl: post.mediaUrl,
            thumbnailUrl: post.thumbnailUrl,
            permalink: post.permalink,
            timestamp: post.timestamp
        }))

        return { posts, profile }

    } catch (error) {
        console.error('Error fetching Instagram data:', error)
        return { posts: [], profile: null }
    }
}
