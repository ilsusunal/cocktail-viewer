"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const dummyUser = {
    username: 'user',
    password: 'password123'
};

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === dummyUser.username && password === dummyUser.password) {
            sessionStorage.setItem('isAuthenticated', 'true');
            router.push('/search');
        } else {
            alert('Invalid username or password');
        }
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