"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import PrimaryBtn from './PrimaryBtn'
import SwipeTestimonials from './SwipeTestimonials'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (


    <section ref={ref} className="w-full py-[6rem] overflow-hidden">
      <motion.h1

        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }} className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Testimonials{" "}<span className='text-primary-100 capitalize'>From{" "}</span>Students At{" "}<span className='text-primary-100'>SEED</span></motion.h1>

      <div className="flex  md:flex-row flex-col items-center justify-between px-9 w-full my-[3rem]">
        <div className="w-full h-full  flex flex-col gap-7 justify-center">
          <motion.h2

            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }} className='text-gray-900 md:text-4xl text-xl line-clamp-1 font-sans'>Waoh!, you {"won't"} believe what our students says about us</motion.h2>
          <motion.p initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.5 }} className='md:w-[80%] sm:text-[23px] w-[95%] font-sans text-[#999]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum accusantium iste quisquam ad minus cupiditate in. Sed illo nisi facilis quidem necessitatibus pariatur! Quidem sint porro ad natus quas.</motion.p>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <PrimaryBtn
              title="Read more"
              extraStyle="min-w-[30%] md:w-[27%] border-blue-950 border bg-primary-100 md:my-4 my-6 "
              icon={<FaArrowAltCircleRight />}
            />
          </motion.div>
        </div>


        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.6, delay: 0.7 }} className=" md:rounded-3xl rounded-full w-full md:h-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
        from-gray-300 to-gray-100  shadow-xl">
          <Image src="/student.svg" alt='student' width={1000} height={1000} className='w-full md:h-[500px] h-full md:rounded-sm rounded-full object-contain' />
        </motion.div>


      </div>


      <motion.h2

        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className='text-[1.6rem] md:text-[2.4rem] my-[5rem] font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800  '>There{" "}<span className='text-primary-100 capitalize'>We{" "}</span>Go👌{" "}<span className='text-primary-100'>SEED</span></motion.h2>

      { }
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.6, delay: 0.9 }}

        className="w-[80%] mx-auto py-[4rem]">
        <SwipeTestimonials />
      </motion.div>
    </section>
  )
}

export default Testimonials
