import ProgramsSection from '@/components/programs/TechPrograms'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-screen mt-[8rem] '>
            <div className="flex-center relative min-h-[274px] w-[90%] mx-auto flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">
                    <span className='text-primary-100 '>[WELCOME 👋]</span> TO [SEED] ACADEMY
                </h1>
            </div>
            <ProgramsSection />
        </div>
    )
}

export default page
