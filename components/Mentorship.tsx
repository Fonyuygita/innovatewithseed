import Image from 'next/image'
import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'

const Mentorship = () => {
    return (
        <section className="w-full   py-[3rem] overflow-hidden  items-center  gap-6 flex-col">
            <h1 className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500'>Get <span className='text-primary-100 capitalize'>Mentored{" "}</span>By The {" "}Best</h1>
            <div className="h-[350px] w-screen md:w-[80%] lg:w-[70%] mx-auto bg-blue-950">
                <Image src="/team/s1.png" alt='banner' height={700} width={500} className='object-cover w-[990px] h-[300px] mx-auto ' />



            </div>

            <div className="bg-gray-100 shadow-2xl min-h-[300px] md:h-[350px] w-[89%] px-3 md:w-[70%] mx-auto mt-[5rem]">
                <div className=" flex items-center justify-center text-xs">
                    <div className="max-w-[100%] text-center flex items-center flex-col gap-4">
                        <div className="w-24 h-24 bg-primary-100 text-white rounded-full flex items-center justify-center  border-primary-100">
                            <FaProjectDiagram size={40} />
                        </div>
                        <div className="flex item-center gap-4 flex-col justify-center">

                            <h3 className='w-full text-2xl text-blue-500'>Skill Enhancement</h3>
                            <p className='text-[#999] text-sm line-clamp-1'>Work on real life projects</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Mentorship
