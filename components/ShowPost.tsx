"use client"
/* @ts-ignore */

import { updatePost } from '@/lib/actions/content.action';
import Image from 'next/image';
// import { Image } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types';
import { FaThumbsUp, FaBell, FaEye, FaMoon, FaSun } from 'react-icons/fa';
type NodeRenderer = (node: Block | Inline, children: React.ReactNode) => React.ReactNode;

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
            // Check if the paragraph contains code
            const isCodeBlock = node.content.some((child) => child.nodeType === 'text' && child.marks.some((mark) => mark.type === 'code'));
            return isCodeBlock ? (
                <pre className=" text-gray-500 shadow-xl p-4 rounded-lg overflow-x-auto my-4 md:w-[90%] w-full bg-light-200">
                    <code>{children}</code>
                </pre>
            ) : (
                <p className="mb-4 text-gray-700 line-clamp-9">{children}</p>
            );
        },
        [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
            <h1 className="md:text-4xl text-2xl font-bold text-primary-100 mb-6">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">{children}</h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
            const { file, title } = node.data.target.fields;
            return (
                <div className="my-4">
                    <Image
                        src={`https:${file.url}`}
                        alt={title}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            );
        },
        [INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
            <a
                href={node.data.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
            >
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block) => {
            const { __typename, fields } = node.data.target;
            if (__typename === 'Video') {
                return (
                    <div className="my-4">
                        <h2 className="md:text-xl text-lg font-bold mb-2">{fields.title}</h2>
                        <video controls className="w-full rounded-lg shadow-md">
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
        <div className="md:w-[70%] w-[96%] min-h-screen mx-auto mt-[5rem] bg-[#e0dddd] px-3 shadow-2xl">
            <Image
                src={`https:${post.coverImage.fields.file.url}`} // Ensure the URL is absolute
                alt={post.title}
                width={500}
                height={300}
                className='md:w-full md:h-[540px] object-cover mt-[8rem] pt-3 h-[300px]'
            />
            <h1 className='w-full text-3xl text-gray-700 my-3'>{post.title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.content[0] }} /> */}
            {/* <MarkdownRenderer content={post.content.content[0].value} />
             */}

            <div className=' w-full py-3 my-4 flex flex-col gap-4'>{documentToReactComponents(post.content, options)}</div>;
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
                    <button onClick={handleLike}><FaThumbsUp className='text-primary-100 text-xl w-full' /> <span>{likes}</span></button>
                    <button><FaEye /> <span>{viewed}</span></button>
                </div>
            </div>
        </div>
    )
}

export default ShowPost
