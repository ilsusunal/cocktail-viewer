"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import Basket from "./Basket";

const siteRoutes = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Cocktails' },
    { href: '/login', label: 'Login' },
    { href: '/saved', label: 'Saved Cocktails' },
];

export default function SiteNav() {
    const pathname = usePathname();
    const [isBasketOpen, setBasketOpen] = useState(false);
    const [basketItems, setBasketItems] = useState<any[]>([]);

    const toggleBasket = () => setBasketOpen(prev => !prev);
    const closeBasket = () => setBasketOpen(false);

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
                    <button onClick={toggleBasket} className="p-2">
                        <img src="./basket-fill.svg" alt="Basket" className="w-6 h-6" />
                    </button>
                    <Basket isOpen={isBasketOpen} onClose={closeBasket} items={basketItems} />
                </li>
            </ul>
        </nav>
    )
}