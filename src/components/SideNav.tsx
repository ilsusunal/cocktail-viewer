"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import Basket from "./Basket";
import { useBasket } from "@/context/BasketContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function SideNav() {
    const pathname = usePathname();
    const { basket, isBasketOpen, toggleBasket } = useBasket();
    const { isAuthenticated, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const siteRoutes = [
        { href: '/', label: 'Home' },
        { href: '/cocktails', label: 'Cocktails' },
        isAuthenticated ? { href: '/logout', label: 'Logout' } : { href: '/login', label: 'Login' },
        ...(isAuthenticated ? [{ href: '/saved', label: 'Saved Cocktails' }] : []),
    ];

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        logout();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="flex items-center justify-between p-4">
                <button onClick={toggleMenu} className="lg:hidden p-2">
                    <img src="./burger.svg" alt="Welcome" className="w-6 h-6" />
                </button>
                <ul className={`flex lg:items-center gap-x-4 lg:flex ${isMenuOpen ? 'flex-col items-start' : 'hidden'} lg:block`}>
                    {siteRoutes.map((siteRoute) => (
                        <li key={siteRoute.href}>
                            <Link
                                href={siteRoute.href}
                                onClick={siteRoute.href === '/logout' ? handleLogout : undefined}
                                className={`hover:underline ${pathname === siteRoute.href ? 'font-extrabold text-gray-800' : ''}`}
                            >
                                {siteRoute.label}
                            </Link>
                        </li>
                    ))}
                    <li className="relative">
                        <button onClick={toggleBasket} className="p-2">
                            <img src="./basket-fill.svg" alt="Basket" className="w-6 h-6" />
                        </button>
                        {isBasketOpen && <Basket />} ({basket.length})
                    </li>
                </ul>
            </div>
        </nav>
    )
}