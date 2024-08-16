"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
    const socialIcons = [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <FaLinkedin />, link: 'https://linkedin.com' },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center px-5  text-white rounded-lg shadow-lg  w-full py-6 h-screen">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block  text-blue-500 text-sm font-medium ">Name</label>
                        <input type="text" id="name" className="w-full p-2 rounded-md border border-primary-100 outline-none text-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-blue-500  text-sm font-medium">Email</label>
                        <input type="email" id="email" className="w-full p-2 rounded-md border border-primary-100 outline-none text-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="blo text-blue-500 ck text-sm font-medium">Message</label>
                        <textarea id="message" className="w-full p-2 rounded-md border border-primary-100 outline-none text-blue-900" rows={4}></textarea>
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 rounded-md hover:bg-yellow-600">Send</button>
                </form>
            </div>
            <div className="w-full mx-auto md:w-1/2 flex justify-center md:justify-center gap-6 flex-col ">
                {socialIcons.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="text-3xl text-blue-500"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
            <div className="w-full h-full p-3 md:flex hidden">
                <Image src="/services.png" alt='contact' width={1000} height={1000} className='w-full h-full p-2' />
            </div>
        </div>
    );
};

export default ContactUs;
