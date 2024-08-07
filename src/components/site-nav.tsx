"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import Basket from "./Basket";
import { useBasket } from "@/context/BasketContext";
import ProtectedPage from "./ProtectedPage";
import WarningModal from "./WarningModal";

const siteRoutes = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Cocktails' },
    { href: '/login', label: 'Login' },
    { href: '/saved', label: 'Saved Cocktails' },
];

export default function SiteNav() {
    const pathname = usePathname();
    const { basket, isBasketOpen, toggleBasket } = useBasket();
    const [showWarning, setShowWarning] = useState<boolean>(false);

    const handleBasketClick = () => {
        const authStatus = typeof window !== 'undefined' && sessionStorage.getItem('isAuthenticated') === 'true';
        if (!authStatus) {
            setShowWarning(true);
        } else {
            toggleBasket();
        }
    };

    return (
        <nav>
            <ul className="flex items-center gap-x-4">
                {siteRoutes.map((siteRoute) => (
                    <li key={siteRoute.href}>
                        <Link
                            href={siteRoute.href}
                            className={`hover:underline ${pathname === siteRoute.href ? "font-extrabold text-gray-800" : ""}`}
                        >
                            {siteRoute.label}
                        </Link>
                    </li>
                ))}
                <li className="relative">
                    <button onClick={handleBasketClick} className="p-2">
                        <img src="./basket-fill.svg" alt="Basket" className="w-6 h-6" />
                    </button>
                    <ProtectedPage showWarning={showWarning}>
                        {isBasketOpen && <Basket />} ({basket.length})
                    </ProtectedPage>
                </li>
            </ul>
        </nav>
    )
}