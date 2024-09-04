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
            <div className="flex flex-1 flex-col items-center justify-center min-h-screen  overflow-hidden  w-full mt-[2rem] bg-white shadow-2xl">
                <LottieAnimation animationData={animationData} />

                <motion.h1
                    className="md:text-4xl px-3 md:px-0 font-bolder mb-4 text-blue-500 text-2xl w-[60%] text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to SEED <span className='text-primary-100'>Academy</span>
                </motion.h1>
                <motion.p
                    className="md:text-lg md:text-left text-center mb-8 text-sm w-[60%] text-blue-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Join us and start your journey in the world of technology.
                    Join us and start your journey in the world of technology.
                </motion.p>
                <Link href="/register">            <motion.button
                    className="mt-4 px-6 py-3 bg-primary-100 text-white rounded-lg shadow-lg hover:bg-blue-600 md:w-[600px] w-[340px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Register Now
                </motion.button>
                </Link>

            </div>

            <div className="md:flex hidden w-full h-full flex-1 ">

                <Image src="/acad.png" alt='image' width={800} height={1000} className='w-[800px] h-[600px] object-cover  absolute right-[10%] top-[14rem] border-8 border-primary-100 rounded-2xl -z-10 xl:z-10' />


                <Link href="/" className='  rounded-full  bg-white p-4 text-white absolute top-[34rem] border border-primary-100 z-10 right-[50%] '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain md:flex hidden'
                    />
                </Link>

            </div>
        </section>

    );
};

export default Onboarding;
