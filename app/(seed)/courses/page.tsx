import CourseDetail from '@/components/Courses'
import DynamicHero from '@/components/DynamicHero'
import React from 'react'

const page = () => {
    return (
        <section className='w-full bg-gray-300 min-h-screen overflow-hidden'>
            <DynamicHero
                title="Our Courses"
                description="We plant to harvest"
            />

            <CourseDetail />

        </section>
    )
}

export default page
