import React from 'react'

type ButtonType = {
    title: string;
    icon?: React.ReactNode
    extraStyle?: string
}

const CustomButton = ({ title, icon, extraStyle }: ButtonType) => {
    return (
        <button className={`text-lg py-2 flex items-center justify-center outline-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 to-blue-900 shadow-lg text-white rounded-lg px-8  hover:scale-110  transition p-3 ${extraStyle} flex items-center gap-x-4`}>
            {title}
            {icon ?? <span>{icon}</span>
            }
        </button>
    )
}

export default CustomButton
