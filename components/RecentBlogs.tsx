"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const RecentBlogs = () => {
    return (
        <section className="w-full bg-light-200 py-[6rem] overflow-hidden h-full">
            <motion.h1
                className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-700'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Latest News{" "}<span className='text-primary-100 capitalize'>From{" "}</span>Us{" "}<span className='text-primary-100'>& Blogs</span>
            </motion.h1>

            <div className="flex flex-col-reverse md:flex-row mt-[3rem] w-[80%] mx-auto items-center justify-center gap-7 px-3 min-h-full">
                {/* left hand side for articles */}
                <div className="flex flex-col gap-5 w-full md:w-1/3 bg-white">
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl flex flex-col px-5 min-w-full h-[21rem] items-center gap-4 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="/blog1.svg" alt='blog1' width={300} height={200} className='w-full px-[2px] h-[10rem] object-contain my-3' />
                        <motion.h3
                            className="text-blue-950 w-full px-3 line-clamp-1 md:text-2xl xl:text-4xl sm:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            How to improve your coding habits as a newbie in Programming
                        </motion.h3>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl flex flex-col px-5 min-w-full h-[21rem] items-center gap-4 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="/blog2.svg" alt='blog1' width={300} height={200} className='w-full px-[2px] h-[10rem] object-contain my-3' />
                        <motion.h3
                            className="text-blue-950 w-full px-3 line-clamp-1 md:text-2xl xl:text-4xl sm:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            5 reasons why you should choose express.js instead
                        </motion.h3>
                    </motion.div>
                </div>
                {/* right hand side for picture */}
                <motion.div
                    className="w-full md:w-[70%] h-[16rem] md:h-[40rem] p-7 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue shadow-sm md:shadow-2xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src="/blog.svg" alt='' width={1000} height={1000} className='object-contain w-full h-full p-2' />
                </motion.div>
            </div>
        </section>
    )
}

export default RecentBlogs
