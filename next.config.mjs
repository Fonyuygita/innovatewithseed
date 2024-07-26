/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    images: {
        domains: ["images.pexels.com"],
        loader: "default",
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
