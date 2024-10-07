"use client"
/* @ts-ignore */

import { updatePost } from '@/lib/actions/content.action';
import Image from 'next/image';
// import { Image } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types';
import { FaThumbsUp, FaBell, FaEye, FaMoon, FaSun, FaHeart } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';
type NodeRenderer = (node: Block | Inline, children: React.ReactNode) => React.ReactNode;



const ShowPost = ({ post, postId }: { post: any; postId: string }) => {
    const [likes, setLikes] = useState<number | any>(post.likes);
    const [viewed, setViewed] = useState<number | any>(post.viewed);
    const [clicked, setClicked] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        // Increment view count when the component mounts
        updatePost(postId, 'viewed').then(() => setViewed(viewed + 1));
    }, []);

    const handleLike = async () => {
        await updatePost(postId, 'likes');
        setLikes(parseInt(likes + 1));
        setClicked(!clicked)
    };




    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
                // Check if the paragraph contains code
                const isCodeBlock = node.content.some((child) => child.nodeType === 'text' && child.marks.some((mark) => mark.type === 'code'));
                return isCodeBlock ? (
                    <pre className={`text-gray-500 shadow-xl p-4 rounded-lg overflow-x-auto my-4 md:w-[90%] w-full  ${theme === 'light' ? "text-gray-900 bg-light-300" : "bg-gray-950 text-yellow-500"}`}>
                        <code>{children}</code>
                    </pre>
                ) : (
                    <p className={`mb-4 text-gray-700 line-clamp-9 w-[100%] ${theme === 'light' ? "text-gray-700" : " text-light-300"}`}>{children}</p>
                );
            },
            [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
                <h1 className="md:text-4xl text-2xl font-bold text-blue-500 mb-6">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
                <h2 className="text-3xl font-semibold text-blue-500 mb-4">{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => (
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">{children}</h2>
            ),

            [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => (
                <h2 className="text-xl font-semibold text-blue-500 mb-4">{children}</h2>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
                const { file, title } = node.data.target.fields;
                return (
                    <div className="mx-auto w-[100%]">
                        <Image
                            src={`https:${file.url}`}
                            alt={title}
                            width={500}
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


    return (
        <div className={`w-full min-h-screen   py-[5rem]  ${theme === 'light' ? "bg-[#e0dddd] text-gray-700" : "bg-gray-900 text-light-300"}`}>
            <div className={`md:w-[70%] w-[96%] h-full  mx-auto px-5 py-2 shadow-2xl ${theme === 'light' ? "bg-[#e0dddd] text-gray-700" : " text-light-300"} `}>
                <Image
                    src={`https:${post.coverImage.fields.file.url}`} // Ensure the URL is absolute
                    alt={post.title}
                    width={500}
                    height={300}
                    className='md:w-full md:h-[540px] object-cover mt-[8rem] pt-3 h-[300px]'
                />
                <h1 className='w-full text-3xl font-extrabold my-3'>{post.title}</h1>
                {/* <div dangerouslySetInnerHTML={{ __html: post.content.content[0] }} /> */}
                {/* <MarkdownRenderer content={post.content.content[0].value} />
             */}

                <div className=' w-full py-3 my-4 flex flex-col gap-4'>{documentToReactComponents(post.content, options)}</div>
                {/* <p>{postcontent.content[0].value}</p> */}

                <div className="flex space-x-4">
                    <button onClick={handleLike}><FaHeart className={`${clicked ? "text-red-700" : "border-none-"}`} /> <span>{likes}</span></button>
                    <button><FaEye /> <span>{viewed}</span></button>
                </div>
                <p className='text-light-200 w-fit my-4 bg-blue-500 p-2'>Published on: {new Date(post.author.sys?.createdAt).toLocaleDateString()}</p>
                <div className="author">
                    {/* <Image
                    src={`https:${post.author.fields.picture.file}`} // Ensure the URL is absolute
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className="rounded-full object-contain"
                /> */}

                </div>
            </div>
        </div>
    )
}

export default ShowPost
