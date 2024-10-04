"use client"

import React, { ReactNode, useState } from 'react'
import { motion } from "framer-motion"
import { FaHackerNews, FaNewspaper } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
const LatestNewsClient = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='absolute top-[38.9%] left-[1px]  '>
            <div className="relative my-5 px-1 flex">
                <button
                    onClick={togglePanel}
                    className=" p-4 py-1 w-fit  h-fit rounded-full  bg-blue-500 text-white  flex items-center justify-start gap-3 ml-4 text-[12px]"
                >

                    <span>News</span>
                    <span><FaHackerNews /></span>

                </button>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isOpen ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="fixed top-0 left-0 min-h-screen w-3/4 bg-gray-800 shadow-lg z-50 overflow-y-auto"
                    style={{ maxHeight: '100vh' }}
                >
                    <button className='absolute top-2 right-3' onClick={togglePanel}>
                        <FaPlay className='w-8 h-8 text-primary-100 font-bold' />.
                    </button>

                    {children}
                </motion.div>
            </div>
        </section>
    )
}

export default LatestNewsClient
