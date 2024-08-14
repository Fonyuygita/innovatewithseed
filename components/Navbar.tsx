"use client"

import { motion } from "framer-motion"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

type MenuLink = {
    title: string;
    url: string;
};

const menuLinks: MenuLink[] = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Blog', url: '/blog' },

    { title: 'Gallery', url: '/gallery' },
];

const topVariant = {
    closed: {
        rotate: 0

    },

    open: {
        rotate: 45,
        backgroundColor: "bg-primary-100",
    }
}


const centerVariant = {
    closed: {
        opacity: 1

    },

    open: {
        opacity: 0

    }
}


const bottomVariant = {
    closed: {
        rotate: 0

    },

    open: {
        rotate: -45,
        backgroundColor: "bg-primary-100",
    }
}

const listVariants = {
    closed: {
        x: "100vw"
    },
    open: {
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
}

const listItemVariants = {
    closed: {

        x: -10,
        opacity: 0
    },

    open: {
        x: 0,
        opacity: 1,
    }
}



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    const { userId } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();





    return (
        <div className='bg-gray-200 w-[100%] mr-auto ml-auto px-[5%] h-[90px] fixed top-0 left-0 z-30 md:110px'>
            <nav className='flex justify-between items-center p-2 h-full flex-row-reverse'>

                <div className="lg:hidden  flex items-center justify-center`">
                    {isSignedIn ? (
                        <Link href="/">
                            <UserButton afterSignOutUrl="/" />
                        </Link>
                    ) :

                        (

                            <Link href="/sign-in" className='md:text-lg text-[12px] py-2  items-center justify-center outline-none rounded-md  bg-primary-100 text-white flex  px-3  hover:scale-110  transition p-2'>Academics</Link>


                        )
                    }
                </div>


                <Link href="/" className='  rounded-full '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain md:flex hidden'
                    />
                </Link>

                <Link href="/" className='rounded-full bg-gray-200  absolute bottom-[-28px] left-[41%] md:hidden  border border-primary-100 w-12 h-12 flex items-center justify-center'>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain'
                    />
                </Link>


                {/* Menu links here */}
                <div className="hidden lg:flex gap-2 items-center">
                    {menuLinks.map(link => (
                        <Link className={`text-gray-800 text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === link.url ? "text-white py-2 bg-primary-100 hover:animate-in transition-all duration-100 to-blue px-6" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                    {isSignedIn &&
                        (
                            <Link className="text-blue-950 text-lg gap-x-2 animate-in  hover:text-red-700   py-2 rounded-md  px-6 font-bold" href="/courses" >Courses</Link>
                        )
                    }

                </div>

                {/* search_bar and register cta */}


                <div className="lg:flex items-center justify-center gap-x-10 hidden ">


                    {isSignedIn ? (
                        <Link href="/">
                            <UserButton afterSignOutUrl="/" />
                        </Link>
                    ) :

                        (

                            <Link href="/sign-in" className='text-lg py-2  items-center justify-center outline-none bg-primary-100 text-gray-100 rounded-3xl px-8  hover:scale-110  transition p-3'>Academics</Link>


                        )
                    }




                </div>


                <div className="lg:hidden bg-primary-100 rounded-md p-3">

                    {/*  CREATE MENU BUTTON FOR MOBILE*/}

                    <button className="w-7 h-5 flex flex-col justify-between cursor-pointer z-50 relative items-center" onClick={() => setIsOpen(!isOpen)}>
                        <motion.div variants={topVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-white rounded origin-left"></motion.div>
                        <motion.div variants={centerVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-white rounded"></motion.div>
                        <motion.div variants={bottomVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-white rounded origin-left"></motion.div>
                    </button>
                    {/*  END MENU BUTTON*/}

                    {/*menu items*/}

                    {isOpen &&


                        <motion.div variants={listVariants} initial="closed" animate="open" onClick={() => setIsOpen(!isOpen)} className="absolute top-0 left-0 w-screen h-screen bg-light-200 shadow-xl text-blue-400 flex flex-col items-center justify-center gap-8 z-40">
                            <Image
                                src="/seedLogo.png"
                                width={100}
                                height={200}
                                alt='logo'
                                className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain flex my-7'
                            />
                            {menuLinks.map(link => (
                                <Link className={`text-blue-950 text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === link.url ? "text-white py-2 rounded-md bg-primary-100 px-6" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                            ))}

                            {isSignedIn &&
                                (
                                    <Link className="text-blue-950 text-lg gap-x-2 animate-in  hover:text-red-700   py-2 rounded-md  px-6 font-bold" href="/courses" >Courses</Link>
                                )
                            }
                        </motion.div>

                    }
                    {/*end of menu items*/}




                </div>

            </nav>

            {/* responsiveness */}



        </div>
    )
}

export default Navbar
