"use client"

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { faqs } from '@/constants';
import { useTheme } from './context/ThemeContext';



const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const controls = useAnimation();
    const { theme } = useTheme()
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

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div ref={ref} className=" w-full min-h-[60vh]  ">
            <motion.h1

                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }} className='text-[1.6rem] md:text-[2.4rem] my-1 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500 '>Frequently{" "}Ask{" "}<span className='text-primary-100'>Questions</span> {" "}<span className='text-primary-100'>.</span></motion.h1>

            <div className="flex flex-col items-center p-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className={`w-full md:w-[90%] mx-auto  shadow-2xl
                        rounded-lg p-4 m-2  ${theme === "light" ? "bg-white" : "bg-gray-800"} `}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-lg font-bold text-blue-500">{faq.question}</h2>
                            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === index && (
                            <motion.div
                                className={`mt-2  ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                transition={{ duration: 0.5 }}
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
