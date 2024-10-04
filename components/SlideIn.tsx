
import LatestNewsClient from './LatestNewsClient';
import { getPosts } from '@/lib/actions/content.action';
import RecentPosts from './RecentPosts';

const SlidingPanel = async () => {
    const posts = await getPosts()



    return (
        <>
            <LatestNewsClient>

                <RecentPosts posts={posts} />
            </LatestNewsClient>
        </>
    );
};

export default SlidingPanel;
