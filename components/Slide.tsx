"use client"
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';

interface SlideProps {
    icon: IconType;
    title: string;
    description: string;
}

const Slide: React.FC<SlideProps> = ({ icon: Icon, title, description }) => {
    const { theme } = useTheme()
    return (
        <motion.div
            className={`p-4  rounded-lg shadow-md justify-start flex flex-col items-start space-y-4 ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-900 text-white '}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Icon className="text-blue-500 w-12 h-12 bg-light-300 rounded-full p-3 " />
            <div>
                <h3 className="text-xl font-bold text-primary-100 my-2">{title}</h3>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 '}`}>{description}</p>
            </div>
        </motion.div>
    );
};

export default Slide;
