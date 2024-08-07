'use client'
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const authInfo = localStorage.getItem('authInfo');
        if (authInfo) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (username: string, password: string) => {
        if (
            username === process.env.NEXT_PUBLIC_DUMMY_USERNAME &&
            password === process.env.NEXT_PUBLIC_DUMMY_PASSWORD
        ) {
            setIsAuthenticated(true);
            localStorage.setItem('authInfo', JSON.stringify({ username }));
            router.push('/cocktails');
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('authInfo');
        router.push('/');
    };


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
