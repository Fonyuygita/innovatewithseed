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
        <section className='absolute top-[48%] md:top-[38.9%] left-[1px]  '>
            <div className="relative my-7 px-1 flex">
                <div className="flex items-center gap-3">
                    <button

                        className="flex items-center justify-center md:w-12 md:h-12 w-9 h-9 bg-blue-500 rounded-full text-white shadow-lg"
                        onClick={togglePanel}
                    >
                        <FaNewspaper size={24} />
                    </button>
                    <span className='text-[12px]'>Latest News</span>
                </div>



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
