"use client"

import { useEffect } from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import LottieAnimation from '@/components/lottie/LottieAnimation';
import animationData from '../../public/animation.json'; // 
import Link from 'next/link';
import Image from 'next/image';

const Onboarding = () => {
    return (

        <section className="flex items-center justify-between w-full relative overflow-hidden">
            <div className="flex flex-1 flex-col items-center justify-center min-h-screen  overflow-hidden text-center w-full mt-[2rem]">
                <LottieAnimation animationData={animationData} />

                <motion.h1
                    className="md:text-4xl px-3 md:px-0 font-bold mb-4 text-blue-900 text-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to SEED <span className='text-primary-100'>Academy</span>
                </motion.h1>
                <motion.p
                    className="md:text-lg mb-8 text-sm w-[70%]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Join us and start your journey in the world of technology.
                </motion.p>
                <Link href="/register">            <motion.button
                    className="mt-8 px-6 py-3 bg-primary-100 text-white rounded-lg shadow-lg hover:bg-blue-600 md:w-[470px] w-[340px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Register Now
                </motion.button>
                </Link>

            </div>

            <div className="md:flex hidden w-full h-full flex-1 ">

                <Image src="/acad.png" alt='image' width={800} height={1000} className='w-[800px] h-[800px] object-cover  absolute right-[10%] top-[8rem] border-4 border-primary-100 rounded-2xl' />

            </div>
        </section>

    );
};

export default Onboarding;
