"use client"

import { useBasket } from "@/context/BasketContext";
import { useRouter } from "next/navigation";

export default function Basket() {
    const { basket, removeFromBasket, clearBasket, toggleBasket } = useBasket();
    const router = useRouter();

    const saveToLocalStorage = () => {
        const saved = localStorage.getItem('savedCocktails');
        const existingSaved = saved ? JSON.parse(saved) : [];
        const updatedSaved = [...existingSaved, ...basket.filter(basketItem =>
            !existingSaved.some((savedItem: { idDrink: string; }) => savedItem.idDrink === basketItem.idDrink)
        )];
        localStorage.setItem('savedCocktails', JSON.stringify(updatedSaved));
        clearBasket();
        toggleBasket();
        router.push('/saved');
    };

    return (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 border border-gray-200 z-50">
            <ul className="py-2 px-6">
                {basket.length === 0 ? (
                    <li>Your basket is empty</li>
                ) : (
                    basket.map(cocktail => (
                        <li key={cocktail.idDrink} className="flex justify-between items-center mt-2 text-gray-800 border-b-2">
                            <span>{cocktail.strDrink}</span>
                            <button onClick={() => removeFromBasket(cocktail.idDrink)} className="text-amber-600 font-semibold hover:underline">Remove</button>
                        </li>
                    ))
                )}
                <button
                    onClick={saveToLocalStorage}
                    className="mt-2 bg-amber-500 text-white py-1 px-3 rounded-full "
                >
                    Save
                </button>
            </ul>
        </div>
    )
}