import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import PrimaryBtn from './PrimaryBtn'
import SwipeTestimonials from './SwipeTestimonials'

const Testimonials = () => {
  return (


    <section className="w-full py-[6rem] overflow-hidden">
      <h1 className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Testimonials{" "}<span className='text-primary-100 capitalize'>From{" "}</span>Studentss At{" "}<span className='text-primary-100'>SEED</span></h1>

      <div className="flex  md:flex-row flex-col items-center justify-between px-9 w-full my-[3rem]">
        <div className="w-full h-full  flex flex-col gap-7 justify-center">
          <h2 className='text-light-200 md:text-4xl text-xl line-clamp-1 font-sans'>Waoh!, you {"won't"} believe what our students says about us</h2>
          <p className='md:w-[80%] sm:text-[23px] w-[95%] font-sans text-[#999]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum accusantium iste quisquam ad minus cupiditate in. Sed illo nisi facilis quidem necessitatibus pariatur! Quidem sint porro ad natus quas.</p>
          <PrimaryBtn
            title="Read more"
            extraStyle="min-w-[30%] md:w-[27%] border-blue-950 border bg-primary-100 md:my-4 my-6 "
            icon={<FaArrowAltCircleRight />}
          />
        </div>

        <div className=" md:rounded-3xl rounded-full w-full md:h-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
        from-gray-300 to-gray-100  shadow-xl">
          <Image src="/student.svg" alt='student' width={1000} height={1000} className='w-full md:h-[500px] h-full md:rounded-sm rounded-full object-contain' />
        </div>
      </div>


      <h2 className='text-[1.6rem] md:text-[2.4rem] my-[5rem] font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800  '>There{" "}<span className='text-primary-100 capitalize'>We{" "}</span>Go👌{" "}<span className='text-primary-100'>SEED</span></h2>

      {/* testimonials here */}

      <SwipeTestimonials />
    </section>
  )
}

export default Testimonials
