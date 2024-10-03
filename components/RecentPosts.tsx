"use client"
import React from 'react'
import { useTheme } from './context/ThemeContext';
import RecentPostCard from './RecentPostCard';
import { motion } from "framer-motion"
import Image from 'next/image';
interface PostCardProps {
    post: {
        title: string;
        slug: string;
        author: {
            name: string;
            picture: string;
        };
        summary: string;
        coverImage: string;
    };
}

const RecentPosts = ({ posts }: any) => {
    // Slice the posts array to get only the first two posts

    const firstTwoPosts = posts.slice(0, 2);
    const { theme } = useTheme()
    return (
        <section className={`w-full  py-[6rem] overflow-hidden h-full ${theme === 'light' ? 'text-gray-600 bg-light-200  ' : ' text-light-300 bg-gray-800'}`
        }>

            <motion.h1
                className='text-[1.6rem] md:text-[2.4rem] my-6 font-sans line-clamp-2 font-bold text-center w-[68%] mx-auto text-blue-500'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Latest News{" "}<span className='text-blue-500 capitalize'>From{" "}</span>Us{" "}<span className='text-primary-100'>& Blogs</span>
            </motion.h1>
            <div className="flex flex-col-reverse md:flex-row mt-[3rem] lg:w-[95%] mx-auto items-center justify-center gap-7 lg:px-3 min-h-full w-full px-4">

                {firstTwoPosts.map((post: { post: PostCardProps }) => (
                    // @ts-ignore
                    <RecentPostCard key={post.id} post={post} />
                ))}


                <motion.div
                    className="w-[100%] md:w-[90%] h-[16rem] md:h-[40rem] md:p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue shadow-sm md:shadow-2xl cursor-pointer p-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src="/contact.svg" alt='' width={1000} height={1000} className='object-cover w-full h-full ' />

                </motion.div>



            </div>


        </section>
    )
}

export default RecentPosts
