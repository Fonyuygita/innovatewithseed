"use client"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import dayjs from 'dayjs';

const images = [
    '/team/s1.png',
    '/team/s2.png',
    '/team/s3.png'
];

const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Dream, Create, Innovate"
];

const Hero: React.FC = () => {
    const [quoteIndex, setQuoteIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative md:min-h-[70vh] min-h-[40vh] w-full">
            <Slide easing="ease" arrows duration={5000} transitionDuration={1000}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide">
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="h-[60vh] bg-cover bg-center"
                        >
                            <div className="absolute inset-0 opacity-50 bg-hero"></div>
                        </div>
                    </div>
                ))}
            </Slide>
            <div className="absolute top-4 hidden  left-4 bg-blue-500 text-primary-100">
                {dayjs().format('MMMM D, YYYY h:mm A')}
                {/* <h1 className="text-4xl text-primary-100">Welcome To Seed</h1> */}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <h1 className="text-xl md:text-4xl  w-[70%]">{quotes[quoteIndex]}</h1>
            </div>
            <div className="absolute bottom-4 right-4 n text-white bg-blue-500 text-sm p-3">
                {dayjs().format('MMMM D, YYYY h:mm A')}

            </div>
        </div>
    );
};

export default Hero;
