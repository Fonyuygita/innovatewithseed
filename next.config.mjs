// import withPWA from "next-pwa";
// import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {

    swcMinify: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

// const pwaConfig = withPWA({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     fallbacks: {
//         document: '/offline',
//     },
// });

export default nextConfig;
