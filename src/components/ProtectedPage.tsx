"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WarningModal from './WarningModal';

interface ProtectedPageProps {
    children: React.ReactNode;
    showWarning?: boolean;
}

export default function ProtectedPage({ children, showWarning = false }: ProtectedPageProps) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [warningVisible, setWarningVisible] = useState<boolean>(false);

    useEffect(() => {
        const authStatus = typeof window !== 'undefined' && sessionStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authStatus);

        if (!authStatus && showWarning) {
            setWarningVisible(true);

            const timer = setTimeout(() => {
                router.push('/login');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [showWarning, router]);

    useEffect(() => {
        if (!isAuthenticated && !showWarning) {
            router.push('/login');
        }
    }, [isAuthenticated, showWarning, router]);

    return isAuthenticated || !showWarning ? (
        <>{children}</>
    ) : (
        <WarningModal message="Please log in to access this page." />
    );
}