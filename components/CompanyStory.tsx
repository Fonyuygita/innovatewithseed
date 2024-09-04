"use client"

import { useEffect, useRef } from 'react';
// import LottieAnimation from '../components/LottieAnimation';
import SlidesContainer from './SlideIntro';
import LottieAnimation from './lottie/LottieAnimation';
// import SlidesContainer from '../components/SlidesContainer'
import animationData from '../public/animation.json'


const SeedStory = () => {
    const slidesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (slidesRef.current) {
                const rect = slidesRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    slidesRef.current.style.opacity = '1';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex md:justify-between justify-center items-center lg:h-[40rem] min-h-[70vh] px-3 md:flex-row flex-col-reverse">
            {/* <LottieAnimation />
             */}
            <div className="w-full h-full px-2 flex justify-center">
                <LottieAnimation animationData={animationData} />


            </div>

            <div ref={slidesRef} className="opacity-0 transition-opacity duration-500">
                <SlidesContainer />
            </div>
        </div>
    );
};

export default SeedStory;
