"use client"

import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation';
type MenuLink = {
    title: string;
    url: string;
};

const menuLinks: MenuLink[] = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contact' },
];

const Navbar = () => {

    const pathname = usePathname();
    return (
        <div className='bg-[#fff] w-[100%] mr-auto ml-auto px-[5%] '>
            <nav className='flex justify-between items-center p-2'>
                <div className='w-22 h-23 '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='w-20 h-20 object-contain'
                    />
                </div>

                {/* Menu links here */}
                <div className="flex gap-2 items-center">
                    {menuLinks.map(link => (
                        <Link className={`text-blue-950 text-lg gap-x-2 animate-in px-4 hover:text-red-700 ${pathname === link.url ? "text-white py-2 rounded-md bg-blue-500 px-6" : ""}`} href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                </div>

                {/* search_bar and register cta */}
                <div className="flex items-center justify-center gap-x-10">
                    <Image src="/search.png" alt="" width={30} height={30} className='w-fit object-contain cursor-pointer' />
                    <button className='text-lg py-2 flex items-center justify-center outline-none bg-blue-500 text-white rounded-3xl px-8  hover:scale-110  transition p-3'>Register</button>
                </div>

            </nav>

        </div>
    )
}

export default Navbar
