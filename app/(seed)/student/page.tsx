"use client"

import { useTheme } from '@/components/context/ThemeContext'
import ProgramsSection from '@/components/programs/TechPrograms'
import React from 'react'

const StudentPage = () => {

    const { theme } = useTheme()
    return (
        <div className={`w-full min-h-screen pt-[8rem] ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-800 text-light-200"}`}>
            <div className={`flex-center relative min-h-[274px] w-[90%] mx-auto flex-col rounded-xl  bg-cover bg-center  text-center ${theme === 'light' ? "bg-blog" : "bg-ban"}`}>
                <h1 className="sm:heading1 heading2  mb-6 text-center text-white ">
                    <span className=' text-primary-100 font-extrabold '>[WELCOME 👋]</span> TO [SEED] ACADEMY
                </h1>
            </div>
            <ProgramsSection theme={theme} />
        </div>
    )
}

export default StudentPage
