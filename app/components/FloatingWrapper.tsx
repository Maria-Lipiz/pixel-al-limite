'use client'

import { motion } from 'framer-motion'
import React from 'react'

type FloatingWrapperProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

const FloatingWrapper = ({ children, className = '', delay = 0 }: FloatingWrapperProps) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingWrapper
