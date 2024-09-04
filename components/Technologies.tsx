"use client"

import React, { useState } from 'react'

import { motion } from "framer-motion"
import Offers from './Offers'

const Technologies = () => {
    const [show, setShow] = useState(false)
    const showMore = () => {
        // setShow(true)
        console.log("showing more..");
    }
    return (
        <section className="w-full bg-light-300  py-[3rem] overflow-hidden">
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
