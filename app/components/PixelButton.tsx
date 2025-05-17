'use client'

import React from 'react'
import { motion } from 'framer-motion'

type PixelButtonProps = {
  href: string
  text: string
  ariaLabel: string
  className?: string
  gradient?: string
  hoverGradient?: string
}

const PixelButton = ({
  href,
  text,
  ariaLabel,
  className = '',
  gradient = 'linear-gradient(to right, #38BDF8, #00F0B5)',
  hoverGradient = 'linear-gradient(to right, #FF4ECD, #38BDF8)',
}: PixelButtonProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundImage = hoverGradient
    e.currentTarget.style.boxShadow = '0 0 6px rgba(56,189,248,0.6)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundImage = gradient
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={`group flex items-center text-center gap-2 sm:gap-4 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out ${className}`}
      aria-label={ariaLabel}
      style={{ backgroundImage: gradient }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/icons/pixel.svg"
        alt="Icono Pixel"
        className="w-4 h-4 rotate-90 transition-transform duration-300 group-hover:-translate-x-1"
      />
      {text}
      <img
        src="/icons/pixel.svg"
        alt="Icono Pixel"
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.a>
  )
}

export default PixelButton
