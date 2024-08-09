"use client"
import { useAuth } from "@/context/AuthContext";
import { useBasket } from "@/context/BasketContext";
import { Cocktail } from "@/models/cocktail";
import { useEffect, useState } from "react";
import Warning from "./Warning";
import { useRouter } from "next/navigation";
import Confirmation from "./Confirmation";

interface CocktailCardProps {
    cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
    const { addToBasket } = useBasket();
    const { isAuthenticated } = useAuth();
    const [showWarning, setShowWarning] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [countdown, setCountdown] = useState(2);
    const router = useRouter();

    const handleAddToBasket = () => {
        if (isAuthenticated) {
            setShowConfirmation(true);
        } else {
            setShowWarning(true);
            setCountdown(3);
        }
    };

    const handleConfirm = () => {
        addToBasket(cocktail);
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    useEffect(() => {
        if (showWarning) {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        router.push('/login');
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [showWarning, router]);


    return (
        <div className="border-2 border-accentDark/20 hover:border-mainBlue  hover:text-mainOrange rounded p-4 flex flex-col items-center">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-48 object-cover rounded border-2 border-zinc-100" />
            <p className="text-sm mt-2">{cocktail.strCategory} | {cocktail.strAlcoholic}</p>
            <h3 className="text-lg font-black my-2 text-mainBlue px-4 py-1 underline-offset-1 decoration-4 decoration-mainYellow">{cocktail.strDrink}</h3>
            <ul className="text-xs my-1 flex flex-wrap justify-center">
                {Array.from({ length: 15 }, (_, i) => i + 1).map((num, index) => {
                    const ingredient = cocktail[`strIngredient${num}` as keyof Cocktail];
                    const isEven = index % 2 === 0;

                    return (
                        ingredient && (
                            <li
                                key={num}
                                className={`flex items-center ${isEven ? 'text-accentDark/50' : 'text-accentDark/25'}`}
                            >
                                {ingredient}
                                {index < 14 && cocktail[`strIngredient${num + 1}` as keyof Cocktail] && ' - '}
                            </li>
                        )
                    );
                })}
            </ul>
            <button
                onClick={handleAddToBasket}
                className="mt-2 bg-mainOrange hover:bg-mainBlue text-white text-sm py-1 px-4 rounded"
            >
                Add to Basket
            </button>
            {showWarning && <Warning message="Log in to add items to the basket !!!" countdown={countdown} />}
            {showConfirmation && (
                <Confirmation
                    message="Do you want to add this recipe to your basket?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}
