"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { FaFileContract, FaPlus } from 'react-icons/fa'
import CustomButton from '@/components/CustomButton'
import AboutUsTop from '@/components/AboutUsTop'
import VideoGrid from '@/components/Videos'
import CountUpNumber from '@/components/CountUp'
import FounderSection from '@/components/Founders'
import DynamicHero from '@/components/DynamicHero'
const page = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen">
            <DynamicHero
                title="Welcome to Tech Company"
                description="We offer a wide range of services to help your business thrive in the digital age. From web development to AI solutions, our team of experts is here to support you every step of the way."
            />

            <AboutUsTop />

            <div className='flex items-center justify-between min-h-screen w-full px-4 md:flex-row flex-col'>
                {/* image box */}
                <div className="w-full md:h-[25rem] h-[12rem] shadow=2xl rounded-xl relative">
                    <Image src="/bootcamps.jpg" alt='about' width={1000} height={1000} className='w-full md:h-[20rem] h-[12rem] md:px-[6rem] px-2' />
                    <div className="absolute md:bottom-[2rem] bottom-[-27px] left-[40%] rounded-full bg-primary-100 shadow-2xl  h-[100px] w-[100px] md:rounded-md flex items-center justify-center flex-col ">
                        <h2 className="text-blue-95 text-lg font-extrabold flex gap-3 items-center justify-center text-center">
                            <CountUpNumber />
                            <span className='text-white rounded-full'>
                                <FaPlus />
                            </span></h2>
                        <p className="text-blue-950 my-4 text-sm">Students</p>
                    </div>
                </div>



                {/* text box */}

                <div className=" w-full h-full flex  justify-start flex-col items-center bg-gray-100 p-6">
                    <motion.h1
                        className='text-[1.6rem] md:text-[2.4rem] my-2 font-sans line-clamp-2  text-left w-[68%] mx-auto text-black/30'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Empower Your <span className='text-primary-100 capitalize text-center'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
                    </motion.h1>


                    <motion.p
                        className='text-[18px] md:text-[1.4rem] my-6 font-sans line-clamp-5 text-gray-800  text-left w-[90%] md:w-[68%] mx-auto  '
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem quidem nobis animi et, expedita porro hic aperiam, consequuntur, inventore ad aliquam harum labore! Iste tempora itaque, iusto velit nobis suscipit a minima eius.

                    </motion.p>




                </div>

            </div>

            <VideoGrid />
            <FounderSection />
        </section>
    )
}

export default page
