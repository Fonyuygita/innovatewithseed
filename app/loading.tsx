"use client"
import { useTheme } from '@/components/context/ThemeContext';
// LoadingComponent.tsx
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

const LoadingComponent: React.FC = () => {
    const { theme } = useTheme()
    return (
        <div className={`flex items-center justify-center min-h-screen  text-white absolute top-0 left-0 z-20 w-full ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-white  '}`}>
            <GridLoader color="#FF6F00" loading={true} size={20} margin={2} />
        </div>
    );
};

export default LoadingComponent;
