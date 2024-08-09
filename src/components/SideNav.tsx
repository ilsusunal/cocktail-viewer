"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

import { useBasket } from "@/context/BasketContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Basket from "./basket";

export default function SideNav() {
    const pathname = usePathname();
    const { basket, isBasketOpen, toggleBasket } = useBasket();
    const { isAuthenticated, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const siteRoutes = [
        { href: '/', label: 'Home' },
        { href: '/cocktails', label: 'Cocktails' },
        ...(isAuthenticated ? [
            { href: '/saved', label: 'Saved Recipes' },
            { href: '/logout', label: 'Logout' }
        ] : [
            { href: '/login', label: 'Login' }
        ]),
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
                                className={`border-l-2 border-accentBlue px-4 py-1 hover:underline hover:underline-offset-1 hover:decoration-4 decoration-mainYellow ${pathname === siteRoute.href ? 'font-extrabold text-mainBlue' : ''}`}
                            >
                                {siteRoute.label}
                            </Link>
                        </li>
                    ))}
                    <li className="relative">
                        <div className="flex items-center">
                            <button onClick={toggleBasket} className="border-l-2 border-accentBlue px-4 py-1 ">
                                {isBasketOpen ? (
                                    <img src="./basket-blue.svg" alt="Basket Open" className="w-6 h-6" />
                                ) : (
                                    <img src="./basket-dark.svg" alt="Basket Closed" className="w-6 h-6" />
                                )}
                            </button>
                            ({basket.length})
                        </div>
                        {isBasketOpen && <Basket />}
                    </li>
                </ul>
            </div>
        </nav>
    )
}