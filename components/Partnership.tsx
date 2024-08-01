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
    { icon: <FaShieldAlt />, text: 'Integrity' },
    { icon: <FaLaptopCode />, text: 'Quality Code' },
    { icon: <FaBookOpen />, text: 'Continuous Learning' },
    { icon: <FaHandshake />, text: 'Collaboration' },
    { icon: <FaBullseye />, text: 'Focus' },
    { icon: <FaRocket />, text: 'Ambition' },
    { icon: <FaHeart />, text: 'Passion' },
    { icon: <FaGlobe />, text: 'Global Impact' },
    { icon: <FaBrain />, text: 'Creativity' },
    { icon: <FaTools />, text: 'Technical Expertise' },
    // Add more items as needed
];


const Partnership = () => {
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [0, -100 * items.length],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 100,
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
        <div className="overflow-hidden w-full flex items-center justify-center h-[140px] bg-white shadow-2xl">
            <motion.div
                className="flex"
                animate={controls}
                initial={{ x: 0 }}
            >
                {items.concat(items).map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center w-24 h-24 m-2  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue-500 p-6 text-white rounded-lg shadow-2xl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="text-4xl text-primary-100">{item.icon}</div>
                        <p className="mt-2 text-center text-sm">{item.text}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


export default Partnership;



