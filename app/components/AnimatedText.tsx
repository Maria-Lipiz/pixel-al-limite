'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import type { JSX } from 'react'

type Props<T extends keyof JSX.IntrinsicElements> = {
  text: string
  className?: string
  as?: T
} & JSX.IntrinsicElements[T]

const AnimatedText = <T extends keyof JSX.IntrinsicElements = 'p'>({
  text,
  className = '',
  as,
  ...rest
}: Props<T>) => {
  const Tag = as || 'p'
  const containerRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const words = text.split(' ')

  // Creamos los motion values por fuera del map
  const wordAnimations = words.map((_, i) => {
    const start = (i - 30) / words.length
    const end = (i - 1) / words.length

    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
    const color = useTransform(
      scrollYProgress,
      [start, end],
      ['var(--color-graphite)', 'var(--color-silver)']
    )

    return { opacity, color }
  })

  return React.createElement(
    Tag,
    { ref: containerRef, className, ...rest },
    words.map((word, i) => (
      <motion.span
        key={i}
        style={wordAnimations[i]}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))
  )
}

export default AnimatedText
