"use client"

import { useTheme } from '@/components/context/ThemeContext'
import DynamicHero from '@/components/DynamicHero'
import MyImageGallery from '@/components/gallery/ImageGallery'
import React from 'react'

const GalleryPage = () => {
    const { theme } = useTheme()
    return (
        <div className={`w-full min-h-screen bg-gray-200 mt-[4rem] ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-gray-300  '}`
        }>
            <DynamicHero
                title="Our Gallery"
                description="We plant to harvest"
            />
            <MyImageGallery />
        </div>
    )
}

export default GalleryPage
