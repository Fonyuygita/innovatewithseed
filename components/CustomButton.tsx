import { ButtonType } from '@/constants/type'
import React from 'react'



const CustomButton = ({ title, icon, extraStyle }: ButtonType) => {
    return (
        <button className={`text-lg py-2 flex items-center justify-center outline-none bg-blue-500 shadow-lg text-white rounded-lg px-8  hover:scale-110  transition p-3 ${extraStyle} flex items-center gap-x-4`}>
            {title}
            {icon ?? <span>{icon}</span>
            }
        </button>
    )
}

export default CustomButton
