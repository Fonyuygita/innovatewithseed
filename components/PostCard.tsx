"use client"

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';

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

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { theme } = useTheme()
    return (
        <div className={` p-4  rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-2xl ${theme === 'light' ? "bg-light-200 " : "bg-gray-900 text-light-300"}`}>
            <Image
                src={`https:${post.coverImage}`} // Ensure the URL is absolute
                alt={post.title}
                width={500}
                height={300}
                className="rounded-t-lg w-full h-[200px] object-fit"
            />
            <h2 className="text-primary-100 md:text-xl text-lg line-clamp-1 font-bold mt-4">{post.title}</h2>
            <p className="line-clamp-1 text-sm ">{post.summary}</p>
            <div className="flex items-center mt-4 ">
                <Image
                    src={`https:${post.author.picture}`}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                />
                <span className={` font-bold ml-2 text-sm`}>{post.author.name}</span>
            </div>
            <Link className={`flex items-center gap-2 mt-4 text-blue-500 hover:text-blue-700 transition duration-300`} href={`/blog/${post.slug}`}>

                <span>Read more</span>
                <FaArrowRight />

            </Link>
        </div>

    );
};

export default PostCard;
