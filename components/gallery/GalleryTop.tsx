"use client"

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCamera, FaGlobe, FaHeart } from 'react-icons/fa';




// import { CameraIcon, GlobeIcon, HeartIcon } from '@heroicons/react/outline';
export interface Item {
    icon: React.ReactNode;
    description: string;
}

export const items: Item[] = [
    {
        icon: <FaCamera className="h-6 w-6 text-blue-500" />,
        description: 'High-quality images capturing the essence of our work.',
    },
    {
        icon: <FaGlobe className="h-6 w-6 text-green-500" />,
        description: 'Global reach with a focus on local impact.',
    },
    {
        icon: <FaHeart className="h-6 w-6 text-red-500" />,
        description: 'Committed to values of integrity and passion.',
    },

    {
        icon: <FaCamera className="h-6 w-6 text-blue-500" />,
        description: 'High-quality images capturing the essence of our work.',
    },
    {
        icon: <FaGlobe className="h-6 w-6 text-green-500" />,
        description: 'Global reach with a focus on local impact.',
    },
    {
        icon: <FaHeart className="h-6 w-6 text-red-500" />,
        description: 'Committed to values of integrity and passion.',
    },
]


const GalleryTop: FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-[3rem]">
            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image src="/camera.png" alt="Company" width={500} height={500} className="rounded-lg shadow-lg object-contain" />
            </motion.div>
            <motion.div
                className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {items.map((item: Item, index: number) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg">
                        {item.icon}
                        <p>{item.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default GalleryTop;