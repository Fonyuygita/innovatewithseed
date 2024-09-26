"use client"
import { useTheme } from '@/components/context/ThemeContext';
// LoadingComponent.tsx
import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

const LoadingComponent: React.FC = () => {
    const { theme } = useTheme()
    return (
        <div className={`flex items-center justify-center h-[100vh] text-white flex-col gap-[16rem] absolute top-0 left-0 z-20 w-full ${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-950 text-white  '}`}>
            <CircleLoader color="#FF6F00" loading={true} size={40} />
            <div className="flex gap-5 items-center justify-center">
                <p className="text-blue-500 text-2xl">SE<span className='text-primary-100'>ED</span></p>
            </div>
        </div>
    );
};

export default LoadingComponent;
