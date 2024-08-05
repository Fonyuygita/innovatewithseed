"use client"

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p1.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p2.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p1.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p2.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p1.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p2.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p1.svg' },
    { id: 1, title: 'Course 1', description: 'Description 1', image: '/services.png' },
    { id: 2, title: 'Course 2', description: 'Description 2', image: '/p2.svg' },


    // Add more courses here
];

const CourseDetail = () => {
    const router = useRouter();
    const { id } = useParams();
    console.log(id);
    const course = courses.find(course => course.id === parseInt(id as string));

    if (!course) return <p>Course not found</p>;

    return (
        <div className="container mx-auto p-4">
            <Link href="/courses">
                <a className="text-blue-500 mb-4 inline-block">Back to courses</a>
            </Link>
            <Image src={course.image} alt={course.title} width={800} height={600} className="rounded-lg" />
            <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-4">Register</button>
        </div>
    );
};

export default CourseDetail;
