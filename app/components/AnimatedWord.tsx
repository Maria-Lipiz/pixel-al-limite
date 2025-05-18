'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedWordProps {
  word: string
  index: number
  total: number
}

const AnimatedWord = ({ word, index, total }: AnimatedWordProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const start = (index - 30) / total
  const end = (index - 1) / total

  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['var(--color-graphite)', 'var(--color-silver)']
  )

  return (
    <motion.span
      ref={ref}
      style={{ opacity, color }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  )
}

export default AnimatedWord
