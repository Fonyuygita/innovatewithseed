import React from 'react'
import { FaExpand } from 'react-icons/fa'

const Faqs = () => {
    return (
        <section className="w-full bg-gray-200  py-[6rem] overflow-hidden">
            <h1 className='text-[1.6rem] mg:text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-light-200 '>Frequently{" "}<span className='text-primary-100 mb-6 capitalize'>Ask{" "}</span>Questions{" "}<span className='text-primary-100'>.</span></h1>

            <div className="grid grid-cols-1 items-center justify-center w-[80vw] px-[1px] md:px-9 gap-8 mx-auto">
                <div className="w-full  h-[90px] card-wrapper">
                    <div className="card-content w-full flex items-center justify-between px-4">
                        <p className="w-full text-gray-900 md:text-inherit text-sm ">
                            What is {"SEED's"} primary focus as a tech company?
                        </p>
                        <FaExpand color='' className='cursor-pointer text-primary-100' />
                    </div>
                </div>

                <div className="w-full  h-[90px] card-wrapper">
                    <div className="card-content w-full flex items-center justify-between px-4">
                        <p className="w-full text-gray-900 ">
                            How does SEED differentiate itself from other coding bootcamps?
                        </p>
                        <FaExpand color='#FFF' className='cursor-pointer text-primary-100' />
                    </div>
                </div>

                <div className="w-full  h-[90px] card-wrapper">
                    <div className="card-content w-full flex items-center justify-between px-4">
                        <p className="w-full text-gray-900 ">
                            What qualifications do the instructors at SEED possess?
                        </p>
                        <FaExpand color='#FFF' className='cursor-pointer text-primary-100' />
                    </div>
                </div>

                <div className="w-full  h-[90px] card-wrapper">
                    <div className="card-content w-full flex items-center justify-between px-4">
                        <p className="w-full text-gray-800 ">
                            Are there any job placement opportunities after completing {"SEED's"} bootcamp
                        </p>
                        <FaExpand color='#FFF' className='cursor-pointer text-primary-100' />
                    </div>
                </div>





            </div>
        </section>

    )
}

export default Faqs
// What is SEED's primary focus as a tech company?
// How does SEED differentiate itself from other coding bootcamps ?
//     What qualifications do the instructors at SEED possess ?
//         Are there any job placement opportunities after completing SEED's bootcamp?
// Can students expect ongoing support and resources post - bootcamp from SEED ?
//     What technologies and programming languages are covered in SEED's 50-day code bootcamp?