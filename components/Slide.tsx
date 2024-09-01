"use client"
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';

interface SlideProps {
    icon: IconType;
    title: string;
    description: string;
}

const Slide: React.FC<SlideProps> = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Icon className="text-blue-500 w-12 h-12" />
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};

export default Slide;
