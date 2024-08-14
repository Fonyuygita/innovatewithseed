"use client"

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: 'What is Seed?',
        answer: 'Seed is a company focused on revolutionizing the tech industry...',
    },
    {
        question: 'Who is the CEO of Seed?',
        answer: 'John Doe is the CEO of Seed, with over 20 years of experience...',
    },
    {
        question: 'What services does Seed offer?',
        answer: 'Seed offers a range of services including software development...',
    },
    {
        question: 'How can I contact Seed?',
        answer: 'You can contact Seed through our website or social media channels...',
    },
    {
        question: 'Where is Seed located?',
        answer: 'Seed is headquartered in Silicon Valley, with offices worldwide...',
    },
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div ref={ref} className=" w-full min-h-screen ">
            <motion.h1

                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }} className='text-[1.6rem] md:text-[3.4rem] my-1 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Frequently{" "}<span className='text-primary-100 capitalize'>Ask{" "}</span>Questions{" "}<span className='text-primary-100'>.</span></motion.h1>

            <div className="flex flex-col items-center  h-screen bg-gray-100 p-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-[90%] mx-auto bg-white shadow-2xl
                        rounded-lg p-4 m-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-lg font-bold text-gray-800">{faq.question}</h2>
                            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === index && (
                            <motion.div
                                className="mt-2 text-gray-700"
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
