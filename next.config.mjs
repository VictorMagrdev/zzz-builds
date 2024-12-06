import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zzzbuilds-server.lat',
        port: '', 
        pathname: '/imagenes/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
