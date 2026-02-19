/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Garante que o build não tente gerar páginas estáticas se houver erro de contexto
  output: 'standalone', 
};

export default nextConfig;
