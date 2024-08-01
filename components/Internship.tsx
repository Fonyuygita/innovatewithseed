import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Internship = () => {
    return (
        <section className='w-full px-6 mt-[4rem] flex items-center justify-center min-h-[100vh]  flex-col '>
            <div className="grid grid-cols-3 w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[600px]">
                    <div className="flex flex-col md:w-[60%] w-[90%] ml-[5%]  bg-slate-300 gap-4 rounded-lg py-5">
                        <Image src="/intern.png" alt='image' width={1000} height={340} className='object-contain w-[40rem] h-[300px]' />

                        <h3 className="text-2xl w-full line-clamp-2 font-bold font-sans capitalize text-blue-700 my-4 text-left pl-5">Enroll and try your summer internship with us </h3>

                        <CustomButton
                            title="Apply Now"
                            extraStyle="min-w-[30%] md:w-[50%] border-blue-950 border ml-5"
                            icon={<FaArrowAltCircleRight />}
                        />
                    </div>


                </div>

                <div className="flex flex-col items-center justify-center w-[600px]">
                    <div className="flex flex-col md:w-[60%] w-[90%] ml-[5%]  bg-slate-300 gap-4 rounded-lg py-5">
                        <Image src="/intern.png" alt='image' width={1000} height={340} className='object-contain w-[40rem] h-[300px]' />

                        <h3 className="text-2xl w-full line-clamp-2 font-bold font-sans capitalize text-blue-700 my-4 text-left pl-5">Enroll and try your summer internship with us </h3>

                        <CustomButton
                            title="Apply Now"
                            extraStyle="min-w-[30%] md:w-[50%] border-blue-950 border ml-5"
                            icon={<FaArrowAltCircleRight />}
                        />
                    </div>


                </div>

                <div className="flex flex-col items-center justify-center w-[600px]">
                    <div className="flex flex-col md:w-[60%] w-[90%] ml-[5%]  bg-slate-300 gap-4 rounded-lg py-5">
                        <Image src="/intern.png" alt='image' width={1000} height={340} className='object-contain w-[40rem] h-[300px]' />

                        <h3 className="text-2xl w-full line-clamp-2 font-bold font-sans capitalize text-blue-700 my-4 text-left pl-5">Enroll and try your summer internship with us </h3>

                        <CustomButton
                            title="Apply Now"
                            extraStyle="min-w-[30%] md:w-[50%] border-blue-950 border ml-5"
                            icon={<FaArrowAltCircleRight />}
                        />
                    </div>


                </div>






            </div>

            <div className="w-ful flex flex-col items-center justify-center h-[330px] p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] shadow-2xl
        shadow-blue-700 from-blue-800 to-blue ">
                <h1 className="text-4xl text-left w-full text-light-200 font-bold my-4 line-clamp-1">Upscale Your Skills And Talent, By Carrying Out Internship With U</h1>


                <p className='text-[#999] mt-5 font-sans text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptatem quos blanditiis modi ipsam architecto cumque qui, vero earum ipsa facilis eius dolore sapiente numquam enim distinctio ratione voluptas cum recusandae minima eligendi laborum?</p>





            </div>

        </section>
    )
}

export default Internship
