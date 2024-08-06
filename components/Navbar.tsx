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

    { title: 'Contact', url: '/contact' },
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


    if (!isLoaded || !isSignedIn) {
        return null;
    }


    return (
        <div className='bg-[#fff] w-[100%] mr-auto ml-auto px-[5%] h-[110px] fixed top-0 left-0 z-30'>
            <nav className='flex justify-between items-center p-2 h-full'>
                <div className='md:w-22 md:h-23 w-16 h-16  rounded-full '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='w-15 h-15  object-contain'
                    />
                </div>

                {/* Menu links here */}
                <div className="hidden md:flex gap-2 items-center">
                    {menuLinks.map(link => (
                        <Link className={`text-blue-950 text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === link.url ? "text-white py-2 rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue px-6" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                    ))}

                    <Link className="text-blue-950 text-lg gap-x-2 animate-in  hover:text-red-700   py-2 rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 to-blue px-6 font-bold" href="/courses" >Courses</Link>

                </div>

                {/* search_bar and register cta */}


                <div className="flex items-center justify-center gap-x-10">

                    <ClerkLoading>
                        <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                    </ClerkLoading>
                    <SignedIn>

                        <Link href="/">
                            <UserButton afterSignOutUrl="/" />
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <Link href="/sign-in" className='text-lg py-2  items-center justify-center outline-none   bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue-500 text-white md:flex hidden rounded-3xl px-8  hover:scale-110  transition p-3'>Login</Link>
                    </SignedOut>
                </div>


                <div className="md:hidden">

                    {/*  CREATE MENU BUTTON FOR MOBILE*/}

                    <button className="w-7 h-5 flex flex-col justify-between cursor-pointer z-50 relative items-center" onClick={() => setIsOpen(!isOpen)}>
                        <motion.div variants={topVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded origin-left"></motion.div>
                        <motion.div variants={centerVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded"></motion.div>
                        <motion.div variants={bottomVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded origin-left"></motion.div>
                    </button>
                    {/*  END MENU BUTTON*/}

                    {/*menu items*/}

                    {isOpen &&

                        <motion.div variants={listVariants} initial="closed" animate="open" className="absolute top-0 left-0 w-screen h-screen bg-light-200 shadow-xl text-blue-400 flex flex-col items-center justify-center gap-8 z-40">
                            {menuLinks.map(link => (
                                <Link className={`text-blue-950 text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === link.url ? "text-white py-2 rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue px-6" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                            ))}

                            <Link className="text-blue-950 text-lg gap-x-2 animate-in  hover:text-red-700   py-2 rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 to-blue px-6" href="#" >Courses</Link>

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
