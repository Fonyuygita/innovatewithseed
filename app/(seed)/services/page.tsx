"use client"

import ContactUs from '@/components/ContactUs'
import { useTheme } from '@/components/context/ThemeContext'
import DynamicHero from '@/components/DynamicHero'
import ServicesBody from '@/components/ServicesBody'
// import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const ServicesPage = () => {
    const { theme } = useTheme()
    return (
        <section className={`flex flex-col flex-between items-center gap-[6rem] ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300  '}`
        }>
            <DynamicHero
                title="Our Services"
                description="We plant to harvest."
            />
            <ServicesBody />

            <ContactUs />

        </section>
    )
}

export default ServicesPage
