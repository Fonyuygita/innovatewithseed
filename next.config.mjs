/** @type {import('next').NextConfig} */
// checking for issues
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

export default nextConfig;
