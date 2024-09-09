"use client"
/* @ts-ignore */

import { updatePost } from '@/lib/actions/content.action';
import Image from 'next/image';
// import { Image } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types';

type NodeRenderer = (node: Block | Inline, children: React.ReactNode) => React.ReactNode;

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => <p>{children}</p>,
        [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => <h1 className='text-red-800  '>{children}</h1>,
        [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => <h2>{children}</h2>,
        [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
            const { file, title } = node.data.target.fields;
            return <Image src={`https:${file.url!}`} alt={title} width={300} height={300} />;
        },
        [INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
            <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block) => {
            const { __typename, fields } = node.data.target;
            if (__typename === 'Video') {
                return (
                    <div>
                        <h2>{fields.title}</h2>
                        <video controls>
                            <source src={fields.videoUrl} type="video/mp4" />
                        </video>
                    </div>
                );
            }
            return null;
        },
    } as Record<string, NodeRenderer>,
};

const ShowPost = ({ post, postId }: { post: any; postId: string }) => {
    const [likes, setLikes] = useState<number | any>(post.likes);
    const [viewed, setViewed] = useState<number | any>(post.viewed);

    useEffect(() => {
        // Increment view count when the component mounts
        updatePost(postId, 'viewed').then(() => setViewed(viewed + 1));
    }, []);

    const handleLike = async () => {
        await updatePost(postId, 'likes');
        setLikes(parseInt(likes + 1));
    };
    return (
        <div className="w-[70%] min-h-screen mx-auto ">
            <Image
                src={`https:${post.coverImage.fields.file.url}`} // Ensure the URL is absolute
                alt={post.title}
                width={500}
                height={300}
                className='w-full h-[440px]'
            />
            <h1 className='w-full text-3xl text-gray-700 my-3'>{post.title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.content[0] }} /> */}
            {/* <MarkdownRenderer content={post.content.content[0].value} />
             */}

            <div className='w-full py-3 my-4 flex flex-col gap-4'>{documentToReactComponents(post.content, options)}</div>;
            {/* <p>{postcontent.content[0].value}</p> */}
            <p>Published on: {new Date(post.author.sys?.createdAt).toLocaleDateString()}</p>
            <div className="author">
                {/* <Image
                    src={`https:${post.author.fields.picture.file}`} // Ensure the URL is absolute
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                /> */}
                <div className="flex space-x-4">
                    <button onClick={handleLike}>👍 {likes}</button>
                    <button>👁️ {viewed}</button>
                </div>
            </div>
        </div>
    )
}

export default ShowPost
