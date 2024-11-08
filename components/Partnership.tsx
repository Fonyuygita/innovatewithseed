"use client"

// components/InfiniteScroll.js
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaSeedling, FaProjectDiagram, FaHandsHelping, FaLightbulb, FaUsers, FaAward, FaChartLine, FaShieldAlt, FaLaptopCode, FaBookOpen, FaHandshake, FaBullseye, FaRocket, FaHeart, FaGlobe, FaBrain, FaTools, FaHackerNews } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';
import SlidingPanel from './SlideIn';



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
    const { theme } = useTheme()

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [0, -80 * items.length],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 30,
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
        <>
            <div className="overflow-hidden md:w-[90%] w-full mx-auto flex items-center justify-center h-[240px]  gap-[12rem] md:space-y-7 space-y-4 mt-[2rem]">
                <motion.div
                    className="flex"
                    animate={controls}
                    initial={{ x: 0 }}
                >
                    {items.concat(items).map((item, index) => (
                        <div
                            key={index}
                            className={`w-[7rem] h-[7rem] flex flex-col items-center justify-center rounded-t-lg  m-2 text-white  shadow-2xl  mr-6 p-8  ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-white  '}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className=" text-blue-200 bg-primary-100 p-4 rounded-full text-lg">{item.icon}</div>
                            <p className={`mt-2 text-center text-[12px] text-gray-800  ${theme === 'light' ? 'text-gray-900 ' : 'text-light-200 '}`}>{item.text}</p>
                        </div>
                    ))}
                </motion.div>


            </div>
            {/* news button */}



        </>



    );
};


export default Partnership;



