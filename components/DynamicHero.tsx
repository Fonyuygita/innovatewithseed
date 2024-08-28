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
                    className="lg:text-5xl md:text-3xl text-lg font-bold mb-4 hero-header md:mt-[3rem] my-[6rem] "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >{title}</motion.h1>
                <div className="hero-divider"></div>
                <motion.h2
                    className="md:text-3xl text-center w-full mx-auto max-w-2xl text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {description.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className=""
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.1,
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>
        </div>
    );
};

export default DynamicHero;
