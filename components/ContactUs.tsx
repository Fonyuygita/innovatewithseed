"use client"

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';



const ContactUs = () => {
    const { theme } = useTheme()



    const socialIcons = [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <FaLinkedin />, link: 'https://linkedin.com' },
    ];

    return (
        <section className={`${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-800  text-light-200"} w-full min-h-screen  overflow-hidden`}>



            <h1 className='text-blue-500 font-bold text-2xl lg:text-4xl text-center'>Contact <span className='text-primary-100'>Us</span></h1>

            <div className="flex  flex-col-reverse md:flex-row justify-between gap-3 md:items-center px-3  text-white rounded-lg shadow-lg   w-full md:h-screen pb-4 mt-[3rem]">


                <div className="w-full md:flex-2 mb-9 h-sc  md:mb-4 ">

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block  text-blue-500 text-sm font-medium ">Name</label>
                            <input type="text" id="name" className={`w-full p-2 rounded-md border border-primary-100 outline-none text-blue-500  ${theme === "light" ? "bg-white" : "bg-gray-900"}`} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-blue-500  text-sm font-medium">Email</label>
                            <input type="email" id="email" className={`w-full p-2 rounded-md border border-primary-100 outline-none text-blue-500 ${theme === "light" ? "bg-white" : "bg-gray-900"}`} />
                        </div>
                        <div>
                            <label htmlFor="message" className="blo text-blue-500 ck text-sm font-medium">Message</label>
                            <textarea id="message" className={`w-full p-2 rounded-md border border-primary-100 outline-none text-blue-900 ${theme === "light" ? "bg-white" : "bg-gray-900"}`} rows={4}></textarea>
                        </div>
                        <button type="submit" className="w-full p-2 bg-blue-500 rounded-md hover:bg-blue-400">Send</button>
                    </form>

                    <div className="w-full mx-auto md:flex-1 flex justify-center md:justify-center gap-6  flex-row mt-[2rem]">
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
                </div>

                <div className="w-full h-full rounded-2xl md:border-none  border border-blue-500 mt-[5rem]">
                    <Image src="/log.svg" alt='contact' width={1000} height={1000} className='w-full h-full p-2 object-contain rounded-2xl' />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
