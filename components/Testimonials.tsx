import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import PrimaryBtn from './PrimaryBtn'

const Testimonials = () => {
  return (


    <section className="w-full py-[6rem] overflow-hidden">
      <h1 className='text-[1.6rem] md:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-light-200 '>Testimonials{" "}<span className='text-primary-100 capitalize'>From{" "}</span>Studentss At{" "}<span className='text-primary-100'>SEED</span></h1>

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

        <div className=" md:rounded-3xl rounded-full w-full md:h-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] shadow-2xl
        shadow-blue-700 from-blue-800 to-blue ">
          <Image src="/student.svg" alt='student' width={1000} height={1000} className='w-full md:h-[500px] h-full md:rounded-sm rounded-full object-contain' />
        </div>
      </div>


      <h2 className='text-[1.6rem] md:text-[2.4rem] my-[5rem] font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-light-200  '>There{" "}<span className='text-primary-100 capitalize'>We{" "}</span>Go👌{" "}<span className='text-primary-100'>SEED</span></h2>

      {/* testimonials here */}

      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:justify-center w-full md:px-9 md:gap-8 gap-10  px-10">
        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>

        <div className="w-full  h-[230px] card-wrapper">
          <div className="card-content flex flex-col items-center  gap-5">
            {/* top section */}
            <div className="flex justify-between items-center w-full px-6 mt-3">
              <h3 className="text-light-200 text-xl">Fonyuy Gita</h3>
              <Image src="/user.png" className='w-9 h-9 rounded-full border border-primary-100' alt='user' width={50} height={50} />
            </div>
            <div className="flex  justify-between w-full items-center px-3">

              <Image src="/star.svg" width={150} height={60} alt='stars' className='w-[120px] h-[60px] ' />
              {/* <h4>student</h4> */}
            </div>
            <p className='w-full text-sm text-[#beb7b7] px-6'>
              {"SEED's"} 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers
            </p>
          </div>

        </div>



      </div>
    </section>
  )
}

export default Testimonials
