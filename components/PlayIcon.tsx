import React from 'react';

const PlayIcon: React.FC = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-11.5v7l6-3.5-6-3.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default PlayIcon;
