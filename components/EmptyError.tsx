
import React from 'react'
import Image from "next/image"
// import CustomErrorButton from "./CustomErrorButton"
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { router } from 'expo-router'
const EmptyError = ({ title, subTitle, className, image }: { title: string; subTitle: string; className: string, image?: string }) => {
    return (
        <div className={`flex ${className}  flex-col  justify-center items-center px-4 `}>

            <Image
                src={image!}
                className="w-[270px] h-[215px]"
                alt='error'
                width={200}
                height={200}
            />
            <div className="my-3 text-center">
                <p className="font-sans text-xl text-gray-100">{title}</p>
                <p className="font-sans text-sm text-white text-center mt-2">{subTitle}</p>
            </div>

            {/* <CustomErrorButton
            title="Create content"
            handlePress={()=>router.push('/create')
            }
            customStyles="w-full my-5"
            
            /> */}

            <Link href="/student" className='flex items-center justify-center w-fit py-3 px-9 text-light-100 bg-primary-100 text-white gap-3 rounded-md'>
                <FaArrowLeft color='white' className='text-light-200' />

                <span>Dashboard</span>
            </Link>

        </div>
    )
}

export default EmptyError