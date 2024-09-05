"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import Image from 'next/image';


type ProgramsProps = {
    id: number,
    title: string,
    description: string,
    image: string
}

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
    <motion.div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={program.image} alt={program.title} className="w-full h-48 object-cover" width={1000} height={500} />
        <div className="p-4">
            <h2 className="text-xl font-bold">{program.title}</h2>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <a href="#" className="mt-4 inline-flex items-center text-blue-500 hover:underline">
                Register <FaArrowRight className="ml-2" />
            </a>
        </div>
    </motion.div>
);

const ProgramsSection = () => {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filteredPrograms = programs.filter(program =>
        (filter === 'All' || program.title === filter) &&
        program.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-start gap-5 mb-4 flex-col">
                <div className="hidden md:flex items-center justify-center space-x-2">
                    {['All', 'Internships', 'Bootcamps', 'Holiday Tech Camps', 'Tech Events', 'Mentorship Programs', 'Online Courses', 'Hackathons'].map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded ${filter === category ? 'bg-primary-100 text-white' : 'bg-gray-200 text-gray-700 inline-flex'}`}
                        >
                            {category}
                        </button>
                    ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPrograms.map(program => (
                    <ProgramCard key={program.id} program={program} />
                ))}
            </div>
        </div>
    );
};

export default ProgramsSection;
