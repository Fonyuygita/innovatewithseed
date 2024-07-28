import Image from 'next/image'
import React from 'react'

const RecentBlogs = () => {
    return (
        <section className="w-full bg-light-200  py-[6rem] overflow-hidden h-full">
            <h1 className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-700 '>Latest News{" "}<span className='text-primary-100 capitalize'>From{" "}</span>Us{" "}<span className='text-primary-100'>& Blogs</span></h1>

            <div className="flex  flex-col-reverse md:flex-row mt-[3rem] w-full items-center justify-center gap-7 px-3 min-h-full">
                {/* left hand side for articles */}
                <div className="flex flex-col   gap-5 w-full md:w-1/3 bg-white">
                    <div className="bg-white rounded-2xl shadow-2xl flex flex-col px-5  min-w-full h-[21rem] items-center gap-4 cursor-pointer">
                        <Image src="/blog1.svg" alt='blog1' width={300} height={200} className='w-full px-[2px] h-[10rem] object-contain my-3 hover:scale-110 transition-all duration-75 animate-accordion-down' />
                        <h3 className="text-blue-950 w-full px-3 line-clamp-1 md:text-2xl xl:text-4xl  sm:text-xl">How to improve your coding habits as a newbie in Programming</h3>

                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl flex flex-col px-5  min-w-full h-[21rem] items-center gap-4 cursor-pointer">
                        <Image src="/blog2.svg" alt='blog1' width={300} height={200} className='w-full px-[2px] h-[10rem] object-contain my-3 hover:scale-110 transition-all duration-75 animate-accordion-down' />
                        <h3 className="text-blue-950 w-full px-3 line-clamp-1 md:text-2xl xl:text-4xl  sm:text-xl">5 reasons why you should choose express.js instead</h3>

                    </div>


                </div>
                {/* right hand side for picture*/}
                <div className="w-full md:w-[70%]  h-[16rem]  md:h-[40rem] p-7 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue shadow-sm md:shadow-2xl cursor-pointer ">
                    <Image src="/blog.svg" alt='' width={1000} height={1000} className=' object-contain w-full h-full p-2 hover:scale-110  transition-all duration-75 ' />
                </div>

            </div>
        </section>
    )
}

export default RecentBlogs
