"use client"

import { useEffect } from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import LottieAnimation from '@/components/lottie/LottieAnimation';
import animationData from '../../public/animation.json'; // 
import Link from 'next/link';

const Onboarding = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden text-center">
            <motion.h1
                className="md:text-4xl px-3 md:px-0 font-bold mb-4 text-blue-500 text-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to SEED Academy
            </motion.h1>
            <motion.p
                className="md:text-lg mb-8 text-sm w-[60%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Join us and start your journey in the world of technology.
            </motion.p>
            <LottieAnimation animationData={animationData} />
            <Link href="/register">            <motion.button
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Register Now
            </motion.button>
            </Link>

        </div>
    );
};

export default Onboarding;
