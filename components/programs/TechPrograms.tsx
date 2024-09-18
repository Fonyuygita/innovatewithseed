"use client"

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { MyPrograms } from '@/constants';
// import { MyPrograms } from '@/constants';


type ProgramsProps = {
    id: number,
    title: string,
    description: string,
    image: string
}

const SkeletonCard = () => (
    <div className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
    </div>
);



const ProgramCard = ({ program, theme }: any) => (



    <motion.div className={` cursor-pointer shadow-xl rounded-lg overflow-hidden p-3  ${theme === 'light' ? "bg-gray-100" : "bg-gray-900"}`}>
        <Image src={program.image} alt={program.title} className="w-full h-48 object-cover" width={1000} height={500} />
        <div className="p-4">
            <h2 className="text-sm  font-medium">{program.title}</h2>
            <p className="mt-2 text-gray-600 text-[11px]">{program.description}</p>
            <Link href="/student/123/register" className="mt-4 inline-flex items-center text-primary-100 hover:underline">
                Register <FaArrowRight className="ml-2" />
            </Link>
        </div>
    </motion.div>
);



const slideRight = (element: any) => {
}
const slideLeft = (element: any) => {
    element.scrollLeft -= 200;
}

const ProgramsSection = ({ theme }: { theme: 'dark' | 'light' }) => {
    const elementRef = useRef(null);

    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | boolean>(false);

    const [filteredPrograms, setFilteredPrograms] = useState<any | []>([]);


    const filteredProgram = MyPrograms.filter(program =>
        (filter === 'All' || program.title.split(" ").includes(filter)) &&
        program.title.toLowerCase().includes(search.toLowerCase())
    );


    if (!filteredProgram) {
        setError(error)
    }


    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            setLoading(false);
            // Set your actual data here
            setFilteredPrograms(filteredProgram)



        }, 3000);
    }, []);

    if (!filteredPrograms) {
        setError(true)
        console.log("No program found")
    }
    const handleScroll = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Update your data based on scroll
            // setFilteredPrograms(filteredProgram)

        }, 3000);
    };




    return (
        <div className="container mx-auto p-4 " onScroll={handleScroll}>
            <div className="flex justify-center items-center gap-5 flex-col">

                <div className="flex justify-center items-center gap-2 mb-4  w-full">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        onClick={() => slideLeft(elementRef.current)}
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-8 h-8 md:bg-primary-100 cursor-pointer p-1 rounded-full md:text-white text-2xl font-extrabold text-primary-100  rotate-180">
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <div className="text-gray-200 body-text no-scrollbar flex w-full max-w-full gap-2  py-2 sm:max-w-2xl overflow-scroll overflow-x-auto scrollbar-hide scroll-smooth " ref={elementRef}>

                        {['All', 'Internship', 'Bootcamp', 'Q&A', 'Events', 'Mentorship', 'Courses', 'Hackathons'].map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-1 items-center justify-center inline-flex rounded ${filter === category ? 'bg-primary-100 text-white' : 'bg-gray-200 text-gray-700 '}  ${theme === 'light' ? "bg-gray-200" : "bg-gray-900"}`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideRight(elementRef.current)}
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-8 h-8 md:bg-primary-100  cursor-pointer p-1 rounded-full md:text-white text-primary-100 text-2xl">
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="flex flex-center justify-between gap-3 mt-[-12px]">


                    </span>

                </div>

                <div className={`relative my-5 flex items-center justify-between px-2  border border-primary-100 rounded-md  ${theme === 'light' ? "bg-gray-100" : "bg-gray-900"}`}>
                    <input
                        type="text"
                        placeholder="Search programs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`px-8 py-2 rounded-lg  border-none focus:outline-none ${theme === 'light' ? "bg-gray-100" : "bg-gray-900"}`}
                    />
                    <FaSearch className=" text-primary-100 " />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : (
                    filteredProgram.map((program: any) => (
                        <ProgramCard key={program.id} program={program} theme={theme} />
                    ))
                )}
            </div>

            {error && (<p className='text-red-700 bg-red-800'>Error occurred while searching</p>)}
        </div>
    );
};

export default ProgramsSection;
