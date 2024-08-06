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

    return (
        <main>
            <h1 className="text-xl font-bold">Saved Cocktails</h1>
            {savedCocktails.length === 0 ? (
                <p>No saved cocktails found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {savedCocktails.map(cocktail => (
                        <div key={cocktail.idDrink} className="border p-4 rounded">
                            <img
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                                className="w-full h-48 object-cover"
                            />
                            <h3 className="text-lg font-bold">{cocktail.strDrink}</h3>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}