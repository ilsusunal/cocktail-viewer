"use client"

import React, { useEffect } from 'react';

interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function Confirmation({ message, onConfirm, onCancel }: ConfirmationProps) {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-accentDark">
            <div className="p-16 text-xl bg-white borber-2 border-mainOrange flex flex-col items-center text-mainBlue rounded">
                {message}
                <div className="flex mt-8 space-x-4">
                    <button
                        onClick={onConfirm}
                        className="bg-mainOrange hover:bg-white hover:border-2 border-mainBlue hover:text-mainBlue text-white font-bold py-1 px-6 rounded"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-mainBlue hover:bg-white hover:border-2 border-mainOrange hover:text-mainOrange text-white font-bold py-1 px-6 rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
