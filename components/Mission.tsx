"use client"

import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { FaRegLightbulb, FaUserFriends, FaCogs, FaChalkboardTeacher, FaGlobe, FaBriefcase, FaCode, FaUsers, FaBook } from 'react-icons/fa';

interface MissionProps {
    title: string;
    icon: React.ReactNode;
    description: string

}





const MissionInfo: MissionProps[] = [
    {
        icon: <FaRegLightbulb />,
        title: "Empowering Techies",
        description: "To grow, nurture, and help young techies thrive in the industry."
    },
    {
        icon: <FaUserFriends />,
        title: "Real-life Solutions",
        description: "Working on real-life solutions that impact and improve society."
    },
    {
        icon: <FaCogs />,
        title: "Training Techies",
        description: "Training 1000+ techies to excel in their fields and beyond."
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Real-life Projects",
        description: "Completing 100+ real-life projects that make a difference."
    },
    {
        icon: <FaGlobe />,
        title: "Innovative Solutions",
        description: "Innovating ideas and technologies to drive positive change."
    },
    {
        icon: <FaBriefcase />,
        title: "Community Building",
        description: "Building a strong community of tech enthusiasts and professionals."
    },
    {
        icon: <FaCode />,
        title: "Global Impact",
        description: "Making a global impact through technology and innovation."
    },
    {
        icon: <FaUsers />,
        title: "Continuous Learning",
        description: "Fostering a culture of continuous learning and growth."
    },
    {
        icon: <FaBook />,
        title: "Tech Excellence",
        description: "Striving for excellence in all aspects of technology and beyond."
    }
];

const Mission = () => {
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
        <section ref={ref} className="mt-[12rem] md:w-[80%] w-full mx-auto min-h-screen">
            <motion.h1
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="heading text-[2.4rem] text-blue-500 -[70%] my-4">
                Our   {' '}
                <span className="text-primary-100">Mission</span>
            </motion.h1>


            <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5   text-gray-700  gap-5 py-4 my-6">
                {MissionInfo.map((item, index) => (

                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5 * index, delay: 0.2 * index }}
                        className="bg-white shadow-2xl h-[300px] " key={item.title}>
                        <div className=" flex items-center justify-center text-xs">
                            <div className="max-w-[100%] text-center flex items-center flex-col gap-4">
                                <div className="w-24 h-24  text-primary-100 rounded-full flex items-center justify-center  text-[30px]">
                                    {item.icon}
                                </div>
                                <div className="flex item-center gap-4 flex-col justify-center">

                                    <h3 className='w-full text-2xl text-blue-500'>{item.title}</h3>
                                    <p className='text-[#999] text-sm line-clamp-1'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>



        </section>
    )
}

export default Mission
