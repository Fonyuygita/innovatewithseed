"use client"

import React, { useEffect, useState } from 'react'

import Offers from './Offers'
import { useTheme } from './context/ThemeContext'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Technologies = () => {
    const [show, setShow] = useState(false)
    const { theme } = useTheme()
    const showMore = () => {
        // setShow(true)
        console.log("showing more..");
    }



    const controls = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section className={`w-full   py-[3rem] overflow-hidden ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 bg-gray-800'}`} ref={ref}>
            <motion.h1
                className="text-[1.9rem] md:text-3xl text-blue-500 font-extrabold mt-3 text-center"
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Grow Your Tech Career With The<span className="text-primary-100">Best</span>
            </motion.h1>

            <Offers />



        </section>
    )
}

export default Technologies
