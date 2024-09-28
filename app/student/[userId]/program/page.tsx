"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/BigVideo';
import { FaArrowRight, FaCode, FaPython } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { programsData } from '@/constants/programsData';
import { useTheme } from '@/components/context/ThemeContext';
import EmptyError from '@/components/EmptyError';

// const programs = [
//     {
//         id: '1',
//         name: 'Bootcamp',
//         videoUrl: 'https://www.youtube.com/embed/mGuFN2FlLCU',
//         description: 'An intensive program to get you job-ready.',
//         outcomes: 'You will learn full-stack development.',
//         structure: [
//             {
//                 level: 'Beginner',
//                 details: ['HTML & CSS', 'JavaScript Basics', 'Version Control', 'Responsive Design', 'Basic Algorithms', 'Project 1'],
//             },
//             {
//                 level: 'Intermediate',
//                 details: ['Advanced JavaScript', 'APIs', 'Node.js', 'Express.js', 'Database Management', 'Project 2'],
//             },
//             {
//                 level: 'Advanced',
//                 details: ['React.js', 'Next.js', 'TypeScript', 'Testing', 'Deployment', 'Final Project'],
//             },
//         ],
//         requirements: 'Basic understanding of programming.',
//     },
//     // Add more programs as needed
// ];

const ProgramPage = ({ searchParams }: any) => {
    const router = useRouter();
    // const { programId } = router.query;
    // const searchParam = useSearchParams()
    const { theme } = useTheme()
    console.log(searchParams)
    const program = programsData.find((p) => p.id === searchParams.id!);

    const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

    if (!program) return (

        < >
            <EmptyError title='Program not yet available' subTitle='Please be patient programs are still loading, keep calm until we upload more' className='w-full h-screen' image='/empty.png' />
        </ >

    )
    return (
        <>
            <Navbar />

            <div className={`w-full py-[5rem] px-8 p-4 flex min-h-screen items-center justify-center ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-950 text-light-200"}`}>
                <div className="flex items-center justify-between gap-4 w-full h-full md:flex-row flex-col">
                    <div className="flex flex-col md:gap-6 gap-8 items-start md:w-1/2 md:px-4 max-h-full w-full ">
                        <div className="w-full my-4">
                            <VideoCard
                                title={program.name}
                                url={program.videoUrl}
                                thumbnail="/vid/vid3.png"
                                className=''

                            />
                        </div>
                        <div className="my-6">
                            <h2 className="flex items-center gap-3 text-2xl  text-blue-500">{program.name}
                                <span>
                                    <FaCode className='text-primary-100' />
                                </span>
                            </h2>
                            <p className='text-sm my-2'>{program.description}</p>
                            <h3 className="mt-4 text-primary-100">Outcomes:</h3>
                            <p className='my-2'>{program.outcomes}</p>
                            <p className='my-2'>Problem solver</p>
                            <p className='my-2'>Big picture thinker</p>
                            <p>Team collaboration</p>



                        </div>
                        <div className="w-full h-[1px] bg-primary-100"></div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full h-full gap-4 flex-1">
                        <h3 className="text-xl text-blue-500 font-bold">Course <span className='text-primary-100'>Structure</span></h3>
                        {program.structure.map((level, index) => (
                            <div key={index} className={`mt-4 w-full ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-900 text-light-200 my-3"}`}>
                                <motion.div
                                    initial={false}
                                    animate={{ height: expandedLevel === level.level ? 'auto' : '3rem' }}
                                    className="overflow-hidden"
                                >
                                    <div
                                        className={`cursor-pointer  p-2 rounded ${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-950 text-light-200"} font-sans`}
                                        onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
                                    >
                                        <h4 className="md:text-lg text-sm font-sans flex  items-center gap-3">
                                            <span className='text-blue-500'>{index + 1}</span>
                                            {level.level}
                                            <span>
                                                <FaPython className='text-primary-100' />
                                            </span>
                                        </h4>
                                    </div>
                                    <div className="pl-4">
                                        {level.details.map((detail, idx) => (
                                            <p key={idx} className={`mt-2 border-b border-gray-500 my-5 flex items-center gap-2 md:shadow-2xl shadow-lg ${theme === "light" ? "bg-light-300" : "bg-gray-900"}`}>
                                                <FaArrowRight className='text-primary-100' />
                                                <span>{detail} </span>

                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}

                        <div className="flex md:flex-row flex-col md:items-center items-start  justify-between w-full md:px-2">

                            <div className="mt-8">
                                <h3 className="text-xl font-sans text-blue-500">Requirements</h3>
                                <p className="my-3 text-sm">{program.requirements}</p>
                                <p className="my-3 text-sm">{program.requirements}</p>
                                <p className="my-3 text-sm">{program.requirements}</p>

                            </div>

                            {/* instructor */}
                            <div className="flex items-center gap-5 my-4">
                                <h4 className='text-blue-500'>Instructor <span className="text-primary-100">Eng {program.tutor?.name}</span></h4>
                                <Link href="https://fonyuygita.vercel.app">
                                    <Image src={program.tutor?.picture!} width={30} height={30} className='rounded-full'
                                        alt='tutor' />
                                </Link>

                            </div>

                        </div>
                    </div>

                    <div className="md:hidden flex flex-col items-start w-full gap-4">
                        <div className="w-full h-[0.6px] bg-primary-100"></div>

                        <div className="flex items-start justify-between gap-5 text-sm">
                            <p>@copyright Seed 2024</p>
                            <p>All right reserved</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default ProgramPage;
