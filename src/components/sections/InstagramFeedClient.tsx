'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Instagram, ArrowUpRight, Camera } from 'lucide-react'
import type { InstagramPost, InstagramProfile } from '@/lib/instagram'
import { useEffect, useMemo, useRef, useState } from 'react'
import './instagram-heart.css'

interface InstagramFeedClientProps {
    posts: InstagramPost[]
    profile: InstagramProfile | null
}

export default function InstagramFeedClient({ posts, profile }: InstagramFeedClientProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const basePosts = useMemo(() => posts.slice(0, 6), [posts])
    const hasPosts = basePosts.length > 0
    const visibleCount = 3
    const [startIndex, setStartIndex] = useState(0)

    useEffect(() => {
        if (!hasPosts) return
        const id = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % basePosts.length)
        }, 3200)
        return () => clearInterval(id)
    }, [hasPosts, basePosts.length])

    const visiblePosts = useMemo(() => {
        if (!hasPosts) return []
        const len = basePosts.length
        return Array.from({ length: Math.min(visibleCount, len) }, (_, idx) => basePosts[(startIndex + idx) % len])
    }, [basePosts, hasPosts, startIndex])

    const formatTimestamp = (timestamp?: string) => {
        if (!timestamp) return 'Novi kadar'
        const date = new Date(timestamp)
        if (isNaN(date.getTime())) return 'Novi kadar'
        return date.toLocaleDateString('sr-RS', { day: '2-digit', month: 'short' })
    }

    const trimCaption = (caption?: string) => {
        if (!caption) return 'Pogledaj objavu'
        if (caption.length <= 100) return caption
        return `${caption.slice(0, 100)}…`
    }

    // Parallax / Scroll effect for the header
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <section
            ref={containerRef}
            id="galerija"
            className="relative py-32 overflow-hidden bg-transparent"
        >
            {/* Soften seams with neighbors */}
            <div className="absolute inset-x-0 -top-16 h-44 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 -bottom-16 h-44 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/85 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="font-playfair text-5xl md:text-6xl text-charcoal tracking-tight flex items-center justify-center gap-5"
                    >
                        <span className="inline-flex h-6 w-6 md:h-10 md:w-10 items-center justify-center heart-icon">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#E3C16F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-full w-full"
                                aria-hidden="true"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </span>
                        Naša Strast u Kadru
                    </motion.h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto" />

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="font-montserrat text-charcoal/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed space-y-3"
                    >
                        <span className="block">Ovde objavljujemo ono što radimo svaki dan. Slike novih proizvoda, posete partnerima i dešavanja sa sajmova.</span>
                        <span className="block">Budite u toku.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 border border-white/60 shadow-sm backdrop-blur mt-8"
                    >
                        <div className="inline-flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-white shadow-sm">
                                <Instagram size={16} />
                            </div>
                            <a
                                href="https://www.instagram.com/primaventa.rs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-charcoal transition-colors hover:text-champagne-gold underline decoration-transparent hover:decoration-champagne-gold underline-offset-4"
                            >
                                @primaventa.rs
                            </a>
                        </div>
                        <motion.a
                            whileHover={{ x: 2 }}
                            href="https://www.instagram.com/primaventa.rs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-champagne-gold inline-flex items-center gap-1"
                        >
                            Otvori profil
                            <ArrowUpRight size={14} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Content Area */}
                {hasPosts ? (
                    <div className="relative overflow-hidden">
                        <div className="flex gap-6 md:gap-8 justify-center max-w-7xl mx-auto">
                            {visiblePosts.map((post, i) => (
                                <motion.a
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={`${post.id}-${startIndex}-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.05 }}
                                    className="group relative block overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_32px_90px_-42px_rgba(0,0,0,0.4)] flex-[0_0_320px] sm:flex-[0_0_360px] md:flex-[0_0_400px] max-w-[420px]"
                                >
                                    <div className="aspect-square relative">
                                        <Image
                                            src={post.mediaType === 'VIDEO' && post.thumbnailUrl ? post.thumbnailUrl : post.mediaUrl}
                                            alt={post.caption || 'Instagram Post'}
                                            fill
                                            className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />

                                        {/* Minimal veil */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/18" />

                                        {/* Clean hover card */}
                                        <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 backdrop-blur text-charcoal px-3 py-2.5 shadow-lg shadow-black/10 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="flex items-start gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-white">
                                                    <Instagram size={16} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold leading-tight line-clamp-2">
                                                        {trimCaption(post.caption)}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-[11px] text-charcoal/60 mt-1">
                                                        <span>@primaventa.rs</span>
                                                        <span className="w-1 h-1 rounded-full bg-charcoal/30" />
                                                        <span>{formatTimestamp(post.timestamp)}</span>
                                                    </div>
                                                </div>
                                                <ArrowUpRight size={16} className="text-charcoal/70" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Fallback State */
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center border border-white/40 rounded-[2.5rem] bg-white/70 backdrop-blur-sm p-16 text-center shadow-[0_30px_80px_-50px_rgba(0,0,0,0.4)]"
                    >
                        <Camera className="w-12 h-12 text-champagne-gold mb-6 opacity-60" />
                        <h3 className="text-3xl font-playfair text-charcoal mb-4">Još koji kadar</h3>
                        <p className="text-charcoal/60 font-montserrat mb-6 max-w-md">
                            Uskoro stižu sveže scene iz našeg dnevnog ritma.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            href="https://www.instagram.com/primaventa.rs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white text-sm font-semibold shadow-lg"
                        >
                            Poseti Instagram
                            <ArrowUpRight size={16} />
                        </motion.a>
                    </motion.div>
                )}

            </div>
        </section>
    )
}
