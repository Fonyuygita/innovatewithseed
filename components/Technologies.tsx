"use client"

import React from 'react'
import Technology from './Technology'
import { motion } from "framer-motion"
import Offers from './Offers'

const Technologies = () => {
    return (
        <section className="w-full bg-light-300  py-[3rem] overflow-hidden">
            <motion.h1
                className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-600'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Empower Your <span className='text-primary-100 capitalize'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span>
            </motion.h1>
            <Offers />


        </section>
    )
}

export default Technologies
