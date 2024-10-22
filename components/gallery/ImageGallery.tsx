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
        original: 'https://i.ibb.co/qNZBh1s/IMG-20241018-154600.jpg',
        thumbnail: 'https://i.ibb.co/qNZBh1s/IMG-20241018-154600.jpg',
        title: 'Outreach @AmazingGrace',
        variants: [
            'https://i.ibb.co/zG9HZ84/IMG20241018144006-01.jpg',
            'https://i.ibb.co/d635q3S/IMG20241018143743.jpg',
            'https://i.ibb.co/5jpJnG9/IMG20241018130328.jpg',
            'https://i.ibb.co/8213ctx/IMG20241018124832.jpg',
            'https://i.ibb.co/Rh4bNYy/IMG20241018124420.jpg',
            'https://i.ibb.co/pzLcrBf/IMG20241018124334.jpg',
            'https://i.ibb.co/qNZBh1s/IMG-20241018-154600.jpg',
            'https://i.ibb.co/dWyQRLJ/IMG-20241018-153658.jpg',
            'https://i.ibb.co/9WvPgtn/IMG-20241018-153434.jpg'
        ],
    },

    {
        original: 'https://i.ibb.co/8Ds0VKv/IMG-20240827-171703.jpg',
        thumbnail: 'https://i.ibb.co/8Ds0VKv/IMG-20240827-171703.jpg',
        title: 'SEED Summer Internship',
        variants: [
            'https://i.ibb.co/6P6LSf1/IMG20240830110320.jpg',
            'https://i.ibb.co/Nryrk6r/IMG-20240829-161354.jpg',
            'https://i.ibb.co/5jpJnG9/IMG20241018130328.jpg',
            'https://i.ibb.co/nw2cKKF/IMG20240827152913-01.jpg',
            'https://i.ibb.co/02HJ6jw/IMG-20240827-122925.jpg',
            'https://i.ibb.co/myRNp5Q/PXL-20240830-123157451.jpg',
            'https://i.ibb.co/VJ18wdK/IMG-20240830-183233.jpg',
            'https://i.ibb.co/k4mg1bM/IMG20240830123635.jpg',
            'https://i.ibb.co/8Ds0VKv/IMG-20240827-171703.jpg'
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
