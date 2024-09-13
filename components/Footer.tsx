"use client"

import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaShare, FaSubscript, FaUber, FaWhatsapp } from 'react-icons/fa'
import { FaMessage, FaShareNodes, FaX, FaXTwitter } from 'react-icons/fa6'
import CustomButton from './CustomButton'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'
import { useTheme } from './context/ThemeContext'

const Footer = () => {
    const { theme } = useTheme()
    return (
        <div className={`w-full  border-t-2 border-blue-500   px-3 min-h-  ${theme === "light" ? "bg-light-200" : "bg-gray-800"}`}>
            <div className="flex flex-col items-center w-[90%] mx-auto p-3">

                {/* top section */}

                <div className="flex md:flex-row flex-col justify-between items-center gap-[8rem] mt-9">
                    {/* social media icon */}
                    <div className="flex items-center gap-4">
                        <FaWhatsapp className='text-primary-100 h-12 w-12 border border-primary-100 p-2' />

                        <div className="flex flex-col gap-3">
                            <h1 className='text-sm text-primary-100'>Call Now</h1>
                            <p className="text-blue-500 font-bold text-lg ">(+237) 674 567 789</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMessage className='text-primary-100 h-12 w-12 border border-primary-100 p-2' />

                        <div className="flex flex-col gap-3">
                            <h1 className='text-sm text-primary-100'>Email Administration</h1>
                            <p className="text-blue-500 font-bold text-lg ">seed@email.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaShareNodes className='text-primary-100 h-12 w-12 border border-primary-100 p-2' />

                        <div className="flex flex-col gap-3">
                            <h1 className='text-sm text-primary-100'>Follow us on social media</h1>
                            <div className="flex items-center gap-3">
                                <Link href="#">
                                    <FaXTwitter className='text-[24px] text-blue-500' />
                                </Link>
                                <Link href="#">
                                    <FaFacebook className='text-[24px] text-blue-500' />
                                </Link>

                                <Link href="#">
                                    <FaInstagram className='text-[24px] text-blue-500' />
                                </Link>

                                <Link href="#">
                                    <FaLinkedin className='text-[24px] text-blue-500' />
                                </Link>


                            </div>
                        </div>
                    </div>


                </div>
                {/* line */}
                <div className="w-full h-[1px] bg-blue-500 my-8"></div>


                {/* middle section */}
                <div className="flex justify-between w-full flex-col md:flex-row lg:gap-[8rem] gap-[3rem]">
                    <div className="flex flex-col gap-5 items-center">
                        <div className='flex flex-col items-center '>
                            <Image src="/seedLogo.png" alt='seed' width={150} height={150} className='object-contain' />
                            <h1 className='text-lg text-primary-100'>SEED</h1>
                        </div>

                        <p className="text-blue-500 w-[70%] text-left font-sans">We Are A First Class Professional IT Training Institute
                        </p>
                        <input type="text" className={`text-gray-900 px-8 py-3 outline-none border border-blue-500 ${theme === "light" ? "bg-light-200" : "bg-gray-700"} rounded-lg shadow-xl`} placeholder='email......' />
                        <PrimaryBtn
                            title="Subscribe"
                            extraStyle="min-w-[90%] md:w-[27%] "
                            icon={<FaSubscript />}
                        />

                    </div>

                    {/* links here */}

                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-primary-100 my-7">Company</h3>
                        <div className="bg-primary-100 w-[100%] h-[1px] mb-4"></div>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">About Us</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Admission</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Blog</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Contact Us</Link>

                    </div>

                    {/* links here */}

                    <div className="flex flex-col items-left gap-4">
                        <h3 className="text-primary-100 my-7">Our Interest</h3>
                        <div className="bg-primary-100 w-[100%] h-[1px] mb-4"></div>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Web Development</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Cybersecurity</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Machine Learning</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">App Development</Link>

                    </div>
                </div>
                {/* bottom section */}
            </div>
            <div className="my-3 w-full h-[1px]  bg-primary-100"></div>
            <div className=" flex  w-[83%] mx-auto flex-between px-[1px]" py-5>
                <h5 className='text-sm text-[#999] font-sans '>Copyright 2024 Seed. All Rights Reserved.</h5>

                <h5 className='text-sm text-[#999] font-sans '>Design by Seed</h5>

            </div>
            {/* <div className="w-full bg-white h-[130px] mt-3 flex items-center justify-center">
                <FaUber className='bg-violet-950 h-12 w-12 text-primary-100' />
                <p className="text-primary-100 text-lg">Fonyuy Gita</p>
            </div> */}
        </div>
    )
}

export default Footer
