"use client"


// import { slideShowData } from '@/constants';
import { HeroProps } from '@/constants/type';
// components/Hero.tsx
import { motion } from 'framer-motion';

// import Image from 'next/image';
import { useEffect, useState } from 'react';

const slideShowData = [
    {
        id: 1,
        title: "Always fresh & always crispy & always hot",
        image: "hero-container1"
    },
    {
        id: 2,
        title: "We Deliver your order wherever you are ",
        image: "hero-container2"
    },
    {
        id: 3,
        title: "The bet piza to share with your family",
        image: "hero-container3"
    },

    {
        id: 4,
        title: "The bet piza to share with your family",
        image: "hero-container4"
    },


    {
        id: 5,
        title: "The bet piza to share with your family",
        image: "hero-container5"
    },

    {
        id: 5,
        title: "The bet piza to share with your family",
        image: "hero-container5"
    }


]


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
        <div className={`${slideShowData[currentSlide].image} `
        }>
            <div className="hero-bg"></div>
            <div className="hero-content">
                <motion.h1
                    className="text-5xl font-bold mb-4 hero-header"
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
