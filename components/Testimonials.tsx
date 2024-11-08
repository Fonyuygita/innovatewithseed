"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import PrimaryBtn from './PrimaryBtn'
import SwipeTestimonials from './SwipeTestimonials'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'
import SliderComponent from './AboutSlide'
import { useTheme } from './context/ThemeContext'

const Testimonials = () => {
  const controls = useAnimation();
  const { theme } = useTheme()
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
        transition={{ duration: 0.5, delay: 0.2 }} className='md:text-center w-[89%] pl-6  text-[1.3rem] md:text-[2.4rem] my-6 font-sans line-clamp-1 font-bold    text-blue-500 '>Testimonials{" "} From{" "}Students At{" "}<span className='text-primary-100'>SEED</span></motion.h1>

      <div className="flex  md:flex-row flex-col items-center justify-between px-9 w-full my-[3rem]">
        <div className="w-full h-full  flex flex-col items-start lg:items-start  gap-7 justify-center">
          <motion.h2

            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }} className='text-blue-500 md:text-[2.4rem] text-[1.4rem] line-clamp-1 font-sans w-full text-left'>Waoh!, you {"won't"} believe what our students says about us</motion.h2>
          <motion.p initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.5 }} className='md:w-[70%] sm:text-[23px] w-[95%] font-sans text-[#999]'>Here some inspiring words our students gave after the 50 Days Of Code Challenge...</motion.p>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/about" className='w-full'>
              <PrimaryBtn
                title="Read more"
                extraStyle="min-w-[30%] md:min-w-[57%] lg:flex hidden  md:my-4 my-6 "
                icon={<FaArrowAltCircleRight />}
              />
            </Link>
          </motion.div>
        </div>


        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.6, delay: 0.7 }} className={` w-full  lg:w-2/3 md:h-[500px] h-[400px] ${theme === "light" ? "bg-light-200" : "bg-gray-800"}  p-1`}>
          <SliderComponent images={[
            "/slide1.svg",
            "/slide2.svg",
            "/slide2.svg",
            "/team/s1.png",
            "/team/s4.png",
            "/testimonial/favour.png",
            "/testimonial/abdul.png",
            "/testimonial/tracy.png",
            "/testimonial/carlen.png",
            "/testimonial/frank.png",
            "/testimonial/mark.png",
            "/testimonial/hope.png",
            "/team/d1.png"

          ]} />

        </motion.div>


      </div>


      <motion.h2

        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className='text-[1.6rem] md:text-[2.4rem] my-[5rem] font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500  '>There{" "}<span className=' capitalize'>We{" "}</span>Go{" "}<span className='text-primary-100'>SEED</span></motion.h2>

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
