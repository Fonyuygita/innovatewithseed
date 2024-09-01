"use client"

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../public/animation.json'; // Ensure you have a Lottie animation JSON file
import LottieAnimation from './lottie/LottieAnimation';

const CompanyStory = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* <Lottie animationData={animationData} loop={true} /> */}
                    <LottieAnimation animationData={animationData} />

                </motion.div>
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className="mt-10"
                >
                    <h2 className="text-4xl font-bold text-center mb-4">Our Story</h2>
                    <p className="text-lg text-center mb-8">
                        Welcome to See, a company dedicated to innovation and excellence. Our mission is to revolutionize the industry with cutting-edge solutions and unparalleled service.
                    </p>
                    <p className="text-lg text-center">
                        Our aim is to empower businesses and individuals through technology, fostering growth and success in every endeavor.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyStory;
