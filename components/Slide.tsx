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
            className={`px-5 py-2 w-full  rounded-lg shadow-md justify-start flex flex-col items-start space-y-4 ${theme === 'light' ? 'bg-gray-300 ' : 'bg-gray-900 text-white '}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Icon className="text-blue-500 w-9 h-9 bg-light-300 rounded-full p-2 " />
            <div>

                <p className={`text-sm md:text-[12px] ${theme === 'light' ? 'text-gray-600 bg-gray-300 ' : ' text-light-300 '}`}>{description}</p>
            </div>
        </motion.div>
    );
};

export default Slide;
