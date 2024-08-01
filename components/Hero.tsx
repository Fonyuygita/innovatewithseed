"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { FaUserPlus } from 'react-icons/fa';


const data = [
    {
        id: 1,
        title: "Always fresh & always crispy & always hot",
        image: "/banner.png"
    },
    {
        id: 2,
        title: "We Deliver your order wherever you are ",
        image: "/bg.png"
    },
    {
        id: 3,
        title: "The bet piza to share with your family",
        image: "/bg1."
    }


]
const Hero = () => {

    // usestate to manipulate our slides
    const [currentSlide, setCurrentSlide] = useState(1);

    // create useEffect to manipulate or  vhange our items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1)
        }, 2000)
        // clean interval to avoid memory leaking
        return () => clearInterval(interval)
    }, [])


    const text = "The Future of Tech"
    return (
        <section className='w-screen overflow-hidden h-[360px] md:h-[500px] relative mt-3'>
            <Image src="/banner.png" alt='hero' fill className='w-full h-full' />

            {/* hero description */}
            <div className="flex flex-col gap-4 absolute z-10 top-[9rem] w-[80%] md:w-[40%] left-[5%]">
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-start text-white font-bold .text-36-bold '>
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className={index >= 4 && index <= 9 || index >= 14 ? "text-primary-100" : ""}
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
                </h1>
                <p className='text-white text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus? Q</p>
                <CustomButton
                    title='Read More'
                    icon={<FaUserPlus />}
                    extraStyle="min-w-[30%] md:w-[27%] md:flex  hidden"

                />
            </div>
        </section>
    )
}

export default Hero
