import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
    return (
        <section className="mt-[34rem]">
            <h1 className="heading text-blue-600 -[70%]">
                Our   {' '}
                <span className="text-primary-100">Tech Programs</span>
            </h1>
            <div className="w-full px-8 flex items-center gap-x-6 justify-center my-[3rem] ">
                <div className="p-5 min-w-[330px] flex flex-col gap-4 items-center bg-[#fff] rounded-lg shadow-lg  hover:scale-110 cursor-pointer animate-in border-blue-950 border-b-2 transition-all duration-200">
                    <div className="p-2 w-full h-[300px]">
                        <Image src="/bootcamps.jpg" alt='service' width={330} height={300} className='object-contain w-full h-[300px]' />

                    </div>
                    <div className="mt-3  pl-2">
                        <h2 className='font-bold text-2xl text-blue-950 text-left my-3'>Coding <span className='text-primary-100'>Bootcamps</span></h2>
                        <div className="flex justify-between ">
                            <p className='text-[18px] font-sans text-blue-950 text-left w-[73%]'>Lorem ipsum dolor sit amet consectetur...</p>
                            <Link href="" className="text-blue-600 text-[18px] font-bold flex items-center justify-center line-clamp-1">
                                <span className='line-clamp-1 text-[16px]'>Expand</span>
                                <span className="color-blue-500 "><ArrowRight /></span>
                            </Link>

                        </div>

                    </div>
                </div>



                <div className="p-5 min-w-[330px] flex flex-col gap-4 items-center bg-[#fff] rounded-lg shadow-lg hover:scale-110 cursor-pointer animate-in border-blue-950 border-b-2">
                    <div className="p-2 w-full h-[300px]">
                        <Image src="/bootcamps.jpg" alt='service' width={330} height={300} className='object-contain w-full h-[300px]' />

                    </div>
                    <div className="mt-3  pl-2">
                        <h2 className='font-bold text-2xl text-blue-950 text-left my-3'>Coding <span className='text-primary-100'>Bootcamps</span></h2>
                        <div className="flex justify-between ">
                            <p className='text-[18px] font-sans text-blue-950 text-left w-[73%]'>Lorem ipsum dolor sit amet consectetur...</p>
                            <Link href="" className="text-blue-600 text-[18px] font-bold flex items-center justify-center line-clamp-1">
                                <span className='line-clamp-1 text-[16px]'>Expand</span>
                                <span className="color-blue-500 "><ArrowRight /></span>
                            </Link>

                        </div>

                    </div>
                </div>



            </div>


        </section>
    )
}

export default Services
