"use client"

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

interface Testimonial {
    name: string;
    image: string;
    stars: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },

    {
        name: 'Fonyuy Gita',
        image: '/user.png',
        stars: '/star.svg',
        text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
    },
    // Add more testimonials as needed
];

const SwipeTestimonials: FC = () => {
    const handlers = useSwipeable({
        onSwipedLeft: () => console.log('Swiped left'),
        onSwipedRight: () => console.log('Swiped right'),
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:justify-center w-full  bg-gray-100 p-3 md:px-9 md:gap-8 gap-10 px-10 shadow-2xl" {...handlers}>
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    className="w-full h-[230px] card-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="card-content flex flex-col items-center gap-5">
                        <div className="flex justify-between items-center w-full px-6 mt-3">
                            <h3 className="text-gray-900 text-xl">{testimonial.name}</h3>
                            <Image src={testimonial.image} className="w-9 h-9 rounded-full border border-primary-100" alt="user" width={50} height={50} />
                        </div>
                        <div className="flex justify-between w-full items-center px-3">
                            <Image src={testimonial.stars} width={150} height={60} alt="stars" className="w-[120px] h-[60px]" />
                        </div>
                        <p className="w-full text-sm text-gray-800 px-6">{testimonial.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SwipeTestimonials;
