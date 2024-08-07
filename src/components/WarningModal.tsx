import React from 'react';

interface WarningProps {
    message: string;
}

export default function WarningModal({ message,  }: WarningProps) {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-yellow-500 text-white rounded">
            {message}
        </div>
    );
}