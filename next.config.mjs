<<<<<<< HEAD

=======
// import withPWA from "next-pwa";
// import withPWA from 'next-pwa';
>>>>>>> parent of a3cd709 (commiting)

/** @type {import('next').NextConfig} */
const nextConfig = {

    swcMinify: false,
    output: 'export',


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

<<<<<<< HEAD


=======
// const pwaConfig = withPWA({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     fallbacks: {
//         document: '/offline',
//     },
// });

>>>>>>> parent of a3cd709 (commiting)
export default nextConfig;
