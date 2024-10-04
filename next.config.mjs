/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '301', 
          pathname: '/imagenes/**', 
        },
      ],
      loader: 'default',
    },
  };
  
  export default nextConfig;
  