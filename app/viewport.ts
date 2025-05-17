import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // evita el zoom en móviles (opcional)
}
