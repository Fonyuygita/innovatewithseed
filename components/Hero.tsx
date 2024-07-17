import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaUserPlus } from 'react-icons/fa';
const Hero = () => {
    return (
        <section className='w-screen overflow-hidden h-[500px] relative mt-3'>
            <Image src="/banner.png" alt='hero' fill className='w-full h-full' />

            {/* hero description */}
            <div className="flex flex-col gap-4 absolute z-50 top-[9rem] w-[40%] left-[5%]">
                <h1 className='text-3xl text-start text-white font-bold .text-36-bold '> <span className='text-primary-100'>Empowering</span> The Future Of <span className='text-primary-100'>Tech</span></h1>
                <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus? Quam, atque dignissimos? Culpa perferendis laborum voluptate blanditiis inventore nam explicabo aliquid in!</p>
                <CustomButton
                    title='Register'
                    icon={<FaUserPlus />}
                    extraStyle="min-w-[30%] md:w-[27%]"

                />
            </div>
        </section>
    )
}

export default Hero
