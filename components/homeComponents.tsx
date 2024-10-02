"use client"
import React, { ReactNode } from 'react'
import Partnership from './Partnership'
import Introduction from './Introduction'
import Technologies from './Technologies'
import Hero from './Hero'
import Mentorship from './Mentorship'
import Mission from './Mission'
import RecentBlogs from './RecentBlogs'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'
import SeedStory from './CompanyStory'
import { useTheme } from './context/ThemeContext'
// import { useTheme } from './context/ThemeContext'

const HomeComponents = ({ children }: { children: ReactNode }) => {

    const { theme } = useTheme()
    return (
        <div className={`${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-white '} text-red-400 overflow-x-hidden`}>

            <Hero />
            <Partnership />

            <SeedStory />
            {/* <Experience /> */}
            <Introduction />

            {/* <Services /> */}
            <Technologies />
            <Mentorship />
            <Mission />
            {children}
            <Testimonials />

            <ContactUs />

        </div>
    )
}

export default HomeComponents
