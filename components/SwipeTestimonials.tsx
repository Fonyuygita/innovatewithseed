"use client"

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '@/constants';
// import { Testimonial } from '@/constants/type';




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
                    <div className=" flex flex-col items-center gap-4">
                        <div className="flex justify-between items-center w-full lg:px-6 px-1 mt-3 relative">
                            <div className="flex flex-col items-start justify-center gap-2">
                                <h3 className="text-gray-900 text-sm font-bold md:text-lg">{testimonial.name}</h3>
                                <p className='text-[12px] text-gray-700'>{testimonial.title}</p>
                                <span className='outline-none text-[12px] text-primary-100'>
                                    <Image src={testimonial.stars} alt='stars' width={50} height={15} className='object-contain ' />
                                </span>
                            </div>
                            <Image src={testimonial.image} className="w-24 h-24 rounded-md border  border-primary-100 object-cover  " alt="user" width={50} height={50} />
                        </div>
                        <div className="flex justify-between w-full items-start lg:px-3 ">
                            <p className="w-full text-sm text-gray-800 md:px-6 px-1">{testimonial.text}</p>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>

        </Swiper>
    );
};

export default SwipeTestimonials;
