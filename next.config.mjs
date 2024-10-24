import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '302', 
          pathname: '/imagenes/**', 
        },
      ],
      loader: 'default',
    },
  };
  
  export default withNextIntl(nextConfig);
  