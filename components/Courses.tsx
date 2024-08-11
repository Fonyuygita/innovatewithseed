"use client"

// import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


const courses = [
    { id: 1, title: 'Introduction to Cybersecurity', description: 'Learn the basics of cybersecurity, including how to protect systems and data from cyber threats.', image: '/services.png' },
    { id: 2, title: 'Data Science Fundamentals', description: 'Explore the foundational concepts of data science, including data analysis, visualization, and machine learning.', image: '/p1.svg' },
    { id: 3, title: 'Web Development Bootcamp', description: 'A comprehensive course covering HTML, CSS, JavaScript, and modern web development frameworks.', image: '/p2.svg' },
    { id: 4, title: 'Cloud Computing with AWS', description: 'Understand the core services and architecture of Amazon Web Services (AWS) for cloud computing.', image: '/services.png' },
    { id: 5, title: 'Machine Learning with Python', description: 'Dive into machine learning algorithms and techniques using Python programming.', image: '/p1.svg' },
    { id: 6, title: 'Blockchain Technology', description: 'Learn about blockchain technology, its applications, and how to develop blockchain-based solutions.', image: '/p2.svg' },
    { id: 7, title: 'Mobile App Development with React Native', description: 'Build cross-platform mobile applications using React Native and JavaScript.', image: '/services.png' },
    { id: 8, title: 'Artificial Intelligence for Beginners', description: 'An introductory course on artificial intelligence, covering basic concepts and applications.', image: '/p1.svg' },
    { id: 9, title: 'DevOps Essentials', description: 'Learn the principles and practices of DevOps to improve collaboration and productivity in software development.', image: '/p2.svg' },
    { id: 10, title: 'Internet of Things (IoT)', description: 'Explore the world of IoT, including device connectivity, data collection, and real-world applications.', image: '/services.png' },
    { id: 11, title: 'Advanced JavaScript', description: 'Deepen your understanding of JavaScript with advanced concepts and techniques.', image: '/p1.svg' },
    { id: 12, title: 'Big Data Analytics', description: 'Learn how to process and analyze large datasets using big data technologies.', image: '/p2.svg' },
    { id: 13, title: 'UX/UI Design Principles', description: 'Understand the fundamentals of user experience (UX) and user interface (UI) design.', image: '/services.png' },
    { id: 14, title: 'Cybersecurity Threats and Defense', description: 'Study various cybersecurity threats and learn how to defend against them.', image: '/p1.svg' },
    { id: 15, title: 'Full-Stack Development', description: 'Become a full-stack developer by learning both front-end and back-end technologies.', image: '/p2.svg' },
    { id: 16, title: 'Data Visualization with D3.js', description: 'Create interactive data visualizations using the D3.js library.', image: '/services.png' },
    { id: 17, title: 'Introduction to Quantum Computing', description: 'Learn the basics of quantum computing and its potential applications.', image: '/p1.svg' },
    { id: 18, title: 'Software Testing and Quality Assurance', description: 'Understand the principles of software testing and quality assurance practices.', image: '/p2.svg' },
    { id: 19, title: 'Ethical Hacking', description: 'Learn ethical hacking techniques to identify and fix security vulnerabilities.', image: '/services.png' },
    { id: 20, title: 'Augmented Reality Development', description: 'Explore the development of augmented reality applications and experiences.', image: '/p1.svg' },
    { id: 21, title: 'Introduction to Robotics', description: 'Learn the basics of robotics, including design, programming, and control.', image: '/p2.svg' },
    { id: 22, title: 'Digital Marketing Strategies', description: 'Understand the key strategies and tools for effective digital marketing.', image: '/services.png' },
    { id: 23, title: 'Cloud Security', description: 'Learn how to secure cloud environments and protect data in the cloud.', image: '/p1.svg' },
    { id: 24, title: 'Natural Language Processing', description: 'Explore the field of natural language processing and its applications.', image: '/p2.svg' },
    { id: 25, title: 'Introduction to Data Mining', description: 'Learn the techniques and tools used for data mining and knowledge discovery.', image: '/services.png' },
    { id: 26, title: 'Game Development with Unity', description: 'Create interactive games using the Unity game development platform.', image: '/p1.svg' },
    { id: 27, title: 'Introduction to Cryptography', description: 'Understand the principles of cryptography and its applications in security.', image: '/p2.svg' },
    { id: 28, title: 'Digital Transformation', description: 'Learn how to leverage technology to drive digital transformation in organizations.', image: '/services.png' },
    { id: 29, title: 'Introduction to Artificial Neural Networks', description: 'Study the basics of artificial neural networks and their applications.', image: '/p1.svg' },
    { id: 30, title: 'Project Management for IT', description: 'Learn the principles of project management specifically for IT projects.', image: '/p2.svg' },
];

const CourseDetail = ({ id }: any) => {


    return (

        <section className="w-full px-3 min-h-screen bg-gray-300">

            <h1 className='text-[1.6rem] md:text-[3.4rem] my-8 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Get Enrolled{" "}<span className='text-primary-100 capitalize'>{" "}</span>In Our{" "}<span className='text-primary-100'>Courses</span></h1>


            <div className="container gap-3 mx-auto w-full  md:w-[80%] p-4  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((item, index) => (

                    <Link href={`courses/${123}`} key={item.id} className="flex-col items-start flex-center md: gap-5 bg-white shadow-2xl py-4 ">
                        {/* image box */}
                        <div className="px-2 w-full h-[12rem]">
                            <Image src={item.image} alt='image her' width={500} height={500} className='w-full h-full p-2' />
                        </div>

                        <h3 className="text-gray-800">{item.title}</h3>

                        {/* brief description */}
                        <p className='text-sm w-full px-2 text-gray-700'>{item.description}</p>

                        <button className="text-gray-800 flex flex-between items-center gap-3">
                            <span>Enrol</span>
                            <FaArrowRight className='text-primary-100' />

                        </button>

                    </Link>

                ))}



            </div>
        </section>


    );
};

export default CourseDetail;
