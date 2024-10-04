"use client"
// components/Mode.tsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from './context/ThemeContext';


const Mode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className={`flex items-center justify-center gap-1 p-2 rounded-2xl cursor-pointer fixed bottom-2 left-3 transition-colors duration-300 w-[60px] h-[60px] ${theme === 'light' ? 'bg-primary-100' : 'bg-black'
                }`}
        >
            {theme === 'light' ? (
                <FaMoon className="text-xl text-light-200" />
            ) : (
                <FaSun className="text-xl text-yellow-500" />
            )}
        </div>
    );
};

export default Mode;
