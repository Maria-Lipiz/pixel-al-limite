import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título de la página | Pixel al Límite',
  description: 'Descripción breve y potente con palabras clave.',
  keywords: ['palabra clave 1', 'palabra clave 2', 'Pixel al Límite'],
  robots: 'index, follow',
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  openGraph: {
    title: 'Título de la página | Pixel al Límite',
    description: 'Descripción potente para compartir en redes sociales.',
    url: 'https://pixelallimite.com/servicios/nombre-del-servicio',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image-generica.png',
        width: 1200,
        height: 630,
        alt: 'Título Open Graph',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Título de la página | Pixel al Límite',
    description: 'Descripción para Twitter.',
    images: ['https://pixelallimite.com/og-image-generica.png'],
  },
}

export default function ServicioDisenoDesarrolloWeb() {
  return (
    <main className="w-full px-6 xl:px-20 pt-28 pb-20 max-w-7xl mx-auto">

      {/* H1 principal SEO optimizado con animación de entrada */}
      <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white mb-6 animate-fade-in">
        Diseño y desarrollo web para PyMEs que quieren resultados
      </h1>

      {/* Subtítulo con efecto sutil */}
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-12 animate-fade-in delay-200">
        Creamos soluciones de diseño y desarrollo web a medida para pequeñas y medianas empresas que quieren crecer.
      </p>

      {/* ¿Por qué lo necesitas ahora? */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          ¿Por qué tu pyme necesita diseño y desarrollo web ahora?
        </h2>
        <p className="text-gray-300 max-w-3xl">
          El entorno digital es el primer punto de contacto con tus clientes. Si tu web no transmite profesionalismo, confianza y claridad, estás perdiendo oportunidades cada día.
        </p>
      </section>

      {/* ¿Cómo ayudamos? */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            ¿Cómo puede ayudarte Pixel al Límite con diseño y desarrollo web?
          </h2>
        </div>
        {[
          {
            title: "Estrategia digital centrada en resultados",
            desc: "Nos enfocamos en la conversión, no solo en lo estético."
          },
          {
            title: "Diseño UX/UI personalizado",
            desc: "Cada web está pensada para tu cliente ideal, no usamos plantillas."
          },
          {
            title: "Código limpio y escalable",
            desc: "Desarrollamos desde cero, rápido, seguro y optimizado para SEO."
          }
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2d2d2d] p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Proceso */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
          Nuestro proceso paso a paso
        </h2>
        <ol className="space-y-4 border-l-2 border-gray-700 pl-4">
          {[
            "Reunión estratégica y diagnóstico digital",
            "Propuesta UX/UI y validación de estructura",
            "Desarrollo técnico y lanzamientos progresivos"
          ].map((step, index) => (
            <li key={index} className="text-gray-300 relative before:absolute before:left-[-10px] before:top-1 before:w-3 before:h-3 before:bg-electric before:rounded-full">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Costes */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          ¿Cuánto cuesta diseñar y desarrollar una web para tu pyme?
        </h2>
        <p className="text-gray-300 max-w-3xl mb-4">
          Cada proyecto es único. El precio depende de la complejidad, funcionalidades y necesidades específicas, pero ofrecemos packs orientativos y presupuesto gratuito.
        </p>
        <a
          href="/contacto"
          className="inline-block mt-4 px-6 py-3 font-semibold rounded-full bg-gradient-to-r from-electric to-mint text-white hover:from-magenta hover:to-electric transition"
        >
          Solicita tu presupuesto
        </a>
      </section>

      {/* Diferenciales */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          ¿Por qué elegir Pixel al Límite?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>✔ Diseño pixel perfect obsesivo</li>
          <li>✔ Desarrollo técnico sólido y escalable</li>
          <li>✔ Acompañamiento personalizado</li>
          <li>✔ Enfoque en ventas, no solo estética</li>
        </ul>
      </section>

      {/* Proyectos previos */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Proyectos anteriores y ejemplos visuales
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="aspect-video bg-gray-800 rounded-xl"></div>
          <div className="aspect-video bg-gray-800 rounded-xl"></div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Preguntas frecuentes
        </h2>
        <div className="space-y-6">
          <details className="bg-[#1f1f1f] rounded-lg p-4">
            <summary className="text-white font-semibold cursor-pointer">¿Cuánto tarda este servicio?</summary>
            <p className="text-gray-400 mt-2">Entre 2 a 4 semanas, dependiendo del alcance.</p>
          </details>
          <details className="bg-[#1f1f1f] rounded-lg p-4">
            <summary className="text-white font-semibold cursor-pointer">¿Puedo pagarlo en fases o plazos?</summary>
            <p className="text-gray-400 mt-2">Sí, ofrecemos planes flexibles para adaptarnos a ti.</p>
          </details>
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          ¿Listo para transformar tu presencia online?
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Contáctanos y lleva tu web al siguiente nivel.
        </p>
        <a
          href="/contacto"
          className="inline-block px-8 py-4 font-semibold rounded-full bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-electric)] text-white hover:from-[var(--color-electric)] hover:to-[var(--color-mint)] transition text-lg"
        >
          Empezar ahora
        </a>
      </section>
    </main>
  );
}
