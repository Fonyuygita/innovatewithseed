"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CountUpNumber from './CountUp';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const SliderComponent: React.FC = () => {
    const images = [

        "/galView.svg",
        "/contact.svg",
        "/team/d1.png",
        "/team/d2.png",
        "/team/d4.png",
        "/bootcamps.jpg",
        "/team/d6.png"
    ];

    return (
        <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            dynamicHeight={true}
            className='w-full bg-blue-500 p-5 md:bg-transparent  '
        >
            {images.map((src, index) => (
                <div key={index} className="w-full md:h-[25rem] h-[12rem] shadow-2xl rounded-xl ">
                    <Image src={src} alt={`Slide ${index}`} width={340} height={300} className="w-[440px] md:h-[20rem] h-[16rem] md:px-[6rem] object-cover relative" />
                    <div className="top-[1rem] left-9 absolute md:top-[5rem] z-10 md:right-12 md:w-[100px] md:h-[100px] h-[70px] w-[70px] bg-primary-100 rounded-full flex items-center text-white justify-center text-xl  ">
                        <CountUpNumber />
                    </div>

                </div>
            ))}
        </Carousel>
    );
};

export default SliderComponent;
