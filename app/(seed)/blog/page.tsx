// import { getPosts } from '@/actions/getPosts';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/actions/content.action';

const HomePage = async () => {
    const posts = await getPosts();
    console.log(posts)

    return (
        <div className="w-[87%] mx-auto min-h-screen mt-[7rem]">
            <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">
                    [Learn Coding] With [SEED] Resources
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full mt-3rem">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
