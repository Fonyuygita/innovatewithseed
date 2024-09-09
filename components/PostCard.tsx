import Image from 'next/image';
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

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="bg-red-800 p-4 w-[340px] h-[450px]">
            <Image
                src={`https:${post.coverImage}`} // Ensure the URL is absolute
                alt={post.title}
                width={500}
                height={300}
            />
            <h2>{post.title}</h2>
            <p className="line-clamp-1 text-sm">{post.summary}</p>
            <div className="author">
                <Image
                    src={`https:${post.author.picture}`} // Ensure the URL is absolute
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                />
                <span>{post.author.name}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
                Read more
            </Link>
        </div>
    );
};

export default PostCard;
