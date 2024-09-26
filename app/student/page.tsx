"use client"

import { useTheme } from '@/components/context/ThemeContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProgramsSection from '@/components/programs/TechPrograms'
import { useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'
import { FaUser, FaVoicemail } from 'react-icons/fa'

const StudentPage = () => {

    const { theme } = useTheme()
    const { user } = useUser();
    return (
        <>
            <Navbar />
            <div className={`w-full min-h-screen pt-[8rem] ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-800 text-light-200"}`}>
                <div className={` flex-center relative md:h-[274px] h-[180px] w-[90%] mx-auto flex-col rounded-xl  bg-cover bg-center  text-center ${theme === 'light' ? "bg-blog" : "bg-ban"} mb-[5rem]`}>
                    <h1 className="heading1 md:heading2  mb-6 text-center text-white ">
                        <span className=' font-extrabold '>[WELCOME 👋]</span> TO [SEED] <span className='text-primary-100 bg-white p-3'>ACADEMY</span>
                    </h1>
                    <div className="absolute left-[35%] -bottom-[3rem] md:-bottom-[5rem] md:left-[43%] ">
                        <Image src={user?.imageUrl!} alt='seed' width={200} height={200} className='rounded-full object-cover md:w-[200px] md:h-[200px] w-[100px] h-[100px]' />

                    </div>


                </div>
                <div className="flex md:flex-row flex-col items-center gap-4 my-7 mt-2 justify-center">
                    <div className="flex gap-1 items-center">
                        <FaUser className='text-primary-100' />
                        <p className={` text-sm ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>Welcome <span className='text-primary-100 '>{`${user?.firstName} ${user?.lastName}`}</span></p>


                    </div>
                    <p className='md:flex hidden'>|</p>
                    <div className="flex gap-1 items-center">
                        <FaVoicemail className='text-primary-100' />
                        <p className={` text-sm ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>{`${user?.emailAddresses[0]}`}</p>


                    </div>
                    {/* <p className='text-gray-300 text-sm'>jude@gmail.com</p> */}
                </div>
                <ProgramsSection theme={theme} />
            </div>
            <Footer />
        </>
    )
}

export default StudentPage
