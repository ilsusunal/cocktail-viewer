import React from 'react';

interface WarningProps {
    message: string;
    countdown: number;
}

export default function Warning({ message, countdown}: WarningProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/75">
            <div className="p-16 text-xl bg-red-500 flex flex-col items-center text-white rounded">
                {message}
                <div className="text-sm mt-8 ">Redirecting to the login page in {countdown}...</div>
            </div>
        </div>
    );
}