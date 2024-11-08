"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './context/ThemeContext'
import GetRecentBlogs from './getRecentPost'

const RecentBlogs = () => {
    const { theme } = useTheme()
    return (
        <section className={`w-full  py-[6rem] overflow-hidden h-full ${theme === 'light' ? 'text-gray-600 bg-light-200  ' : ' text-light-300 bg-gray-950'}`}>
            <motion.h1
                className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Latest News{" "}<span className='text-blue-500 capitalize'>From{" "}</span>Us{" "}<span className='text-primary-100'>& Blogs</span>
            </motion.h1>

            <div className="flex flex-col-reverse md:flex-row mt-[3rem] lg:w-[95%] mx-auto items-center justify-center gap-7 lg:px-3 min-h-full w-full px-4">
                {/* left hand side for articles */}
                {/* <GetRecentBlogs /> */}
                {/* right hand side for picture */}
                <motion.div
                    className="w-[100%] md:w-[90%] h-[16rem] md:h-[40rem] md:p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue shadow-sm md:shadow-2xl cursor-pointer p-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src="/contact.svg" alt='' width={1000} height={1000} className='object-cover w-full h-full ' />
                </motion.div>
            </div>
        </section>
    )
}

export default RecentBlogs
