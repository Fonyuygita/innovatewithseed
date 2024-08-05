"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import AboutFounders from './AboutFounders';
import FAQSection from './AboutFounders';
import Image from 'next/image';

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
        name: 'John Doe',
        title: 'CEO',
        description: 'John is the visionary behind Seed.',
        longDescription: 'John has over 20 years of experience in the tech industry...',
        image: '/CEO.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },
    {
        name: 'John Doe',
        title: 'CEO',
        description: 'John is the visionary behind Seed.',
        longDescription: 'John has over 20 years of experience in the tech industry...',
        image: '/CEO.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },

    {
        name: 'John Doe',
        title: 'CEO',
        description: 'John is the visionary behind Seed.',
        longDescription: 'John has over 20 years of experience in the tech industry...',
        image: '/CEO.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },


    {
        name: 'John Park',
        title: 'CTO',
        description: 'John is the visionary behind Seed.',
        longDescription: 'John has over 20 years of experience in the tech industry...',
        image: '/user.png',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },
    // Add more founders here
];

const FounderSection: React.FC = () => {
    return (
        <section className="flex flex-between items-center px-5 flex-col w-full mt-6">
            <div className="grid w-full md:grid-cols-2 grid-cols-1">
                <div className="flex flex-col items-center  min-h-screen bg-gray-100 w-full">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 m-4"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.5 }}
                        >
                            <motion.img
                                src={founder.image}
                                alt={founder.name}
                                className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="flex flex-col text-center md:text-left">
                                <h2 className="text-xl md:text-left sm:text-center font-bold">{founder.name}</h2>
                                <h3 className="text-md text-gray-600">{founder.title}</h3>
                                <p className="text-gray-800">{founder.description}</p>
                                <p className="text-gray-600 mt-4">{founder.longDescription}</p>
                                <div className="flex mt-4 space-x-4 items-center md:justify-end justify-center">
                                    <motion.a
                                        href={founder.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaTwitter className="text-blue-500" />
                                    </motion.a>
                                    <motion.a
                                        href={founder.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaLinkedin className="text-blue-700" />
                                    </motion.a>
                                    <motion.a
                                        href={founder.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaGithub className="text-gray-800" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="w-full h-full bg-white">
                    <Image src="/seed.svg" width={1000} height={1000} alt='seed' className='w-full h-full object-contain' />
                </div>
            </div>
            <FAQSection />
        </section>

    );
};

export default FounderSection;
