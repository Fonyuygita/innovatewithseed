"use client"

import React from 'react'
import Image from "next/image"
// import CustomErrorButton from "./CustomErrorButton"
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';
// import { useTheme } from 'next-themes';
// import { router } from 'expo-router'
const EmptyError = ({ title, subTitle, className, image, msg }: { title: string; subTitle: string; className: string, image?: string; msg?: boolean }) => {
    const { theme } = useTheme()
    return (
        <div className={`flex ${className} ${theme === "light" ? "bg-light-300 text-gray-800" : "bg-gray-950 text-light-200"}  flex-col  justify-center items-center px-4 `}>

            <Image
                src={image!}
                className="w-[270px] h-[215px]"
                alt='error'
                width={200}
                height={200}
            />
            <div className="my-3 text-center">
                <p className="font-sans text-xl ">{title}</p>
                <p className="font-sans text-sm  text-center mt-2">{subTitle}</p>
            </div>
            {msg && (
                <Link href="https://wa.me/+237680468606" className="my-3 flex items-center justify-center gap-2">
                    <span className='text-light-200 w-8 h-8  bg-green-700 flex items-center justify-center rounded-full'><FaWhatsapp className='w-full h-full' /></span>
                    <span className='text-light-200 bg-green-700 p-2'>For more information</span>
                </Link>
            )}


            {/* <CustomErrorButton
            title="Create content"
            handlePress={()=>router.push('/create')
            }
            customStyles="w-full my-5"
            
            /> */}

            <Link href="/student" className={`flex items-center justify-center w-fit py-3 px-9 text-light-100  ${msg ? "bg-primary-100" : "bg-primary-100"} text-white gap-3 rounded-md`}>
                <FaArrowLeft color='white' className='text-light-200' />

                <span>Dashboard</span>
            </Link>

        </div>
    )
}

export default EmptyError