"use client"
import React from 'react'
import { useTheme } from './context/ThemeContext'

const DashboardFooter = () => {
    const { theme } = useTheme()
    return (
        <div className={`justify-between flex flex-col items-start w-full gap-4 ${theme === "light" ? "bg-light-200 text-gray-700" : "bg-gray-900 text-light-200"}`}>
            <div className="w-full h-[0.6px] bg-primary-100"></div>

            <div className="flex items-start justify-between gap-5 text-sm w-full lg:px-[10rem] px-[4rem]">
                <p>@copyright Seed 2024</p>
                <p>All right reserved</p>
            </div>

        </div>
    )
}

export default DashboardFooter
