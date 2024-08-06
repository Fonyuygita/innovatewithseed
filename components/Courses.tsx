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

const CourseDetail = ({ id }: any) => {


    return (

        <section className="w-full px-3 min-h-screen bg-gray-300">

            <h1 className='text-[1.6rem] md:text-[3.4rem] my-8 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Get Enrolled{" "}<span className='text-primary-100 capitalize'>{" "}</span>In Our{" "}<span className='text-primary-100'>Courses</span></h1>


            <div className="container gap-3 mx-auto w-full  md:w-[80%] p-4  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {courses.map(item => (
                    <Link href={`courses/${123}`} key={item.id} className="flex-col items-center flex-center md: gap-5 bg-white shadow-2xl py-4 ">
                        {/* image box */}
                        <div className="px-2 w-full h-[12rem]">
                            <Image src={item.image} alt='image her' width={500} height={500} className='w-full h-full p-2' />
                        </div>

                        <h3 className="text-gray-800">{item.title}</h3>

                        {/* brief description */}
                        <p className='text-sm w-full px-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quisquam. Ipsa deleniti labore quas totam voluptatem tempore, officiis qui. Non id ducimus ipsa?</p>



                    </Link>

                ))}



            </div>
        </section>


    );
};

export default CourseDetail;
