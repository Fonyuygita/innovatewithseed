"use client"

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


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

const programs: ProgramsProps[] = [
    { id: 1, title: 'Internships', description: 'Gain real-world experience.', image: '/programs/internship.png' },
    { id: 2, title: 'Bootcamps', description: 'Intensive coding bootcamps.', image: '/programs/bootcamp.png' },
    { id: 3, title: 'Holiday Tech Camps', description: 'Fun and educational tech camps.', image: '/programs/seed.png' },
    { id: 4, title: 'Tech Events', description: 'Networking and learning events.', image: '/programs/card2.png' },
    { id: 5, title: 'Mentorship Programs', description: 'Guidance from industry professionals.', image: '/programs/seed.png' },
    { id: 6, title: 'Online Courses', description: 'Learn at your own pace.', image: '/programs/internship.png' },
    { id: 7, title: 'Hackathons', description: 'Competitive coding events.', image: '/programs/bootcamp.png' },
];

const ProgramCard = ({ program }: any) => (

    <motion.div className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden">
        <Image src={program.image} alt={program.title} className="w-full h-48 object-cover" width={1000} height={500} />
        <div className="p-4">
            <h2 className="text-xl font-bold font-medium">{program.title}</h2>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <Link href="/register" className="mt-4 inline-flex items-center text-blue-500 hover:underline">
                Register <FaArrowRight className="ml-2" />
            </Link>
        </div>
    </motion.div>
);



const slideRight = (element: any) => {
    element.scrollLeft += 200;
}
const slideLeft = (element: any) => {
    element.scrollLeft -= 200;
}

const ProgramsSection = () => {
    const elementRef = useRef(null);

    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredPrograms, setFilteredPrograms] = useState<any | []>([]);


    const filteredProgram = programs.filter(program =>
        (filter === 'All' || program.title === filter) &&
        program.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            setLoading(false);
            // Set your actual data here
            setFilteredPrograms(filteredProgram)



        }, 3000);
    }, []);


    const handleScroll = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Update your data based on scroll
        }, 3000);
    };

    return (
        <div className="container mx-auto p-4 " onScroll={handleScroll}>
            <div className="flex justify-center items-center gap-5 flex-col">

                <div className="flex justify-center items-center gap-5 mb-4  w-full">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        onClick={() => slideLeft(elementRef.current)}
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-8 h-8 bg-blue-500 cursor-pointer p-1 rounded-full text-white  rotate-180">
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <div className="text-gray-200 body-text no-scrollbar flex w-full max-w-full gap-2  py-2 sm:max-w-2xl overflow-scroll overflow-x-auto scrollbar-hide scroll-smooth " ref={elementRef}>

                        {['All', 'Internships', 'Bootcamps', 'Q&A', 'Events', 'Mentorship', 'Courses', 'Hackathons'].map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-1 items-center justify-center inline-flex rounded ${filter === category ? 'bg-primary-100 text-white' : 'bg-gray-200 text-gray-700 '}`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        onClick={() => slideRight(elementRef.current)}
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-8 h-8 bg-blue-500 cursor-pointer p-1 rounded-full text-white">
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="flex flex-center justify-between gap-3 mt-[-12px]">


                    </span>

                </div>

                <div className="relative my-5 flex items-center justify-between px-4 bg-gray-100 border border-primary-100 rounded-md">
                    <input
                        type="text"
                        placeholder="Search programs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-8 py-2 rounded bg-gray-100 border-none focus:outline-none"
                    />
                    <FaSearch className=" text-primary-100" />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                ) : (
                    filteredProgram.map((program: any) => (
                        <ProgramCard key={program.id} program={program} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProgramsSection;