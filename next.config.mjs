
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
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '/**',
            },

        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};


export default nextConfig;
