"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import AboutFounders from './FaqSection';
import FAQSection from './FaqSection';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from './context/ThemeContext';

interface Founder {
    name: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    social: {
        twitter: string;
        linkedin: string;
        github: string;
    };
}

const founders: Founder[] = [
    {
        name: 'Cheko Yohane',
        title: 'CEO',
        description: 'Yohane is the visionary behind Seed. ',
        longDescription: 'A tech enthusiast, entrepreneur and a Business man, who loves tech and like to empower the young ones grow. ',
        image: '/CEO.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },
    {
        name: 'Fonyuy Gita',
        title: 'CTO',
        description: 'Fonyuy Gita is a Developer and core founder of Seed.',
        longDescription: 'A mathematician, Computer Scientist and a Learner, I love tech, football and equally helping the young grow',
        image: '/gita.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },

    {
        name: 'Fien Dora',
        title: 'Chief Operating Officer',
        description: 'Core Founder and a Computer Engineer.',
        longDescription: " I'm Fien Dora, again, a computer engineer, from NAHPI, I'm a front end web developer,  audiuno programmer and into IoT. I'll be one of your guides during this period and, ill be you reference for anything u might be needing",
        image: '/fien.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },


    {
        name: 'Nchanji Faithful',
        title: 'Developer',
        description: 'Computer Engineer and App Developer.',
        longDescription: " I'm Faithful, again, a computer engineer, from NAHPI, I'm a front end web developer,  audiuno programmer and into IoT. I'll be one of your guides during this period and, ill be you reference for anything u might be needing",
        image: '/faith.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },


    {
        name: 'Jick Alvin',
        title: 'Developer',
        description: 'Software Engineer, Mathematician Computer Scientist and App Developer.',
        longDescription: " I'm Jick, again, a computer engineer, from NAHPI, I'm a front end web developer,  audiuno programmer and into IoT. I'll be one of your guides during this period and, ill be you reference for anything u might be needing",
        image: '/alvin.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },
    // Add more founders here
];

const FounderSection: React.FC = () => {
    const { theme } = useTheme()
    return (
        <section className="flex flex-between items-center px-5 flex-col w-full mt-6">

            <h2 className={`my-[6rem] text-3xl font-bold mb-8 text-center text-blue-500 `}>SEED <span className='text-primary-100'>Founders</span></h2>


            <div className="grid w-full md:grid-cols-2 grid-cols-1">

                <div className={`flex flex-col items-center  min-h-screen bg-gray-100 w-full ${theme === 'light' ? 'bg-gray-300 ' : 'bg-gray-800 text-white  '}`}>
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center  shadow-lg rounded-lg p-6 m-4 ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-white  '}`}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.5 }}
                        >
                            <motion.img
                                src={founder.image}
                                alt={founder.name}
                                className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="flex flex-col text-center md:text-left">
                                <h2 className="text-xl md:text-left sm:text-center font-bold text-primary-100">{founder.name}</h2>
                                <h3 className="text-md text-blue-500 my-3">{founder.title}</h3>
                                <p className={` ${theme === 'light' ? 'text-gray-700 ' : ' text-gray-300  '}`}>{founder.description}</p>
                                <p className={` mt-4 md:flex hidden ${theme === 'light' ? 'text-gray-700 ' : ' text-gray-400  '}`}>{founder.longDescription}</p>
                                <div className="flex mt-4 space-x-4 items-center md:justify-end justify-center">
                                    <motion.a
                                        href={founder.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaXTwitter className="text-blue-500 text-xl" />
                                    </motion.a>
                                    <motion.a
                                        href={founder.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaLinkedin className="text-primary-100 text-xl" />
                                    </motion.a>
                                    <motion.a
                                        href={founder.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaGithub className="text-blue-500 text-xl" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className={`w-full h-full ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-white  '}`}>
                    <Image src="/galView.svg" width={1000} height={1000} alt='seed' className='w-full h-full object-contain' />
                </div>
            </div>
            <FAQSection />
        </section>

    );
};

export default FounderSection;
