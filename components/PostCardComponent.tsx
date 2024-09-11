import React from 'react'
import PostCard from './PostCard'

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
    return (
        <div className={`w-[87%] mx-auto min-h-screen mt-[7rem] `}>
            <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">
                    [Learn Coding] With [SEED] Resources
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full mt-3rem">
                {posts.map((post: { post: PostCardProps }) => (
                    // @ts-ignore
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostCardComponent
