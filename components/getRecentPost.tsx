
import { getPosts } from '@/lib/actions/content.action';
import React from 'react'
// import RecentPostCard from './RecentPostCard';
import RecentPosts from './RecentPosts';

const GetRecentBlogs = async () => {
    const posts = await getPosts();
    return (
        <RecentPosts post={posts} />
    )
}

export default GetRecentBlogs
