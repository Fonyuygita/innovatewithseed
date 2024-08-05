import ContactUs from '@/components/ContactUs'
import DynamicHero from '@/components/DynamicHero'
import ServicesBody from '@/components/ServicesBody'
// import ServicesHero from '@/components/ServicesHero'
import React from 'react'

const page = () => {
    return (
        <section className='flex flex-col flex-between items-center gap-[6rem]'>
            <DynamicHero
                title="Welcome to Tech Company"
                description="We offer a wide range of services to help your business thrive in the digital age. From web development to AI solutions, our team of experts is here to support you every step of the way."
            />
            <ServicesBody />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
                <ContactUs />
            </div>
        </section>
    )
}

export default page
