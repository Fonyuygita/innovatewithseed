// import { getPosts } from '@/actions/getPosts';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/actions/content.action';

const HomePage = async () => {
    const posts = await getPosts();
    console.log(posts)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
