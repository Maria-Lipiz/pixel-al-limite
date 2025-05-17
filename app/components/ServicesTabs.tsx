'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import DarkLightReveal from "./DarkLightReveal";
import TerminalAnimation from "./TerminalAnimation";

const services = [
  {
    id: "web",
    title: "Diseño y Desarrollo Web",
    description:
      "Creamos webs a medida, sin plantillas, centradas en resultados. Rápidas, optimizadas y con un diseño que convierte.",
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5 },
    },
  },
 
  {
    id: "seo",
    title: "SEO",
    description:
      "Aparece donde importa. Estrategias de posicionamiento basadas en datos, sin humo, con enfoque técnico y de negocio.",
    animation: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
      transition: { duration: 0.5 },
    },
  },
  {
    id: "sem",
    title: "SEM",
    description:
      "Gestionamos tus campañas como si fueran nuestras. Inversión optimizada, conversiones reales y sin trucos baratos.",
    animation: {
      initial: { opacity: 0, rotate: -5 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 5 },
      transition: { duration: 0.4 },
    },
  },
  
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("web");

  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Nuestros Servicios
      </h2>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap justify-center gap-2 p-1 rounded-full border border-white/10 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
          {services.map((service) => {
            const isActive = activeTab === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={clsx(
                  "relative px-5 py-2.5 rounded-full text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-all whitespace-nowrap overflow-hidden"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[var(--color-mint)] to-[var(--color-electric)]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className={clsx("relative z-10", isActive ? "text-black dark:text-black" : "text-white/80 hover:text-white")}>{service.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-12 px-6 py-20 md:px-12 lg:px-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService?.id}
            initial={activeService?.animation.initial}
            animate={activeService?.animation.animate}
            exit={activeService?.animation.exit}
            transition={activeService?.animation.transition}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {activeService?.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                {activeService?.description}
              </p>
            </div>

            <div className="w-full h-64 md:h-80 bg-transparent rounded-full flex items-center justify-center">
              {activeTab === "web" ? (
                <DarkLightReveal />
              ) : activeTab === "automation" ? (
                <TerminalAnimation />
              ) : (
                <span className="text-gray-400 text-sm">[Animación del servicio]</span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
