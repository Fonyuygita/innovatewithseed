import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <section className="mt-[14rem]">
            <h1 className="heading text-blue-600 -[70%]">
                Our   {' '}
                <span className="text-primary-100">Tech Programs</span>
            </h1>
            <div className="w-full px-8 flex items-center gap-x-6 justify-center my-[3rem]">
                <div className="p-5 min-w-[330px] flex flex-col gap-4 items-center bg-blue-800 rounded-lg">
                    <div className="p-2 w-full h-[300px]">
                        <Image src="/bootcamps.jpg" alt='service' width={330} height={300} className='object-contain w-full h-[300px]' />

                    </div>
                    <div className="mt-3  pl-2">
                        <h2 className='font-bold text-2xl text-white/100 text-left my-3'>Coding <span className='text-primary-100'>Bootcamps</span></h2>
                        <p className='text-lg font-sans text-white/100 text-left w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga eveniet eligendi.</p>
                    </div>
                </div>

                <div className="p-5 min-w-[330px] flex flex-col gap-4 items-center bg-blue-800 rounded-lg">
                    <div className="p-2 w-full h-[300px]">
                        <Image src="/bootcamps.jpg" alt='service' width={330} height={300} className='object-contain w-full h-[300px]' />

                    </div>
                    <div className="mt-3  pl-2">
                        <h2 className='font-bold text-2xl text-white/100 text-left my-3'>Coding <span className='text-primary-100'>Bootcamps</span></h2>
                        <p className='text-lg f font-sans text-white/100 text-left w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga eveniet eligendi.</p>
                    </div>
                </div>


                <div className="p-5 min-w-[330px] flex flex-col gap-4 items-center bg-blue-800 rounded-lg">
                    <div className="p-2 w-full h-[300px]">
                        <Image src="/bootcamps.jpg" alt='service' width={330} height={300} className='object-contain w-full h-[300px]' />

                    </div>
                    <div className="mt-3  pl-2">
                        <h2 className='font-bold text-2xl text-blue-600 text-left my-3 text-white/100'>Coding <span className='text-primary-100'>Bootcamps</span></h2>
                        <p className='text-lg  font-sans text-white/100 text-left w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga eveniet eligendi.</p>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default Services
