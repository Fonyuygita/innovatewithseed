"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlayIcon from './PlayIcon';



const VideoCard = ({ url, thumbnail, title, className }: { url: string; thumbnail: string; title: string, className?: string }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleClick = (url: string) => {
        setIsAnimating(true);
        setTimeout(() => {
            setSelectedVideo(url);
            setIsAnimating(false);
        }, 100);
    };

    return (

        <div className="md:h-[450px]  h-[240px] mt-[3rem]">
            <div className={` ${className}`}>

                <motion.div

                    className="relative cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleClick(url)}
                >
                    <Image src={thumbnail} alt={title} layout="responsive" width={16} height={16} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        {title}
                    </div>
                    {!isAnimating && <PlayIcon />}
                    {isAnimating && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.5 }}
                            transition={{ duration: 4, ease: 'easeInOut' }}
                        >
                            <div className="w-16 h-16 border-4 border-red-700 rounded-full"></div>
                        </motion.div>
                    )}
                </motion.div>

            </div>
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-7xl h-[500px]">
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setSelectedVideo(null)}
                        >
                            ×
                        </button>
                        <iframe
                            src={selectedVideo}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>

    );

};

export default VideoCard;
