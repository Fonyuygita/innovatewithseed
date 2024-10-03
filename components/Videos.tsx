"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlayIcon from './PlayIcon';

const videos = [
    { url: 'https://go.screenpal.com/watch/cZ6eDZVWnFD', thumbnail: '/t1.jpg', title: 'Welcome to seed' },
    { url: 'https://go.screenpal.com/watch/cZ6eDZVWnFD', thumbnail: '/bootcamps.jpg', title: 'Welcome to seed' },
    { url: 'https://www.youtube.com/embed/87m19xZ--BE', thumbnail: '/banner.png', title: 'Welcome to seed' },
    { url: 'https://go.screenpal.com/watch/cZ6eDZVWnFD', thumbnail: '/vid/vid2.png', title: 'Welcome to seed' },

    // Add more videos as needed
];


const VideoGrid: React.FC = () => {
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
        <div className="container mx-auto p-4 overflow-hidden">
            <h2 className="text-2xl text-blue-500 font-bold mb-4">Our Recent Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        className="relative cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleClick(video.url)}
                    >
                        <Image src={video.thumbnail} alt={video.title} layout="responsive" width={16} height={9} />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                            {video.title}
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
                ))}
            </div>
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl">
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setSelectedVideo(null)}
                        >
                            ×
                        </button>
                        <iframe
                            src={selectedVideo}
                            className="w-full h-96"
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

export default VideoGrid;
