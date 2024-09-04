import DynamicHero from '@/components/DynamicHero'
import MyImageGallery from '@/components/gallery/ImageGallery'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-screen bg-gray-200 mt-[4rem]'>
            <DynamicHero
                title="Our Gallery"
                description="We plant to harvest"
            />
            <MyImageGallery />
        </div>
    )
}

export default page
