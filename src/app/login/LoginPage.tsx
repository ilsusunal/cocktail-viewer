"use client"

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
    const { login, isAuthenticated } = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/cocktails');
        }
    }, [isAuthenticated, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <main className="flex flex-col items-center min-h-full">
            <h1 className="text-2xl text-gray-800 font-bold mb-8">Welcome Back!</h1>
            <p className="mb-6">Login to save cocktail recipes.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 hover:bg-gray-800 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 hover:bg-gray-800 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-2 bg-amber-500 hover:bg-amber-800 text-white py-2 px-6 w-full rounded"
                >
                    Login
                </button>
            </form>
        </main>
    );
}