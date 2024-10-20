"use client"

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-loading-skeleton/dist/skeleton.css';
import GalleryTop from './GalleryTop';

const images = [
    {
        original: '/bootcamps.jpg',
        thumbnail: '/p1.svg',
        title: 'Seed Bootcamp',
        variants: [
            '/p4.svg',
            '/bootcamps.jpg',
        ],
    },
    {
        original: '/team/d4.png',
        thumbnail: '/team/d4.png',
        title: 'Team Building',
        variants: [
            '/team/d4.png',
            '/team/d7.png',
            '/team/d2.png',
            '/team/d3.png',
            '/team/d4.png',
            '/team/d5.png',
            '/team/d6.png'
        ],
    },
    {
        original: '/team/d2.png',
        thumbnail: '/team/d2.png',
        title: 'Seed Members',
        variants: [
            '/team/d2.png',
            '/team/d7.png',
            '/team/d2.png',
            '/team/d3.png',
            '/team/d4.png',
            '/team/d5.png',
            '/team/d6.png'
        ],
    },
    {
        original: '/team/s1.png',
        thumbnail: '/team/s1.png',
        title: 'Seed Team Gallery',
        variants: [
            '/team/s1.png',
            '/team/s2.png',
            '/team/s3.png',
            '/team/s4.png',
            '/team/s1.png',
            '/team/s2.png',
            '/team/s4.png'
        ],
    },
];

const MyImageGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [variants, setVariants] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleSlide = (index: number) => {
        setSelectedImage(images[index].original);
        setVariants(images[index].variants);
        setLoading(true); // Show loading state
    };

    const handleImageLoad = () => {
        setLoading(false); // Hide loading state when image is loaded
    };

    return (
        <div className="container mx-auto p-4 flex flex-col gap-[4rem]">
            <GalleryTop />
            <ImageGallery
                items={images}
                onSlide={handleSlide}
                showThumbnails={true}
                showFullscreenButton={false}
                showPlayButton={false}
                renderItem={(item) => (
                    <div className="image-gallery-image">
                        <Image
                            src={item.original}
                            // @ts-ignore
                            alt={item.title}
                            width={1000}
                            height={600}
                            className="w-full h-auto rounded-lg"
                            onLoad={handleImageLoad}
                        />

                        {/* @ts-ignore */}
                        <span className="image-gallery-description">{item.title}</span>
                        {loading && <Skeleton height={600} />}
                    </div>
                )}
            />
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Our <span className="text-primary-100">Gallery</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {variants.map((variant, idx) => (
                            <Image
                                key={idx}
                                src={variant}
                                alt={`Variant ${idx}`}
                                width={1000}
                                height={600}
                                className="w-full h-auto rounded-lg"
                                onLoad={handleImageLoad}
                            />
                        ))}
                        {loading && (
                            <div className="w-full h-auto rounded-lg">
                                <Skeleton height={600} />
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MyImageGallery;
