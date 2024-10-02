

import HomeComponents from "@/components/homeComponents";
import RecentPosts from "@/components/RecentPosts";
import { getPosts } from "@/lib/actions/content.action";


export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <HomeComponents>
        <RecentPosts posts={posts} />
      </HomeComponents>
    </>
  );
}
