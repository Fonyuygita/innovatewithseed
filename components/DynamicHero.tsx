"use client"


// components/Hero.tsx
import { motion } from 'framer-motion';

import Image from 'next/image';

interface HeroProps {
    title: string;
    description: string;
}

const DynamicHero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <motion.h1
                    className="text-2xl font-bold mb-4 ero-header"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >Our Services</motion.h1>
                <div className="hero-divider"></div>
                <motion.p
                    className="text-sm text-center max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
};

export default DynamicHero;
