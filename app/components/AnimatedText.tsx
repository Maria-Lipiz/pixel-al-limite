'use client'

import React from 'react'
import type { JSX } from 'react'
import AnimatedWord from './AnimatedWord'

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
  const words = text.split(' ')

  return React.createElement(
    Tag,
    { className, ...rest },
    words.map((word, i) => (
      <AnimatedWord key={i} word={word} index={i} total={words.length} />
    ))
  )
}

export default AnimatedText
