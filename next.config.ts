import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Aquí defines tus otras opciones si las necesitas
  // Ejemplo: reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pixelallimite.com',
          },
        ],
        destination: 'https://www.pixelallimite.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

