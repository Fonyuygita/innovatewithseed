"use client"
import { MentorshipData } from '@/data'
import Image from 'next/image'
import React from 'react'
import { FaLink, FaProjectDiagram } from 'react-icons/fa'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'



const Mentorship = () => {
    return (



        <section className="w-full   py-[3rem] overflow-hidden  items-center  gap-6 flex-col">
            <h1 className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500 mb-9'>Get <span className='text-primary-100 capitalize'>Mentored{" "}</span>By The {" "}Best</h1>
            <div className="h-[350px] w-screen md:w-[80%] lg:w-[76%] pt-4 mx-auto bg-blue-500 mb-[4rem]">
                <Image src="/team/s1.png" alt='banner' height={700} width={500} className='object-cover w-[999px] h-[300px] mx-auto ' />



            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}

                pagination={{ clickable: true }}
                className='lg:w-[76%] w-[90%] mx-auto px-3 '

            >
                {MentorshipData.map((item, index) => (
                    <SwiperSlide className="bg-blue-500 shadow-2xl min-h-[300px] md:h-[350px] w-[89%] px-9 md:w-full mb-[4rem] mt-[5rem] relative border-2 border-primary-100" key={item.id}>
                        <div className="flex justify-between items-center px-5 w-full">
                            <div className=" flex items-center justify-center text-xs md:flex-row flex-col w-full">
                                <div className="max-w-[90%]  md:flex md:items-start flex-col md:gap-4 p-3 items-center hidden">
                                    <div className="w-20 h-20 bg-primary-100 text-white rounded-full md:flex items-center justify-center  border-primary-100 md:p-3 hidden">
                                        <FaProjectDiagram size={30} />
                                    </div>
                                    <div className="flex item-start gap-4 flex-col justify-center">

                                        <h3 className='w-full md:text-2xl text-gray-100 font-bold text-lg mt-8 md:flex hidden'>{item.title}</h3>
                                        <p className='text-gray-100 text-sm w-full lg:w-[90%] md:flex hidden '>{item.description}</p>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col items-center h-full">
                                    <Image src={item.img!} alt='mentor' className='w-[150px] h-[150px] object-contain rounded-full border-4 border-primary-100 absolute -top-[5rem]' width={200} height={200} />
                                    <div className="flex flex-col gap-2 mt-6">
                                        <p className='text-gray-100 text-lg space-x-2 mt-[4rem]'>{item.name}</p>


                                        <Link href="/" className='text-gray-100 bg-primary-100 px-5 py-2 my-4 flex items-center  gap-2'>
                                            <span>Portfolio</span>
                                            <FaLink />

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination mt-[2rem]"></div>
            </Swiper>


        </section>
    )
}

export default Mentorship
