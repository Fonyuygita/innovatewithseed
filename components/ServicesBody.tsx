"use client"

// components/Services.tsx
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaRobot, FaNetworkWired } from 'react-icons/fa';

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
    return (
        <div className="p-10 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-6 bg-gray-100 rounded-lg shadow-lg"
                    >
                        <service.icon className="text-4xl mb-4 text-blue-500" />
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesBody;
