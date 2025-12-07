'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

type SmoothScrollContextValue = {
  scrollToSection: (target: string | HTMLElement | number) => void
  activeSection: string | null
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollToSection: () => { },
  activeSection: 'hero',
})

const sectionIds = ['hero', 'o-nama', 'galerija', 'asortiman', 'kontakt']

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const frameRef = useRef<number | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>('hero')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      frameRef.current = requestAnimationFrame(raf)
    }

    frameRef.current = requestAnimationFrame(raf)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          const currentId = visibleEntries[0].target.id
          setActiveSection(currentId)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-30% 0px -50% 0px',
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection: SmoothScrollContextValue['scrollToSection'] = (target) => {
    if (typeof window === 'undefined') {
      return
    }

    if (typeof target === 'string') {
      const element = document.getElementById(target)
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, { offset: 0 })
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      return
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0 })
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ scrollToSection, activeSection }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export const useSmoothScroll = () => useContext(SmoothScrollContext)

