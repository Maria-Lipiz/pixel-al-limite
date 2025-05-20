'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setShowBanner(true)
    else if (consent === 'accepted') loadGTM()
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    loadGTM()
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  const loadGTM = () => {
    if (document.getElementById('gtm-script')) return

    const script = document.createElement('script')
    script.id = 'gtm-script'
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WSJNN45B'
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime() })
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-2 left-0 right-0 bg-transparent text-white px-4 py-3 md:px-5 md:py-3 mx-5 rounded-full border-1 border-gray-500 font-mono text-xs sm:text-base lg:text-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p>
        Nos obligan a molestarte con el uso de cookies.
      </p>
      <div className="flex gap-2">
        <button onClick={handleReject} className="bg-[#2C2C2E] hover:bg-gray-700 px-4 py-1 rounded-full">
          Rechazar
        </button>
        <button onClick={handleAccept} className="bg-[#FF4ECD] hover:bg-[#8B5CF6] px-4 py-1 rounded-full">
          Aceptar galletas 🍪
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
