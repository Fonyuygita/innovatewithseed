
import { useState, useEffect } from 'react';
// import { client } from '@/lib/contentful';
import Image from 'next/image';
import { client } from '@/lib/contentful';
import { updatePost } from '@/lib/actions/content.action';
import ShowPost from '@/components/ShowPost';
// import { updatePost } from '@/actions/updatePost';

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const response = await client.getEntries({
        content_type: 'post',
        'fields.path': params.slug,
        include: 1,
    });

    const post: any = response.items[0].fields;



    const postId = response.items[0].sys.id;

    // const [likes, setLikes] = useState<number | any>(post.likes);
    // const [viewed, setViewed] = useState<number | any>(post.viewed);

    // useEffect(() => {
    //     // Increment view count when the component mounts
    //     updatePost(postId, 'viewed').then(() => setViewed(viewed + 1));
    // }, []);

    // const handleLike = async () => {
    //     await updatePost(postId, 'likes');
    //     setLikes(likes + 1);
    // };

    return (
        <>
            <ShowPost post={post} postId={postId} />
        </>
    );
};

export default PostPage;
