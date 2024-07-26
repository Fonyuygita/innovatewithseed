import Image from 'next/image';
import React from 'react'


interface TechProps {
    title: string;
    image: string;
    description1?: string;
    description2?: string;
    description3?: string;
    title1?: string;
    title2?: string;
    title3?: string;


}

const Technology = ({ title, image, description1, description2, description3, title1, title2, title3 }: TechProps) => {
    return (
        <div className='flex items-start justify-center gap-4 flex-col p-[23px] min-h-[60vh] overflow-hidden w-[80%] mx-auto'>
            <h2 className='text-bold text-4xl font-sans text-left mt-6 text-blue-950'>{title}</h2>
            <div className="w-full h-[70vh] mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 to-blue-900 shadow-lg rounded-lg">
                <Image src={image} alt={title} width={1000} height={600} className='object-contain w-full h-full ' />
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
                <p className='font-bold text-2xl font-mono text-primary-100'>{" "}{title1}
                    <span className='font-normal text-lg font-sans text-blue-950'>{description1}</span>
                </p>


                <p className='font-bold text-2xl font-mono text-primary-100'>{title2} {" "}
                    <span className='font-normal text-lg font-sans text-blue-950'>{description2}</span>
                </p>

                <p className='font-bold text-2xl font-mono text-primary-100'>{" "} {title3}
                    <span className='font-normal text-lg font-sans text-blue-950'>{description3}</span>
                </p>
            </div>

        </div>
    )
}

export default Technology
