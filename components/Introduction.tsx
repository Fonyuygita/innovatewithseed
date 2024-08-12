"use client"

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Link from 'next/link';

const Introduction = () => {
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
        <section ref={ref} className="mt-[8rem] flex flex-col md:flex-row justify-between gap-[7rem] px-[5rem] mb-[2rem] items-center w-full">
            <div className="md:flex hidden w-full h-[400px]  pt-[4rem] absolute top-1 left-[-23px]   -z-1 pl-9 rounded-2xl shadow-2xl"></div>

            <motion.div
                className="flex flex-col gap-9 w-full"
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-3xl md:text-5xl text-gray-900 font-extrabold mt-3"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Seed <span className="text-primary-100">Innovate</span>
                </motion.h1>

                <motion.p
                    className="md:text-lg text-sm font-sans text-gray-800 w-full md:w-[60%]"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    At Seed, our mission is to provide the necessary tools, resources and expertise to nurture the seeds of innovation, allowing businesses to flourish and reach their full potential.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href="/about">
                        <CustomButton
                            title="Read more"
                            extraStyle="min-w-[30%] md:w-[27%] border-blue-950 border"
                            icon={<FaArrowAltCircleRight />}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="mt-[-44px] w-[33rem] h-[33rem] relative shadow-3xl"
                initial="hidden"
                animate={controls}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 to-blue w-[340px] h-[340px] rounded-full top-9 left-0"></div>
                <Image
                    src="/laptop.png"
                    alt="intro_img"
                    width={700}
                    height={700}
                    className="object-contain w-full h-[800px] mb-[40px] absolute z-10 md:top-[-43px] md:flex"
                />
            </motion.div>
        </section>
    );
};

export default Introduction;
