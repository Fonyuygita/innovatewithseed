"use client"

// Card.tsx
import { Offering } from '@/data';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
// types.ts
interface CardProps {
    offering: Offering;
}

const Card: React.FC<CardProps> = ({ offering }) => {
    const { theme } = useTheme()
    return (
        <motion.div
            className={`shadow-lg rounded-lg p-6 m-4 flex flex-col items-center text-center cursor-pointer hover:scale-110 hover:animate-out  transition-all duration-75 ${theme === 'light' ? 'text-gray-600 bg-gray-50 ' : ' text-light-300 bg-gray-900'}`
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="text-4xl text-primary-100 mb-4">{offering.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-blue-500">{offering.title}</h3>
            <p className={`text-gray-800 ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 '}`}>{offering.description}</p>
        </motion.div>
    );
};

export default Card;
