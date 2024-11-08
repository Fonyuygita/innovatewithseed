"use client"

import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaShare, FaSubscript, FaUber, FaUserPlus, FaWhatsapp } from 'react-icons/fa'
import { FaMessage, FaShareNodes, FaX, FaXTwitter } from 'react-icons/fa6'
import CustomButton from './CustomButton'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'
import { useTheme } from './context/ThemeContext'

const Footer = () => {
    const { theme } = useTheme()
    return (
        <div className={`w-full  border-t-2 border-blue-500   px-3 min-h-  ${theme === "light" ? "bg-light-200" : "bg-gray-800"}`}>
            <div className="flex flex-col md:items-center items-start w-[90%] mx-auto p-3">

                {/* top section */}

                <div className="flex md:flex-row flex-col justify-between md:items-center md:gap-[8rem] mt-9 items-start gap-[5rem]">
                    {/* social media icon */}
                    <div className="flex items-center gap-4">
                        <FaWhatsapp className='text-primary-100 h-12 w-12 border border-primary-100 p-2' />

                        <div className="flex flex-col gap-3">
                            <h1 className='text-sm text-primary-100'>Call Now</h1>
                            <p className="text-blue-500 font-bold text-lg ">(+237) 680 468 606</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMessage className='text-primary-100 h-12 w-12 border border-primary-100 p-2' />

                        <div className="flex flex-col gap-3">
                            <h1 className='text-sm text-primary-100'>Email Administration</h1>
                            <p className="text-blue-500 font-bold text-lg ">Info@innovatewithseed.com</p>
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
                <div className="w-full h-[1px] bg-blue-500 md:my-8 my-2"></div>


                {/* middle section */}
                <div className="flex justify-between w-full flex-col md:flex-row lg:gap-[8rem] gap-[3rem] items-start">
                    <div className="flex flex-col gap-5 md:items-center items-start">
                        <div className='flex flex-col items-center my-3'>
                            <Link href="/" className={`rounded-full shadow-2xl ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white border border-x-primary-100'}`}>
                                <Image
                                    src="/seedLogo.png"
                                    width={150}
                                    height={150}
                                    alt='logo'
                                    className=' items-center justify-center  object-contain hidden'
                                />
                            </Link>
                            <h1 className='text-lg text-primary-100'>SE<span className='text-blue-500'>ED</span></h1>
                        </div>

                        <p className="text-blue-500 w-[70%] text-left font-sans">We Are A First Class Professional IT Training Institute
                        </p>
                        {/* <input type="text" className={` px-8 py-3 outline-none border border-blue-500 ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-700 text-light-200"} rounded-lg shadow-xl`} placeholder='email......' />
                        <PrimaryBtn
                            title="Subscribe"
                            extraStyle="min-w-[90%] md:w-[27%] "
                            icon={<FaUserPlus />}
                        /> */}

                    </div>

                    {/* links here */}

                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-primary-100 my-7">Company</h3>
                        <div className="bg-primary-100 w-[100%] h-[1px] mt-[-2.6rem] mb-4"></div>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">About Us</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Admission</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Blog</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Contact Us</Link>

                        <Link href="/privacy-policy" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Privacy Policy</Link>


                    </div>

                    {/* links here */}

                    <div className="flex flex-col items-left gap-4">
                        <h3 className="text-primary-100 my-7">Our Interest</h3>
                        <div className="bg-primary-100 w-[100%] h-[1px] mb-4 mt-[-2.4rem]"></div>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Web Development</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Cybersecurity</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">Machine Learning</Link>
                        <Link href="/about" className="text-blue-500 text-sm font-sans font-600 hover:text-[#888] animate-in transition-all duration-75">App Development</Link>

                    </div>
                </div>
                {/* bottom section */}
            </div>
            <div className="md:my-3  my-1w-full h-[1px]  bg-primary-100"></div>
            <div className=" flex  w-[83%] mx-auto flex-between px-[1px]" py-5>
                <h5 className='text-[10px] text-[#999] font-sans '>Copyright 2024 Seed. All Rights Reserved.</h5>

                <h5 className='text-[10px] text-[#999] font-sans '>SeedWeb</h5>

            </div>
            {/* <div className="w-full bg-white h-[130px] mt-3 flex items-center justify-center">
                <FaUber className='bg-violet-950 h-12 w-12 text-primary-100' />
                <p className="text-primary-100 text-lg">Fonyuy Gita</p>
            </div> */}
        </div>
    )
}

export default Footer
