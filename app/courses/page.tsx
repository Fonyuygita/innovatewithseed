import CourseDetail from '@/components/Courses'
import DynamicHero from '@/components/DynamicHero'
import React from 'react'

const page = () => {
    return (
        <section className='w-full bg-gray-300 min-h-screen'>
            <DynamicHero
                title="We Offer Courses On"
                description="We offer a wide range of services to help your business thrive in the digital age. From web development to AI solutions, our team of experts is here to support you every step of the way."
            />

            <CourseDetail />

        </section>
    )
}

export default page
