"use client"

import { useEffect } from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import LottieAnimation from '@/components/lottie/LottieAnimation';
import animationData from '../../public/computer.json'; // 
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/context/ThemeContext';

const Onboarding = () => {
    const { theme } = useTheme()
    return (

        <section className={`flex min-h-screen w-full relative overflow-y-hidden ${theme === 'light' ? 'bg-gray-300 ' : 'bg-gray-800 '}`}>
            <div className={`flex flex-1 flex-col items-center justify-center  min-h-screen  px-4 overflow-hidden  w-[70%]  shadow-2xl ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-900 '}`}>
                <LottieAnimation animationData={animationData} />


                <motion.h1
                    className="lg:text-3xl px-3 md:px-0 font-sans font-bold mb-4 text-blue-500 text-xl lg:w-[100%] my-4 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to SEED <span className='text-primary-100 font-sans'>Academy</span>
                </motion.h1>
                <motion.p
                    className={`md:text-lg  text-center mb-8  w-[70%]  font-sans text-sm ${theme === 'light' ? 'bg-gray-300 text-gray-900' : 'bg-gray-900 text-gray-300'}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Join us and start your journey in the world of technology.
                    Join us and start your journey in the world of technology.
                </motion.p>
                <Link href="/sign-in">
                    <motion.button
                        className="mt-4 px-6 py-3 bg-primary-100 text-white rounded-lg shadow-lg hover:bg-[#ffb428f1] md:w-[500px] w-[340px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </Link>
                {/* <div className="flex gap-3 items-center my-4 justify-center text-sm">
                    <p className='font-sans text-sm text-blue-500'>Already have an account?</p>
                    <Link href="/sign-in">Sign in</Link>
                </div> */}

            </div>

            <div className={`lg:flex bg-red-900 hidden w-full h-full flex-1 ${theme === 'light' ? 'bg-gray-900 ' : 'bg-gray-700 '}`}>

                <Image src="/acad.png" alt='image' width={800} height={1000} className='w-[500px] h-[400px] object-cover  absolute right-[20%] top-[7rem] border-8 border-primary-100 rounded-2xl -z-10 xl:z-10 shadow-2xl' />





                <Link href="/" className={`rounded-full absolute top-[6.3rem] right-[19rem] z-10 ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-800 '} p-4 animate-spin`}>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-45 lg:h-45 w-12 h-12  items-center justify-center  object-contain md:flex hidden'
                    />
                </Link>

                {/* 
                <Link href="/" className='  rounded-full  bg-white p-4 text-white absolute top-[34rem] border border-primary-100 z-10 right-[50%] '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain md:flex hidden'
                    />
                </Link> */}

            </div>
        </section>

    );
};

export default Onboarding;
