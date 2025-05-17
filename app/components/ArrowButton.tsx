'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type ArrowButtonProps = {
  href: string
  text: string
  ariaLabel: string
  className?: string
}

const ArrowButton = ({ href, text, ariaLabel, className = '' }: ArrowButtonProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={`group flex items-center gap-2 sm:gap-4 rounded-full font-semibold text-white border border-[#2C2C2E] bg-[#020617] transition-all ${className}`}
      aria-label={ariaLabel}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#0A1A2F'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#020617'
      }}
    >
      {text}
      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 transition-transform duration-300 group-hover:rotate-135" />
    </motion.a>
  )
}

export default ArrowButton
