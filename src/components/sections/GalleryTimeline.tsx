import { getInstagramData } from '@/lib/instagram'
import InstagramFeedClient from './InstagramFeedClient'

export default async function GalleryTimeline() {
  const { posts, profile } = await getInstagramData()

  return <InstagramFeedClient posts={posts} profile={profile} />
}
