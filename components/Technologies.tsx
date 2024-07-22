import React from 'react'
import Technology from './Technology'

const Technologies = () => {
    return (
        <section className="w-full bg-light-300  py-[3rem] overflow-hidden">
            <h1 className='text-[3.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-600 '>Empower Your <span className='text-primary-100 capitalize'>Creativity</span> with us & grow with new <span className='text-primary-100'>Technology</span></h1>
            <div className='flex items-center justify-center gap-[1rem] flex-col'>
                <Technology
                    title='Artificial Intelligence'
                    image='/p4.svg'
                    description1='Get in to the world of ai and Explore'
                    description2='Get in to the world of ai and Explore'
                    description3='Get in to the world of ai and Explore'
                    title1='Deep Learning'
                    title2='Machine Learning'
                    title3='Neural Network'


                />

                <Technology
                    title='Computer Programming'
                    image='/p3.svg'
                    description1='Web development'
                    description2='Dynamic Programming'
                    description3='Data Structure And Algorithm'
                    title1="web vitals "
                    title2="Dynamic"
                    title3='DSA'


                />

                <Technology
                    title='Cyber Security'
                    image='/p1.svg'
                    description1='Hacking'
                    description2='Securing Data'
                    description3='Securing Account'
                    title1='Hack '
                    title2='Data'
                    title3='Account'


                />


            </div>

        </section>
    )
}

export default Technologies
