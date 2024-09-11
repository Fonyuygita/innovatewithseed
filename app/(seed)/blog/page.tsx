// import { getPosts } from '@/actions/getPosts';
import PostCard from '@/components/PostCard';
import PostCardComponent from '@/components/PostCardComponent';
import { getPosts } from '@/lib/actions/content.action';

const HomePage = async () => {
    const posts = await getPosts();
    console.log(posts)

    return (
        <>
            <PostCardComponent posts={posts} />
        </>
    );
};

export default HomePage;
