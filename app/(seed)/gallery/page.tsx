"use client"

import ContactUs from '@/components/ContactUs'
import { useTheme } from '@/components/context/ThemeContext'
import DynamicHero from '@/components/DynamicHero'
import FAQSection from '@/components/FaqSection'
import MyImageGallery from '@/components/gallery/ImageGallery'
import React from 'react'

const GalleryPage = () => {
    const { theme } = useTheme()
    return (
        <div className={`w-full min-h-screen bg-gray-200 mt-[4rem] ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-gray-300  '}`
        }>
            <DynamicHero
                title="Our Gallery"
                description="Dream Create Innovate"
            />
            <MyImageGallery />
            <FAQSection />
            <ContactUs />
        </div>
    )
}

export default GalleryPage
