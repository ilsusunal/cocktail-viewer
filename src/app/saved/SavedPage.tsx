"use client"

import { Cocktail } from "@/models/cocktail";
import { useEffect, useState } from "react";

export default function SavedPage() {
    const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

    const loadSavedCocktails = () => {
        const saved = localStorage.getItem('savedCocktails');
        if (saved) {
            setSavedCocktails(JSON.parse(saved));
        }
    };

    useEffect(() => {
        loadSavedCocktails();
        const handleStorageChange = () => loadSavedCocktails();
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const removeCocktail = (id: string) => {
        const updatedCocktails = savedCocktails.filter(cocktail => cocktail.idDrink !== id);
        setSavedCocktails(updatedCocktails);
        localStorage.setItem('savedCocktails', JSON.stringify(updatedCocktails));
    };

    return (
        <main className="m-4">
            <h1 className="text-2xl text-mainBlue bg-mainYellow rounded px-8 font-bold mb-8 w-80">
                Saved Cocktails
            </h1>
            {savedCocktails.length === 0 ? (
                <p>No saved cocktails found.</p>
            ) : (
                <div className="flex flex-col gap-4 ">
                    {savedCocktails.map(cocktail => (
                        <div key={cocktail.idDrink} className="gap-8 border-4 border-accentBlue hover:border-mainBlue rounded-lg p-4 lg:flex items-center">
                            <img
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                                className="w-full h-48 lg:w-48 lg:h-full object-cover rounded"
                            />
                            <div>
                                <div className="lg:flex justify-between mb-4 items-center ">
                                    <div className="lg:flex gap-4 mb-4 items-center">
                                    <h3 className="text-lg font-bold text-mainBlue">{cocktail.strDrink}</h3>
                                    <p className="text-accentDark/50 text-sm">{cocktail.strCategory} - {cocktail.strAlcoholic} - {cocktail.strGlass}</p>
                                    </div>
                                    <button
                                        onClick={() => removeCocktail(cocktail.idDrink)}
                                        className="mt-2 bg-mainOrange hover:bg-mainBlue text-white py-1 px-6 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <p className="mb-2"><strong>Instructions:</strong> {cocktail.strInstructions}</p>
                                <ul className="">
                                    {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => {
                                        const ingredient = cocktail[`strIngredient${num}` as keyof Cocktail];
                                        const measure = cocktail[`strMeasure${num}` as keyof Cocktail];
                                        return (
                                            ingredient && (
                                                <li key={num}>
                                                    - {measure} <strong>{ingredient}</strong>
                                                </li>
                                            )
                                        );
                                    })}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}