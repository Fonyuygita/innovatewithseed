import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import PrimaryBtn from './PrimaryBtn'

const Testimonials = () => {
  return (


    <section className="w-full bg-blue-950  py-[6rem] overflow-hidden">
      <h1 className='text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-light-200 '>What Our{" "}<span className='text-primary-100 capitalize'>Students{" "}</span>About{" "}<span className='text-primary-100'>SEED</span></h1>

      <div className="flex items-center justify-between px-9 w-full my-[3rem]">
        <div className="w-full h-full  flex flex-col gap-7 justify-center">
          <h2 className='text-light-200 text-4xl line-clamp-1 font-sans'>Waoh!, you {"won't"} believe what our students says about us</h2>
          <p className='w-[80%] font-sans text-[#999]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum accusantium iste quisquam ad minus cupiditate in. Sed illo nisi facilis quidem necessitatibus pariatur! Quidem sint porro ad natus quas.</p>
          <PrimaryBtn
            title="Read more"
            extraStyle="min-w-[30%] md:w-[27%] border-blue-950 border bg-primary-100"
            icon={<FaArrowAltCircleRight />}
          />
        </div>

        <div className="rounded-3xl w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] shadow-2xl
        shadow-blue-700 from-blue-800 to-blue ">
          <Image src="/student.svg" alt='student' width={1000} height={1000} className='w-full h-[500px] object-contain' />
        </div>
      </div>


      <h2 className='text-[2.4rem] my-[5rem] font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-light-200  '>There{" "}<span className='text-primary-100 capitalize'>We{" "}</span>Go👌{" "}<span className='text-primary-100'>SEED</span></h2>

      {/* testimonials here */}

      <div className="grid grid-cols-2 items-center justify-center w-full px-9 gap-8">
        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>
        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content"></div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
