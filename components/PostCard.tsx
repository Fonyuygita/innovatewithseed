import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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
    return (
        <div className="bg-light-200 p-4  rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
                src={`https:${post.coverImage}`} // Ensure the URL is absolute
                alt={post.title}
                width={500}
                height={300}
                className="rounded-t-lg w-full h-[200px] object-fit"
            />
            <h2 className="text-primary-100 text-xl font-bold mt-4">{post.title}</h2>
            <p className="line-clamp-1 text-sm text-gray-800">{post.summary}</p>
            <div className="flex items-center mt-4 ">
                <Image
                    src={`https:${post.author.picture}`} // Ensure the URL is absolute
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                />
                <span className="text-gray-900 font-bold ml-2">{post.author.name}</span>
            </div>
            <Link className="flex items-center gap-2 mt-4 text-blue-500 hover:text-blue-700 transition duration-300" href={`/blog/${post.slug}`}>

                <span>Read more</span>
                <FaArrowRight />

            </Link>
        </div>

    );
};

export default PostCard;
