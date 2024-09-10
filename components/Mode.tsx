import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Mode = () => {
    return (

        <div className="flex items-center justify-center gap-1 bg-primary-100 shadow-xl p-2 rounded-2xl  cursor-pointer fixed bottom-2 left-3 md:hidden">
            <FaMoon className="text-lg text-light-200 " />
            <FaSun className="text-lg h-full" />
        </div>
    )
}

export default Mode
