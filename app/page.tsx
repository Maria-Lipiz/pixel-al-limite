import dynamic from 'next/dynamic'
import Script from 'next/script'
import {
  IconNumber1Small,
  IconNumber2Small,
} from '@tabler/icons-react'

// ✅ Importaciones dinámicas optimizadas
const FloatingPixelsBackground = dynamic(() => import('./components/FloatingPixelsBackground'))
const Hero = dynamic(() => import('./components/Hero'))
const GlowCard = dynamic(() => import('./components/GlowCardComponent'))
const PixelButton = dynamic(() => import('./components/PixelButton'))

export const metadata = {
  title: 'Pixel al Límite | Agencia de Marketing Digital para PyMEs',
  description:
    'Diseño web, desarrollo web, SEO, SEM, Publicidad Digital, Publicidad en Google y Meta, automatización de procesos y más. Creamos experiencias digitales que inspiran y venden.',
  keywords: [
    'Agencia de Marketing Digital para PyMEs',
    'Agencia Marketing Digital para PyMEs',
    'Agencia Marketing Digital para Empresas',
    'Agencia de Marketing para PyMEs',
    'Agencia de Marketing para empresas',
    'Agencia de Marketing para influencers',
    'Marketing para influencers',
  ],
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Pixel al Límite | Agencia de Marketing Digital',
    description:
      'Impulsa las ventas de tu negocio con una agencia estratégica, tecnológica y atrevida. Diseño, datos y resultados en cada píxel.',
    url: 'https://pixelallimite.com',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel al Límite | Agencia de Marketing Digital en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel al Límite',
    description: 'Diseño web, marketing digital y estrategias digitales que inspiran y convierten.',
    images: ['https://pixelallimite.com/og-image.jpg'],
    creator: '@pixelallimite',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixel al Límite",
    "url": "https://pixelallimite.com",
    "logo": "https://pixelallimite.com/logo.png",
    "description": "Agencia de Marketing Digital en España especializada en diseño web, desarrollo web, SEO, SEM y Social Media para PyMEs, empresas e influencers.",
    "email": "hello@pixelallimite.com",
    "telephone": "+34 611 733 341",
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "sameAs": [
      "https://www.facebook.com/pixelallimite",
      "https://www.linkedin.com/company/pixelallimite",
      "https://twitter.com/pixelallimite"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Diseño Web",
          "description": "Diseño web para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Desarrollo Web",
          "description": "Desarrollo web para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Posicionamiento SEO",
          "description": "Posicionamiento SEO para PyMEs y empresas que buscan crecer"
        },
        {
          "@type": "Offer",
          "name": "Publicidad Digital, Publicidad en Google y Meta y SEM",
          "description": "Marketing Digital y Publicidad Online para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Gestión de redes sociales",
          "description": "Creación de contenido, campañas en redes sociales, estrategias de marketing en redes sociales y gestión de comunidades para PyMEs e influencers"
        },
        {
          "@type": "Offer",
          "name": "Automatizaciones para tu empresa",
          "description": "Automatizaciones para PyMEs y empresas"
        },
      ]
    }
  }

  return (
    <>
      <Script
        id="schema-dw"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="w-full">
        {/* SEO invisible */}
        <section className="sr-only">
          <h1>Aumenta tus ventas y capta mas clientes</h1>
        </section>

        {/* Hero visual interactivo */}
        <Hero
          title={<>Tú no quieres una <span className="animated-gradient-text">web.</span></>}
          subtitle="Quieres que tus clientes potenciales se acuerden de ti y no de tu competencia"
          
        />

        <section className="px-6 py-12 md:px-8 lg:px-12 relative overflow-hidden">
          {/* Cabecera */}
          <div className="mb-16">
            <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
              Sé mejor que tú lo que necesitas
            </h2>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal max-w-5xl">
              Igual piensas que quieres una web más bonita. 
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal max-w-5xl">
              O un perfil en redes sociales 
              con un millón de métricas absurdas que luego nadie mira
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal max-w-5xl">
              O una increíble 
              aplicación a medida por algún motivo que todos desconocemos
      
            </p>
            
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal max-w-5xl">
              Sin embargo, 
              es probable que ninguna de esas cosas te devuelva la tranquilidad.
            </p>
            
            
            
          </div>

          
        </section>


        <section className="relative overflow-hidden px-6 py-12 md:px-8 lg:px-12">
          {/* Círculo azul izquierdo */}
          <div className="absolute left-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-purple)] opacity-30 blur-3xl pointer-events-none" />

          {/* Círculo magenta derecho */}
          <div className="absolute right-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-lemon)] opacity-30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl ">
            <h2 className=" tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            ¿Quién soy yo para decirte esto?
            </h2>

            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal">
              Pues una chica normal que trabaja desde el salón de su casa.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             -Que sí, que me digas más sobre tí-
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
            *Silencio incomodo...*
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             Este es el punto en el que se supone que debería hablarte de las muchas 
             ganas que tengo de revolucionar el mundo empresarial, de lo innovadora que 
             soy, del gran equipo que tengo – Spoiler: no tengo equipo –, de las empresas 
             con las que he trabajado y han quedado encantadísimas con mis servicios y 
             chorradas varias de esas que le encantan al algoritmo de Google.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             No lo haré, no me parece correcto. 
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             Soy una persona como tú, con días malos y no tan malos. No me gusta hacer 
             perder el tiempo a nadie ni que me lo hagan perder a mí.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             Me gusta aprender de los demas y ayudar a los demás.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
            Ah, y ver First Dates.
            </p>
             <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             Aparte de eso, <strong className="animated-gradient-text-greenblue">construyo webs y escribo textos para que personas los lean y 
             compren cosas.</strong> Esto es a lo que me dedico, y además, también me gusta.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
             ¿Es suficiente?
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
              Ni idea. Depende de lo que busques.
            </p>
            <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
              Solo hay tres cosas que debes saber…
            </p>
          </div>
        </section>
        
        <section className="relative px-6 py-12 md:px-8 lg:px-12 gap-12">
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
           Primera:
          </p>
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
           No trabajo con todo el mundo.
          </h2>
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
           Y si dudas, me mareas o me llamas para hacerme preguntas sin sentido, ten por seguro
           que tampoco trabajaré contigo.
          </p>
          
        
        </section>
        <section className="relative px-6 py-12 md:px-8 lg:px-12 gap-12">
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
           Segunda:
          </p>
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
           Mi tarifa mínima es de <span className="animated-gradient-text-pinkyellow">8.000€ + IVA...</span>
          </h2>
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
            ... y este precio no bajará ni es negociable.
          </p>
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
           Todos los proyectos están hechos a medida y pensados para que recuperes varias veces tu inversión, por lo que la cuantía de cada uno será diferente. Sim embargo, 
            si quieres una solución por menos de 8.000€, no soy la persona que estás buscando.
          </p>
        </section>


        <section className="relative px-6 py-12 md:px-8 lg:px-12 gap-12">
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
           Tercera:
          </p>
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
           Este será el proceso si decido trabajar contigo
          </h2>
          <p className="text-gray-100 font-mono z-1 mb-12 text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-norma">
          y estará dividido en dos fases. 
          </p>
          <div className="grid grid-cols-2 relative z-10">
            <GlowCard
              title="Asesoría y consultoría"
              text={`Hablaremos largo y tendido acerca de tu negocio e idearé la mejor estrategia para tu empresa.`}
              icon={<IconNumber1Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Ejecución de la estrategia"
              text={`Llevaré a la practica todo lo hablado y construiré la web alineada con la estrategia.`}
              icon={<IconNumber2Small className="w-8 h-8" />}
            />
          </div>
        </section>

        
        <section className="px-6 py-20 md:px-8 lg:px-12 h-[90vh] text-center flex flex-col gap-4 items-center justify-center">
          <p className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white">
            ¿Que todo te parece <span className="animated-gradient-text-greenblue">bien?</span>
          </p>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono text-gray-500 font-medium mb-2">Perfecto, pues...</p>
          
          <PixelButton
            href="/contacto"
            text="Me contactas aquí"
            ariaLabel="Botón para contactar"
            gradient="linear-gradient(to right, #00F0B5,#38BDF8 )"
            hoverGradient="linear-gradient(to right, #38BDF8,#00F0B5)"
          />
        </section>

        {/* Fondo animado */}
        <FloatingPixelsBackground />
      </main>
    </>
  )
}
