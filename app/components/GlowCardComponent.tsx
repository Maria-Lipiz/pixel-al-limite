// components/GlowCard.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';

interface GlowCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const GlowCard = ({ title, text, icon }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setCardSize({ width: rect.width, height: rect.height });
  };

  useEffect(() => {
    const updateCardSize = () => {
      if (cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        setCardSize({ width, height });
      }
    };
    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-gradient-to-br from-[#030711] to-white/5 px-5 py-5 max-w-300 lg:max-w-130 overflow-hidden border border-white/10"
    >
      {/* Independent border glow per card */}
      {isHovered && cardSize.width > 0 && cardSize.height > 0 && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <svg
            viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <radialGradient id="glowGradient" cx={mousePos.x} cy={mousePos.y} r="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect
              x="0.5"
              y="0.5"
              width={cardSize.width - 1}
              height={cardSize.height - 1}
              rx="0"
              ry="0"
              fill="none"
              stroke="url(#glowGradient)"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-start gap-2">
        <div className="bg-transparent border border-white/20 p-1 mb-2 rounded-full items-center justify-center w-auto h-auto text-white animate-pulse">
          {icon}
        </div>
        <h3 className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-tight">
          {title}
        </h3>
        
        
        
        <p className="text-gray-100 font-mono text-sm lg:text-base xl:text-lg 2xl:text-xl leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
};

export default GlowCard;