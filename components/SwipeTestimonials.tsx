"use client"

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';

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

    return (

        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}

            pagination={{ clickable: true }}

        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide
                    key={index}
                    className="w-[300px] h-[230px]  bg-white slide mb-[4rem] shadow-2xl p-5"

                >
                    <div className=" flex flex-col items-center gap-5">
                        <div className="flex justify-between items-center w-full px-6 mt-3">
                            <h3 className="text-gray-900 text-xl">{testimonial.name}</h3>
                            <Image src={testimonial.image} className="w-9 h-9 rounded-full border border-primary-100" alt="user" width={50} height={50} />
                        </div>
                        <div className="flex justify-between w-full items-center px-3">
                            <Image src={testimonial.stars} width={150} height={60} alt="stars" className="w-[120px] h-[60px]" />
                        </div>
                        <p className="w-full text-sm text-gray-800 px-6">{testimonial.text}</p>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>

        </Swiper>
    );
};

export default SwipeTestimonials;
