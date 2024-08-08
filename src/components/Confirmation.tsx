"use client"

import React from 'react';

interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function Confirmation({ message, onConfirm, onCancel }: ConfirmationProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/75">
            <div className="p-16 text-xl bg-zinc-50 flex flex-col items-center text-gray-800 rounded">
                {message}
                <div className="flex mt-8 space-x-4">
                    <button
                        onClick={onConfirm}
                        className="bg-amber-500 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
