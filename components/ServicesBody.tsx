"use client"

// components/Services.tsx
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaRobot, FaNetworkWired } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';

const services = [
    { icon: FaCode, title: 'Web Development', description: 'Building responsive and modern web applications.' },
    { icon: FaLaptopCode, title: 'Software Development', description: 'Creating software solutions for various needs.' },
    { icon: FaMobileAlt, title: 'Mobile Development', description: 'Developing mobile applications for Android and iOS.' },
    { icon: FaCloud, title: 'Cloud Services', description: 'Offering cloud solutions and services.' },
    { icon: FaDatabase, title: 'Database Management', description: 'Managing and optimizing databases.' },
    { icon: FaRobot, title: 'AI & ML', description: 'Implementing AI and machine learning solutions.' },
    { icon: FaNetworkWired, title: 'Networking', description: 'Providing networking solutions and services.' },
];

const ServicesBody = () => {
    const { theme } = useTheme()
    return (
        <div className={`p-10  ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-gray-300  '}`}
        >
            <h2 className={`text-3xl font-bold mb-8 text-center text-blue-500 `}>Our <span className='text-primary-100'>Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`p-6  rounded-lg shadow-lg py-4 
         ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-gray-300  '}`}
                    >
                        <service.icon className="text-4xl mb-4 text-primary-100 my-4" />
                        <h3 className="text-2xl font-bold my-4 text-blue-500">{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesBody
