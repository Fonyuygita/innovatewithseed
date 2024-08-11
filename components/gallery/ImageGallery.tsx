"use client"

import React from 'react';
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';
import GalleryTop from './GalleryTop';

const images = [
    {
        original: '/bootcamps.jpg',
        thumbnail: '/p1.svg',
        variants: [
            '/p4.svg',
            '/bootcamps.jpg',
        ],
    },
    {
        original: '/team/d4.png',
        thumbnail: '/team/d1.png',
        variants: [
            '/team/d1.png',
            '/team/d7.png',
            '/team/d2.png',
            '/team/d3.png',
            '/team/d4.png',
            '/team/d5.png',
            '/team/d6.png'
        ],
    },

    {
        original: '/team/d4.png',
        thumbnail: '/team/d2.png',
        variants: [
            '/team/d1.png',
            '/team/d7.png',
            '/team/d2.png',
            '/team/d3.png',
            '/team/d4.png',
            '/team/d5.png',
            '/team/d6.png'
        ],
    },
];

const MyImageGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [variants, setVariants] = React.useState<string[]>([]);

    const handleSlide = (index: number) => {
        setSelectedImage(images[index].original);
        setVariants(images[index].variants);
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
            />
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                >
                    <h2 className="text-xl font-bold mb-6  my-7">SEED Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {variants.map((variant, idx) => (
                            <Image
                                key={idx}
                                src={variant}
                                alt={`Variant ${idx}`}
                                width={1000}
                                height={600}
                                className="w-full h-auto rounded-lg"
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MyImageGallery;
