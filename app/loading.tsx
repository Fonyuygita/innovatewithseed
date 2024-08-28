"use client"
// LoadingComponent.tsx
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

const LoadingComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-light-200 text-white absolute top-0 left-0 z-20 w-full">
            <GridLoader color="#FF6F00" loading={true} size={20} margin={2} />
        </div>
    );
};

export default LoadingComponent;
