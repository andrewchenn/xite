'use client'

import { motion } from 'framer-motion'
import { ReactNode, ElementType } from 'react'

interface RevealBlockProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function RevealBlock({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealBlockProps) {
  const MotionTag = motion(Tag as ElementType)
  return (
    <MotionTag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.72,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
