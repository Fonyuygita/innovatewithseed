"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlayIcon from './PlayIcon';


const videos = [
    { url: 'https://www.youtube.com/embed/xyz1', thumbnail: '/t1.jpg', title: 'Video 1' },
    { url: 'https://www.youtube.com/embed/xyz2', thumbnail: '/t2.jpg', title: 'Video 2' },
    { url: 'https://www.youtube.com/embed/xyz3', thumbnail: '/t3.jpg', title: 'Video 3' },
    { url: 'https://www.youtube.com/embed/xyz1', thumbnail: '/t1.jpg', title: 'Video 1' },
    { url: 'https://www.youtube.com/embed/xyz2', thumbnail: '/t2.jpg', title: 'Video 2' },
    { url: 'https://www.youtube.com/embed/xyz3', thumbnail: '/t3.jpg', title: 'Video 3' },
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
        }, 4000);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Our Recent Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                        <img src={video.thumbnail} alt={video.title} className="w-full h-auto" />
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
