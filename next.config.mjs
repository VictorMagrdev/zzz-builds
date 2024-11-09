import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '306', 
          pathname: '/imagenes/**', 
        },
      ],
      loader: 'default',
    },
  };
  
  export default withNextIntl(nextConfig);
  