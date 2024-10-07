"use client"

import React, { ReactNode, useState } from 'react'
import { motion } from "framer-motion"
import { FaHackerNews, FaNewspaper } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { useTheme } from './context/ThemeContext'
import { FaCircleXmark } from 'react-icons/fa6'

const LatestNewsClient = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='absolute top-[48%] md:top-[38.9%] left-[6%]  '>
            <div className="relative my-7 px-1 flex">
                <div className="flex items-center gap-3">
                    <button

                        className="flex items-center justify-center  bg-blue-500 rounded-md text-white shadow-lg"
                        onClick={togglePanel}
                    >
                        <FaNewspaper size={24} className='p-1' />
                        <span className={`rounded-md p-2 text-[12px] cursor-pointer ${theme === "light" ? "bg-gray-300 text-gray-900 " : "text-light-200 bg-gray-900"}`}>Latest News</span>
                    </button>

                </div>



                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isOpen ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="fixed top-0 left-0 min-h-screen w-3/4 bg-gray-800 shadow-lg z-50 overflow-y-auto"
                    style={{ maxHeight: '100vh' }}
                >
                    <button className='absolute top-2 right-3' onClick={togglePanel}>
                        <FaCircleXmark className='w-8 h-8 text-primary-100 font-bold' />
                    </button>

                    {children}
                </motion.div>
            </div>
        </section>
    )
}

export default LatestNewsClient
