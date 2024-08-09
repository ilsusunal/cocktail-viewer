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
        <main className="lg:flex  min-h-auto gap-16">
            <div className="flex-1">
                <h1 className="mb-8 text-2xl text-mainBlue bg-mainYellow rounded px-8 underline-offset-1 decoration-4 decoration-mainYellow font-bold">Welcome Back!</h1>
                <img src="./welcome.png" alt="Welcome!" />
            </div>
            <div className="border-2 border-accentBlue rounded p-12 flex-1 ml-16 flex flex-col items-center">
                <p className="mb-12 text-accentDark/80">Login to save cocktail recipes.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full py-2 px-4  text-accentDark/50 border-2 border-mainOrange hover:bg-accentBlue rounded"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 px-4  text-accentDark/50 border-2 border-mainOrange hover:bg-accentBlue rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 bg-mainOrange hover:bg-mainBlue text-white py-2 px-6 w-full rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}