"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { FaFileContract, FaPlus } from 'react-icons/fa'
// import CustomButton from '@/components/CustomButton'
import AboutUsTop from '@/components/AboutUsTop'
import VideoGrid from '@/components/Videos'
// import CountUpNumber from '@/components/CountUp'
import FounderSection from '@/components/Founders'
import DynamicHero from '@/components/DynamicHero'
import ContactUs from '@/components/ContactUs'
import CountUpNumber from '@/components/CountUp'
import SliderComponent from '@/components/AboutSlide'
const page = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen">
            <DynamicHero
                title="About Us"
                description="We plant to harvest."
            />

            <AboutUsTop />

            <div className='flex items-center justify-between my-[6rem] w-full  md:flex-row flex-col'>
                {/* image box */}

                <SliderComponent images={[
                    "/galView.svg",
                    "contact.svg",

                ]} showCount />




                {/* text box */}

                <div className=" w-full  flex  justify-start flex-col items-start bg-gray-100 p-6">
                    <motion.h2
                        className='text-[1.6rem] md:text-[2.4rem] my-2 font-sans line-clamp-2 w-[90%] text-left text-blue-500'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Empower Your <span className='text-primary-100 capitalize text-center'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
                    </motion.h2>


                    <motion.p
                        className='text-[14px] md:text-[18px] my-6 font-sans line-clamp-5 text-gray-800  text-left w-[100%] md:w-[98%] mx-auto  '
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Seed, a tech company, aims to cultivate and support the budding talents in the industry, fostering growth and innovation. Like nurturing a seedling, Seed provides the necessary resources and guidance for young minds to flourish. With a focus on development and mentorship, Seed empowers individuals to reach their full potential in the ever-evolving tech landscape.

                    </motion.p>




                </div>

            </div>

            <VideoGrid />
            <FounderSection />

            <ContactUs />

        </section>
    )
}

export default page
