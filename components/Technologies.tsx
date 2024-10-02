"use client"

import React, { useEffect, useState } from 'react'

import Offers from './Offers'
import { useTheme } from './context/ThemeContext'


const Technologies = () => {

    const { theme } = useTheme()






    return (
        <section className={`w-full   py-[3rem] overflow-hidden ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 bg-gray-800'}`} >
            <h1 className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500 mb-9'>Grow With The<span className='text-primary-100 capitalize'> Best</span></h1>

            <Offers />



        </section>
    )
}

export default Technologies
