"use client"


import { slideShowData } from '@/constants';
import { HeroProps } from '@/constants/type';
// components/Hero.tsx
import { motion } from 'framer-motion';

import Image from 'next/image';
import { useEffect, useState } from 'react';




const DynamicHero: React.FC<HeroProps> = ({ title, description }) => {

    const [currentSlide, setCurrentSlide] = useState(1);

    // create useEffect to manipulate or  vhange our items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev === slideShowData.length - 1 ? 0 : prev + 1)
        }, 5000)
        // clean interval to avoid memory leaking
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={slideShowData[currentSlide].image}>
            <div className="hero-bg"></div>
            <div className="hero-content">
                <motion.h1
                    className="text-5xl font-bold mb-4 ero-header"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >{title}</motion.h1>
                <div className="hero-divider"></div>
                <motion.h2
                    className="text-3xl text-center w-[80%] mx-auto max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {description}
                </motion.h2>
            </div>
        </div>
    );
};

export default DynamicHero;
