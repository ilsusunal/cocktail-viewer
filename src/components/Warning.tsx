'use client'
import React, { useEffect, useState } from 'react';

interface WarningProps {
    message: string;
    countdown: number;
}

export default function Warning({ message, countdown }: WarningProps) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800/75 z-50">
            <div
                className="p-8 text-xl bg-accentDark flex flex-col items-center text-white rounded max-w-sm max-h-screen w-full mx-4 sm:mx-auto overflow-auto"
                
            >
                {message}
                <div className="text-sm mt-8">Redirecting to the login page in {countdown}...</div>
            </div>
        </div>
    );
}