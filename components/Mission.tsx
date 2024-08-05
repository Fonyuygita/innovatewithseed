import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

interface MissionProps {
    title: string;
    icon: React.ReactNode;
    description: string

}


const MissionData: MissionProps[] = [
    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },
    {
        title: "Skill Enhancement",
        icon: <FaProjectDiagram size={40} />,
        description: "We enhance our students skills , by building life projects"
    },

    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },


    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },

    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },

    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },
    {
        title: "Skill Enhancement",
        icon: <FaProjectDiagram size={40} />,
        description: "We enhance our students skills , by building life projects"
    },

    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },


    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },

    {
        title: "Skill Enhancement",
        icon: <FaComputer size={40} />,
        description: "We enhance our students skills , by building life projects"
    },
]

const Mission = () => {
    return (
        <section className="mt-[12rem] md:w-[80%] w-full mx-auto min-h-screen">
            <h1 className="heading text-gray-800 -[70%] my-4">
                Our   {' '}
                <span className="text-primary-100">Mission</span>
            </h1>


            <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5   text-gray-700  gap-5 py-4 my-6">
                {MissionData.map(item => (

                    <div className="card-wrapper h-[300px] " key={item.title}>
                        <div className="card-content flex items-center justify-center text-xs">
                            <div className="max-w-[100%] text-center flex items-center flex-col gap-4">
                                <div className="w-24 h-24  text-gray-900 rounded-full flex items-center justify-center border border-primary-100">
                                    {item.icon}
                                </div>
                                <div className="flex item-center gap-4 flex-col justify-center">

                                    <h3 className='w-full text-2xl text-gray-900'>{item.title}</h3>
                                    <p className='text-[#999] text-sm line-clamp-1'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>



        </section>
    )
}

export default Mission
