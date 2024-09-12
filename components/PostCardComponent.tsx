"use client"

import React from 'react'
import PostCard from './PostCard'
import { useTheme } from './context/ThemeContext';
import { useUser } from '@clerk/nextjs';

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

const PostCardComponent = ({ posts }: any) => {
    const { theme } = useTheme()
    const { isLoaded, isSignedIn, user } = useUser();
    return (
        <section className={`w-full  mx-auto min-h-screen pb-[5rem] ${theme === 'light' ? "bg-light-200 " : "bg-[#10151D] text-light-300"}`}>
            <div className="w-[87%] h-full mt-[4rem] mx-auto mb-[3rem] pt-[4rem]">
                <div className="flex-center relative min-h-[300px] w-full flex-col rounded-xl bg-blog bg-cover bg-center text-center">
                    <h1 className="heading1 md:heading2  mb-6 text-center text-white ">
                        {`[WELCOME] To Our Blog`}{" "}
                        <span className='font-bold text-primary-100'>
                            {user?.firstName}
                        </span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-[5rem]">
                    {posts.map((post: { post: PostCardProps }) => (
                        // @ts-ignore
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PostCardComponent
