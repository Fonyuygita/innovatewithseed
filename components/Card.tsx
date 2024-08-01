"use client"

// Card.tsx
import { Offering } from '@/data';
import { motion } from 'framer-motion';
// types.ts
interface CardProps {
    offering: Offering;
}

const Card: React.FC<CardProps> = ({ offering }) => {
    return (
        <motion.div
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue-500 shadow-lg rounded-lg p-6 m-4 flex flex-col items-center text-center cursor-pointer hover:scale-110 hover:animate-out  transition-all duration-75"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="text-4xl text-primary-100 mb-4">{offering.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-light-300">{offering.title}</h3>
            <p className="text-light-300">{offering.description}</p>
        </motion.div>
    );
};

export default Card;
