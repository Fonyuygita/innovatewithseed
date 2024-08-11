import DynamicHero from '@/components/DynamicHero'
import MyImageGallery from '@/components/gallery/ImageGallery'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-screen bg-gray-200 mt-[4rem]'>
            <DynamicHero
                title="Our Gallery"
                description="We offer a wide range of services to help your business thrive in the digital age. From web development to AI solutions, our team of experts is here to support you every step of the way."
            />
            <MyImageGallery />
        </div>
    )
}

export default page
