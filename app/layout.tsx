import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

// Fuentes
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-primary',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Metadata
export const metadata: Metadata = {
  title: 'Pixel al Límite | Agencia de Marketing Digital para PyMEs',
  description:
    'Impulsamos negocios a través de diseño web, desarrollo, SEO y SEM. Soluciones digitales que inspiran y venden.',
  keywords: [
    'Agencia de Marketing Digital para PyMEs',
    'Agencia de Marketing Digital',
    'Marketing Online para empresas',
    'Diseño web para PyMEs',
    'Desarrollo web para PyMEs',
    'SEO para PyMEs',
    'SEM para PyMEs',
  ],
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Pixel al Límite | Agencia de Marketing Digital para PyMEs',
    description:
      'Estrategias digitales que convierten: diseño web, SEO, SEM y más. Soluciones integrales para pequeñas y medianas empresas.',
    url: 'https://pixelallimite.com',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel al Límite | Agencia Digital para PyMEs',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel al Límite',
    description:
      'Diseño web, SEO y estrategias digitales pensadas para PyMEs. Hacemos que tu negocio crezca en Internet.',
    images: ['https://pixelallimite.com/og-image.jpg'],
    creator: '@pixelallimite',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* ⚠️ GTM se cargará condicionalmente en CookieConsent.tsx */}
      </head>
      <body className="font-sans bg-jet text-white">
        {/* Fallback para usuarios sin JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSJNN45B"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Banner que decide si cargar GTM */}
        <CookieConsent />
      </body>
    </html>
  )
}
