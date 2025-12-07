'use client'

export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-[2px] w-24 bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto ${className}`}
    />
  )
}

