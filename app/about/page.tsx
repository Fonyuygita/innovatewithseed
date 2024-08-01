"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { FaFileContract, FaPlus } from 'react-icons/fa'
import CustomButton from '@/components/CustomButton'
import AboutUsTop from '@/components/AboutUsTop'
import VideoGrid from '@/components/Videos'
const page = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen">

            <AboutUsTop />

            <div className='flex items-center justify-between min-h-screen w-full px-4'>
                {/* image boc */}
                <div className="w-full h-[25rem] shadow=2xl rounded-xl relative">
                    <Image src="/bootcamps.jpg" alt='about' width={1000} height={1000} className='w-full h-[20rem] px-[6rem]' />
                    <div className="absolute bottom-[2rem] left-[40%] bg-primary-100 shadow-2xl  h-[100px] w-[100px] rounded-md flex items-center justify-center flex-col ">
                        <h2 className="text-blue-95 text-lg font-extrabold flex gap-3 items-center justify-center text-center">500 <span className='text-white rounded-full'>
                            <FaPlus />
                        </span></h2>
                        <p className="text-blue-950 my-4 text-sm">Students</p>
                    </div>
                </div>



                {/* text box */}

                <div className=" w-full h-full flex  justify-start flex-col items-center bg-gray-100 p-6">
                    <motion.h1
                        className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2  text-left w-[68%] mx-auto text-black/30'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Empower Your <span className='text-primary-100 capitalize'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
                    </motion.h1>


                    <motion.p
                        className='text-[18px] md:text-[1.4rem] my-6 font-sans line-clamp-5  text-left w-[68%] mx-auto  '
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem quidem nobis animi et, expedita porro hic aperiam, consequuntur, inventore ad aliquam harum labore! Iste tempora itaque, iusto velit nobis suscipit a minima eius.

                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='p-4 w-[50%] items-start flex bg-primary-100 text-gray-100 mx-auto'
                    >
                        About Us
                    </motion.button>


                </div>

            </div>

            <VideoGrid />
        </section>
    )
}

export default page
