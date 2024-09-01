"use client"

// components/InfiniteScroll.js
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaSeedling, FaProjectDiagram, FaHandsHelping, FaLightbulb, FaUsers, FaAward, FaChartLine, FaShieldAlt, FaLaptopCode, FaBookOpen, FaHandshake, FaBullseye, FaRocket, FaHeart, FaGlobe, FaBrain, FaTools } from 'react-icons/fa';



const items = [
    { icon: <FaSeedling />, text: 'Nurturing Growth' },
    { icon: <FaProjectDiagram />, text: 'Groundbreaking Projects' },
    { icon: <FaHandsHelping />, text: 'Supporting Young Talent' },
    { icon: <FaLightbulb />, text: 'Innovation' },
    { icon: <FaUsers />, text: 'Teamwork' },
    { icon: <FaAward />, text: 'Excellence' },
    { icon: <FaChartLine />, text: 'Continuous Improvement' },
    { icon: <FaShieldAlt />, text: 'Integrity' },
    { icon: <FaLaptopCode />, text: 'Quality Code' },
    { icon: <FaBookOpen />, text: 'Continuous Learning' },

    // Add more items as needed
];


const Partnership = () => {
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [0, -200 * items.length],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 50,
                        ease: 'linear',
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div className="overflow-hidden md:w-[80%] w-full mx-auto flex items-center justify-center h-[240px] shadow-2xl gap-[12rem]">
            <motion.div
                className="flex"
                animate={controls}
                initial={{ x: 0 }}
            >
                {items.concat(items).map((item, index) => (
                    <div
                        key={index}
                        className=" w-[7rem] h-[7rem] flex flex-col items-center justify-center  m-2 text-white   px-8 mr-6"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="text-4xl text-blue-200 bg-primary-100 p-4 rounded-full">{item.icon}</div>
                        <p className="mt-2 text-center text-sm text-primary-100">{item.text}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


export default Partnership;



