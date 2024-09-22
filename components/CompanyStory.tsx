"use client"

import { useEffect, useRef } from 'react';
// import LottieAnimation from '../components/LottieAnimation';
import SlidesContainer from './SlideIntro';
import LottieAnimation from './lottie/LottieAnimation';
// import SlidesContainer from '../components/SlidesContainer'
import animationData from '../public/animation.json'
import Image from 'next/image';


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
        <div className="flex md:justify-between justify-center items-center lg:h-[40rem] min-h-[100vh] px-3 lg:flex-row flex-col-reverse flex-1">
            {/* <LottieAnimation />
             */}
            <div className="w-full h-full px-2 flex justify-center">
                <LottieAnimation animationData={animationData} />
                {/* <SlidesContainer /> */}



            </div>

            <div ref={slidesRef} className="opacity-0 transition-opacity duration-500 w-full h-full flex-2">
                <SlidesContainer />
                {/* <Image src="/seedLogo2.png" alt='screenshot' width={1000} height={1000} className='w-full h-full' /> */}
            </div>
        </div>
    );
};

export default SeedStory;
