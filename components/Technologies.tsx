"use client"

import React, { useState } from 'react'

import { motion } from "framer-motion"
import Offers from './Offers'
import { useTheme } from './context/ThemeContext'

const Technologies = () => {
    const [show, setShow] = useState(false)
    const { theme } = useTheme()
    const showMore = () => {
        // setShow(true)
        console.log("showing more..");
    }
    return (
        <section className={`w-full   py-[3rem] overflow-hidden ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 bg-gray-900'}`}>
            <motion.h1
                className={`text-[1.6rem] md:text-[2.4rem] my-6 font-sans  line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}

            >
                {/* <button>Click and check</button> */}
                Empower Your <span className=' capitalize'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
            </motion.h1>
            <Offers />


        </section>
    )
}

export default Technologies
