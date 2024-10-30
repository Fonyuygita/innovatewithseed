"use client"

import { motion } from "framer-motion"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { FaThumbsUp, FaBell, FaEye, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from "./context/ThemeContext"

type MenuLink = {
    title: string;
    url: string;
};

const menuLinks: MenuLink[] = [

    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Blog', url: '/blog' },

    { title: 'Gallery', url: '/gallery' },
    { title: 'Contact Us', url: '/contact' },
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
    const { theme, toggleTheme } = useTheme();

    const customAppearance = {
        variables: {
            colorPrimary: '#FF6F00', // Tomato color
            colorText: theme === 'light' ? '#333' : "#fff", // Dark text
            colorBackground: theme === 'light' ? '#999' : "#666", // Light background
            fontFamily: 'Arial, sans-serif',
            borderRadius: '8px',
            colorBorder: '#ff6347',
            colorInputBackground: theme === "light" ? "#ffffff" : "#333333",
            colorOtpText: theme === 'light' ? '#000000' : '#ffffff', // OTP input font color
            colorSocialButtonBorder: '#ffffff', // Social media button border color
        },
    }





    return (
        <div className={` w-[100%] mr-auto ml-auto px-[5%] h-[90px] fixed top-0 left-0 z-30 md:110px shadow-lg  ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-900 text-white'} `}>
            <nav className='flex justify-between items-center p-2 h-full '>

                <div className="lg:hidden  flex items-center justify-center`">
                    {isSignedIn ? (
                        <Link href="/">
                            <UserButton afterSignOutUrl="/"
                                appearance={customAppearance}
                            />
                        </Link>
                    ) :

                        (

                            <Link
                                href="/academics"
                                className="flex items-center justify-center lg:justify-start gap-2 flex-col"
                            >
                                <Image src="/academics/logo.png" alt="logo" width={32} height={32} />
                                <span className="text-[10px] lg:block font-bold">Academy</span>
                            </Link>

                        )
                    }

                </div>

                <Link href="/" className={`md:flex hidden rounded-full shadow-2xl ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white border border-x-primary-100'}`}>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain '
                    />
                </Link>



                <Link href="/" className={`rounded-full   absolute bottom-[-28px] left-[41%] md:hidden   w-12 h-12 flex items-center justify-center  ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white border border-x-primary-100'}`}>
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

                    <Link className={` text-sm gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === "/" ? "text-white py-2 bg-primary-100 hover:animate-in rounded-md transition-all duration-100 to-blue px-6" : ""}`} href="/">Home</Link>

                    {menuLinks.map(link => (
                        <Link className={` text-sm rounded-md gap-x-2 animate-in px-4 hover:text-red-700 ${link.url !== "/" && pathname.startsWith(link.url) ? "text-white py-2 bg-primary-100 hover:animate-in transition-all duration-100 to-blue px-6 " : ""
                            }`} href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                    {isSignedIn &&
                        (


                            <Link className={` text-sm gap-x-2 animate-in px-4 hover:text-red-700 ${pathname.startsWith("/aca") || pathname.startsWith("/stud") ? "text-white py-2 bg-primary-100 hover:animate-in rounded-md transition-all duration-100 to-blue px-6" : ""}`} href="/student">Academics</Link>


                        )

                    }
                </div>

                {/* search_bar and register cta */}


                <div className="lg:flex items-center justify-center gap-x-10 hidden ">





                    {isSignedIn ? (
                        <Link href="/">
                            <UserButton afterSignOutUrl="/"

                                appearance={customAppearance}
                            />
                        </Link>
                    ) :

                        (

                            <Link
                                href="/academics"
                                className="flex items-center justify-center lg:justify-start gap-2 bg-primary-100 hover:bg-orange-700 animate-in hover:scale-100 px-4 py-1 rounded-xl"
                            >
                                <Image src="/academics/logo.png" alt="logo" width={28} height={82} />
                                <span className={`hidden lg:block font-bold ${theme === "light" ? "text-light-200" : "text-light-200 text-sm"}`}>Academics</span>
                            </Link>


                        )
                    }




                </div>


                <div className="lg:hidden  rounded-md p-2">

                    {/*  CREATE MENU BUTTON FOR MOBILE*/}

                    <button className="w-7 h-5 gap-1 flex flex-col justify-between cursor-pointer z-50 relative items-center" onClick={() => setIsOpen(!isOpen)}>
                        <motion.div variants={topVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded origin-left"></motion.div>
                        <motion.div variants={centerVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded"></motion.div>
                        <motion.div variants={bottomVariant} animate={isOpen ? "open" : "closed"} className="w-7 h-1 bg-primary-100 rounded origin-left"></motion.div>
                    </button>
                    {/*  END MENU BUTTON*/}

                    {/*menu items*/}

                    {isOpen &&


                        <motion.div variants={listVariants} initial="closed" animate="open" onClick={() => setIsOpen(!isOpen)} className={`absolute top-0 left-0 w-screen h-screen  shadow-xl text-blue-400 flex flex-col items-center justify-center gap-8 z-40   ${theme === 'light' ? 'bg-gray-200 text-blue-400' : 'bg-gray-800 text-light-200'} `}>
                            <Link href="/" className={`rounded-full shadow-2xl ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white border border-x-primary-100'}`}>
                                <Image
                                    src="/seedLogo.png"
                                    width={200}
                                    height={200}
                                    alt='logo'
                                    className='lg:w-25 lg:h-25 w-12 h-12  items-center justify-center  object-contain flex '
                                />
                            </Link>

                            <Link className={` text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === "/" ? "text-white py-2 bg-primary-100 hover:animate-in rounded-md transition-all duration-100 to-blue px-[6rem]" : ""}`} href="/">Home</Link>
                            {menuLinks.map(link => (
                                <Link className={` text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${link.url !== "/" && pathname.startsWith(link.url) ? "text-white  py-2 rounded-md bg-primary-100 px-[6rem]" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                            ))}

                            {isSignedIn &&
                                (
                                    <Link className={`font-bold text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname.startsWith("/aca") || pathname.startsWith("/stud") ? "text-white py-2 bg-primary-100 hover:animate-in rounded-md transition-all duration-100 to-blue px-[6rem]" : ""}`} href="/student">Academics</Link>
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
