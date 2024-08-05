import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: 'What is Seed?',
        answer: 'Seed is a company focused on revolutionizing the tech industry...',
    },
    {
        question: 'Who is the CEO of Seed?',
        answer: 'John Doe is the CEO of Seed, with over 20 years of experience...',
    },
    {
        question: 'What services does Seed offer?',
        answer: 'Seed offers a range of services including software development...',
    },
    {
        question: 'How can I contact Seed?',
        answer: 'You can contact Seed through our website or social media channels...',
    },
    {
        question: 'Where is Seed located?',
        answer: 'Seed is headquartered in Silicon Valley, with offices worldwide...',
    },
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen bg-primary-100">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-4 m-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-lg font-bold">{faq.question}</h2>
                            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activeIndex === index && (
                            <motion.div
                                className="mt-2 text-gray-700"
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                transition={{ duration: 0.5 }}
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
