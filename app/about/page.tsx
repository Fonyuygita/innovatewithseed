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
const page = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen">
            <DynamicHero
                title="About Us"
                description="We plant to harvest."
            />

            <AboutUsTop />

            <div className='flex items-center justify-between min-h-screen w-full px-4 md:flex-row flex-col'>
                {/* image box */}
                <div className="w-full md:h-[25rem] h-[12rem] shadow=2xl rounded-xl relative">
                    <Image src="/bootcamps.jpg" alt='about' width={1000} height={1000} className='w-full md:h-[20rem] h-[12rem] md:px-[6rem] px-2' />
                    <div className="absolute md:bottom-[2rem] bottom-[-27px] left-[40%] rounded-full bg-primary-100 shadow-2xl  h-[100px] w-[100px] md:rounded-md flex items-center justify-center flex-col ">
                        <h2 className="text-blue-95 text-lg font-extrabold flex gap-3 items-center justify-center text-center">
                            {/* <CountUpNumber /> */}
                            100
                            <span className='text-white rounded-full'>
                                <FaPlus />
                            </span></h2>
                        <p className="text-blue-950 my-4 text-sm">Students</p>
                    </div>
                </div>



                {/* text box */}

                <div className=" w-full h-full flex  justify-start flex-col items-start bg-gray-100 p-6">
                    <motion.h1
                        className='text-[1.6rem] md:text-[2.4rem] my-2 font-sans line-clamp-2 w-[90%] text-left text-black/30'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Empower Your <span className='text-primary-100 capitalize text-center'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
                    </motion.h1>


                    <motion.p
                        className='text-[14px] md:text-[18px] my-6 font-sans line-clamp-5 text-gray-800  text-left w-[100%] md:w-[68%] mx-auto  '
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
            <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
                <ContactUs />
            </div>
        </section>
    )
}

export default page
