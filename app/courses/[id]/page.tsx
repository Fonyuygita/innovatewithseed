"use client"

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import PlayIcon from '@/components/PlayIcon';
import { useInView } from 'react-intersection-observer';
import RegisterForm from '@/components/DynamicRegisterForm';

const lessons = [
    { id: 1, title: "Introduction to Machine Learning", description: "Overview of machine learning concepts and applications." },
    { id: 2, title: "Data Preprocessing", description: "Techniques for cleaning and preparing data for analysis." },
    { id: 3, title: "Supervised Learning", description: "Introduction to supervised learning algorithms and models." },
    { id: 4, title: "Unsupervised Learning", description: "Exploring unsupervised learning techniques and clustering." },
    { id: 5, title: "Regression Analysis", description: "Understanding regression models and their applications." },
    { id: 6, title: "Classification", description: "Techniques for classifying data and evaluating classifiers." },
    { id: 7, title: "Neural Networks", description: "Basics of neural networks and deep learning." },
    { id: 8, title: "Model Evaluation", description: "Methods for evaluating and validating machine learning models." },
    { id: 9, title: "Feature Engineering", description: "Creating and selecting features to improve model performance." },
    { id: 10, title: "Model Optimization", description: "Techniques for tuning and optimizing machine learning models." },
    { id: 11, title: "Ensemble Methods", description: "Combining multiple models to improve predictions." },
    { id: 12, title: "Deployment", description: "Deploying machine learning models to production environments." },
];


const CoursePage = () => {
    const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleLessonClick = (id: number) => {
        setSelectedLesson(selectedLesson === id ? null : id);
    };



    const handleClick = (url: string) => {
        setIsAnimating(true);
        setTimeout(() => {
            setSelectedVideo(url);
            setIsAnimating(false);
        }, 100);
    };
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const handleSubmit = (data: any) => {
        console.log('Form Data:', data);
    };

    return (
        <section className="flex flex-col items-center gap-9 min-h-screen w-full">
            <div ref={ref} className="flex flex-col md:flex-row justify-between items-center px-2 w-full ">


                <motion.div

                    className="relative cursor-pointer w-full h-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleClick("#")}
                >
                    <Image src="/services.png" alt="title" layout="responsive" width={16} height={9} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        Machine Learning
                    </div>
                    {!isAnimating && <PlayIcon />}
                    {isAnimating && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.5 }}
                            transition={{ duration: 4, ease: 'easeInOut' }}
                        >
                            <div className="w-16 h-16 border-4 border-red-700 rounded-full"></div>
                        </motion.div>
                    )}
                </motion.div>
                <div className="md:w-full p-4 mt-[8rem]">
                    <motion.h1

                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.2 }} className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-gray-800 '>Machine{" "}<span className='text-primary-100 capitalize'>Learning{" "}</span></motion.h1>
                    <div className="space-y-4 w-full">
                        {lessons.map((lesson) => (
                            <motion.div
                                key={lesson.id}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white  p-4 rounded-lg shadow-2x w-full"
                            >
                                <h2 className="text-lg text-gray-700  cursor-pointer flex gap-2" onClick={() => handleLessonClick(lesson.id)}>
                                    {lesson.id} {".  "}
                                    {lesson.title}
                                </h2>
                                {selectedLesson === lesson.id && (
                                    <div>
                                        <p className="text-gray-700">{lesson.description}</p>
                                        <button
                                            className="mt-2 text-primary-100"
                                            onClick={() => setSelectedLesson(null)}
                                        >
                                            X
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between bg-gray-300 min-h-screen w-full px-1">
                <div className="w-full h-full bg-slate-100">
                    <RegisterForm
                        onSubmit={handleSubmit}
                        formType="course"
                        buttonText="Enroll"
                        animationType="slide"
                        buttonClassName='w-[45%] text-white shadow-xl mx-auto px-4 py-2 bg-primary-100'

                    />
                </div>
                <div className="w-full h-full">
                    <Image src="/services.png" alt="ima" width={1000} height={1000} className='w-full h-full object-contain' />
                </div>
            </div>

        </section>

    );
};

export default CoursePage;
