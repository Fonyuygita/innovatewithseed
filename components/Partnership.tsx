import React from 'react'
import { FaCalculator, FaTeamspeak } from 'react-icons/fa'
import { FaCodeCommit } from 'react-icons/fa6'

const Partnership = () => {
    return (
        <section className='w-full bg-primary-100 p-5 flex items-center justify-around h-[240px] font-sans'>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaCalculator size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Encourage critical thinking</h3>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaTeamspeak size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Team Collaboration</h3>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaCodeCommit size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Developer</h3>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaCalculator size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Encourage critical thinking</h3>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaTeamspeak size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Team Collaboration</h3>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue p-4 rounded-full">
                    <FaCodeCommit size={37} className='text-white' />
                </div>
                <h3 className='text-white text-lg '>Developer</h3>
            </div>






        </section>
    )
}

export default Partnership
