'use client'

import Link from 'next/link'

interface PricingCardProps {
  title: string
  price: string
  unit?: string
  features: string[]
  highlight?: boolean
  buttonLabel: string
  buttonHref: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  backgroundColor?: string
  textColor?: string
  buttonTextColor?: string
  buttonBgColor?: string
  buttonBorderColor?: string
  buttonBorderWidth?: string
  footerText?: string
  footerTextColor?: string

  // 🔥 NUEVAS PROPS
  subUnitText?: string
  subUnitTextColor?: string
  priceLabelColor?: string // 🎯 NUEVO
  priceLabelText?: string
}

const PricingCard = ({
  title,
  price,
  unit = '',
  features,
  highlight = false,
  buttonLabel,
  buttonHref,
  gradientFrom = '#ff00cc',
  gradientVia = '#333399',
  gradientTo = '#00ffcc',
  backgroundColor = '#030712',
  textColor = '#ffffff',
  buttonTextColor = '#ffffff',
  buttonBgColor = 'transparent',
  buttonBorderColor = '#ffffff33',
  buttonBorderWidth = '1px',
  footerText,
  footerTextColor = '#999999',
  subUnitText,
  subUnitTextColor,
  priceLabelColor, // ⬅️ añadido aquí
  priceLabelText = 'desde', // 💡 Valor por defecto
  
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-[2px] rounded-3xl overflow-hidden transition-shadow duration-500 ${
        highlight ? 'animated-border' : 'border border-white/10'
      }`}
      style={
        highlight
          ? {
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
              boxShadow: `0 0 0 transparent`,
            }
          : undefined
      }
      onMouseEnter={e => {
        if (highlight) {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${gradientFrom}, 0 0 0px ${gradientVia}, 0 0 0px ${gradientTo}`
        }
      }}
      onMouseLeave={e => {
        if (highlight) {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent'
        }
      }}
    >
      <div
        className="relative z-10 flex flex-col h-full p-6 rounded-3xl"
        style={{ backgroundColor }}
      >
        <CardContent />
      </div>
    </div>
  )

  function CardContent() {
    return (
      <>
        <h3 className="text-sm uppercase tracking-wide mb-2" style={{ color: textColor }}>
          {title}
        </h3>
        <div
          className="text-xs uppercase tracking-wide mb-1"
          style={{ color: priceLabelColor || textColor }} // 🎯 APLICACIÓN
        >
          {priceLabelText}
        </div>
        <div className="flex flex-row items-end gap-1">
          <div className="text-4xl font-bold mb-2" style={{ color: textColor }}>
            {price}
          </div>
          {unit && (
            <div className="text-sm mb-2" style={{ color: `${textColor}99` }}>
              {unit}
            </div>
          )}
        </div>
        {subUnitText && (
          <p className="text-sm font-mono" style={{ color: subUnitTextColor || textColor }}>
            {subUnitText}
          </p>
        )}
        <div className="border-t border-white/15 my-4" />
        <ul className="space-y-2 mb-6 text-sm" style={{ color: `${textColor}cc` }}>
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img src="/icons/pixel.svg" alt="Icono pixel" className="w-3 h-3" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto w-full">
          <Link
            href={buttonHref}
            className="block rounded-full text-sm font-semibold text-center hover:scale-105 transition-all duration-400"
            style={{
              color: buttonTextColor,
              backgroundColor: buttonBgColor,
              borderColor: buttonBorderColor,
              borderWidth: buttonBorderWidth,
              borderStyle: 'solid',
              padding: '0.5rem 1rem',
            }}
          >
            {buttonLabel}
          </Link>
        </div>
        {footerText && (
          <p className="mt-3 text-xs text-center" style={{ color: footerTextColor }}>
            {footerText}
          </p>
        )}
      </>
    )
  }
}

export default PricingCard
