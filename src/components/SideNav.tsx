"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import Basket from "./Basket";
import { useBasket } from "@/context/BasketContext";
import { useAuth } from "@/context/AuthContext";

export default function SideNav() {
    const pathname = usePathname();
    const { basket, isBasketOpen, toggleBasket } = useBasket();
    const { isAuthenticated, logout } = useAuth();

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

    return (
        <nav>
            <ul className="flex items-center gap-x-4">
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
        </nav>
    )
}