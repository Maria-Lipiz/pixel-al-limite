"use client"

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

export default function DarkLightReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragXPx = useMotionValue(0); // Valor en píxeles
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current instanceof HTMLDivElement) {
      setContainerWidth(containerRef.current.offsetWidth);
      dragXPx.set(containerRef.current.offsetWidth / 2); // Valor inicial
    }
  }, []);

  const clipLeft = useTransform(dragXPx, (px) => `inset(0px 0px 0px ${px}px)`);
  const clipRight = useTransform(dragXPx, (px) => `inset(0px ${containerWidth - px}px 0px 0px)`);

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number } }
  ) => {
    if (!(containerRef.current instanceof HTMLDivElement)) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const newX = info.point.x - bounds.left;
    dragXPx.set(Math.min(Math.max(newX, 0), bounds.width));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full max-w-md mx-auto aspect-[4/4] overflow-hidden shadow-lg select-none"
    >
      {/* Modo claro */}
      <motion.div
        className="absolute inset-0 z-0 bg-white text-black p-6 flex flex-col gap-4"
        style={{ clipPath: clipLeft }}
      >
        <div className="text-sm font-semibold tracking-widest text-gray-500">CREA TU SITIO WEB</div>
        <div className="text-2xl font-bold">¿QUIERES MODO OSCURO?</div>
        <div className="flex gap-3">

        <button className="flex-1 rounded-full  bg-[var(--color-graphite)] hover:scale-105 transition-all duration-300 ease-out text-white py-2 font-medium ">¡Si!</button>
        <button className="flex-1 rounded-full bg-black hover:bg-[var(--color-mint)] text-white hover:text-black py-0 font-medium">¡Que siiiiii!</button>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="rounded-xl border p-4 hover:scale-105 hover:rotate-1 transition-all duration-400 ease-out">
            <p className="text-lg font-semibold">E-COMMERCE</p>
            <p className="text-xs text-gray-600 font-semibold mb-1">Incrementa tus ventas con nuestras tiendas online 100% optimizadas</p>
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:-rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Landing Page</p>
          <p className="text-xs text-gray-600 font-semibold mb-1">Presenta tu producto o servicio a tus clientes y recibe mas leads</p>
            
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Web corporativa</p>
          <p className="text-xs text-gray-600 font-semibold mb-1">Aumenta la autoridad de tu marca y mejora la experiencia de usuario</p>
            
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:-rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Web a medida</p>
          <p className="text-xs text-gray-600 font-semibold mb-1">Crea de cero tu sitio web e implementa funcionalidades increibles</p>
            
          </div>
          
        </div>
      </motion.div>

      {/* Modo oscuro */}
      <motion.div
        className="absolute inset-0 z-10 bg-zinc-900 text-white p-6 flex flex-col gap-4"
        style={{ clipPath: clipRight }}
      >
        <div className="text-sm font-semibold tracking-widest text-gray-500">CREA TU SITIO WEB</div>
        <div className="text-2xl font-bold">¿QUIERES MODO OSCURO?</div>
        <div className="flex gap-3">

          <button className="flex-1 rounded-full  bg-[var(--color-graphite)] hover:scale-105 transition-all duration-300 ease-out text-white py-2 font-medium ">¡Si!</button>
          <button className="flex-1 rounded-full bg-black hover:bg-[var(--color-mint)] text-white hover:text-black py-0 font-medium">¡Que siiiiii!</button>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="rounded-xl border p-4 hover:scale-105 hover:rotate-1 transition-all duration-400 ease-out">
            <p className="text-lg font-semibold">E-COMMERCE</p>
            <p className="text-xs text-gray-400 font-semibold mb-1">Incrementa tus ventas con nuestras tiendas online 100% optimizadas</p>
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:-rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Landing Page</p>
          <p className="text-xs text-gray-400 font-semibold mb-1">Presenta tu producto o servicio a tus clientes y recibe mas leads</p>
            
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Web corporativa</p>
          <p className="text-xs text-gray-400 font-semibold mb-1">Aumenta la autoridad de tu marca y mejora la experiencia de usuario</p>
            
          </div>
          <div className="rounded-xl border p-4 hover:scale-105 hover:-rotate-1 transition-all duration-400 ease-out">
          <p className="text-lg font-semibold">Web a medida</p>
          <p className="text-xs text-gray-400 font-semibold mb-1">Crea de cero tu sitio web e implementa funcionalidades increibles</p>
            
          </div>
          
        </div>
      </motion.div>

      {/* Slider */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={handleDrag}
        className="absolute top-0 bottom-0 w-1 z-20 bg-[#00F0B5]"
        style={{ x: dragXPx }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Pulso animado */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#00F0B5] opacity-30"
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative rounded-full bg-[#00F0B5] shadow-lg px-3 py-1 flex items-center justify-center">
            <span className="text-[#030712] text-base font-semibold animate-pulse">Desliza</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}