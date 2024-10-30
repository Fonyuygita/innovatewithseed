"use client"































import React from 'react'
import { useTheme } from './context/ThemeContext';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';

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


const RecentPostCard: React.FC<PostCardProps> = ({ post }) => {
    const { theme } = useTheme()
    return (

        <>


            {/* left hand side for articles */}
            <div className={`flex flex-col gap-5 w-full md:w-1/3   ${theme === 'light' ? 'text-gray-600   ' : ' text-light-300 '}`} id='news'>
                <Link href={`/blog/${post.slug}`}>
                    <motion.div
                        className={` ${theme === 'light' ? 'text-gray-600 bg-gray-200  ' : ' text-light-300 bg-gray-900'} rounded-2xl shadow-2xl flex flex-col px-5 min-w-full h-[21rem] items-center gap-4 cursor-pointer text-center`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src={`https:${post.coverImage}`} alt='blog1' width={300} height={200} className='w-full px-[2px] h-[10rem] object-contain my-3' />
                        <motion.h3
                            className="text-primary-100 w-full px-3 line-clamp-1 md:text-lg xl:text-lg sm:text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {post.title}
                        </motion.h3>

                        <p className="line-clamp-1 text-sm ">{post.summary}</p>
                        {/* <div className="flex items-center mt-4 ">
                            <Image
                                src={`https:${post.author.picture}`}
                                alt={post.author.name}
                                width={40}
                                height={40}
                                className="rounded-full h-8 w-8"
                            />
                           
                           
                        </div> */}
                    </motion.div>
                </Link>

            </div>
            {/* right hand side for picture */}

        </>

    )
}

export default RecentPostCard
