"use client"

import AlphabetFilter from "@/components/AlphabetFilter";
import CocktailCard from "@/components/CocktailCard";
import { fetchCocktailsByLetter, fetchCocktailsByName } from "@/lib/api";
import { Cocktail } from "@/models/cocktail";
import { useEffect, useState } from "react";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('A');
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        const fetchLetters = async () => {
            setLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
        };
        fetchLetters();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let result: Cocktail[] = [];
            if (searchTerm) {
                result = await fetchCocktailsByName(searchTerm);
            } else if (selectedLetter) {
                result = await fetchCocktailsByLetter(selectedLetter);
            }
            setCocktails(result);
        };

        fetchData();
    }, [searchTerm, selectedLetter]);

    return (
        <main className="max-w-6xl mx-auto">
            <section className="flex items-center justify-between">
                <h1 className="text-2xl text-gray-800 font-bold">All Cocktails</h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name"
                    className="py-2 px-4 bg-gray-800 text-white hover:bg-amber-800 rounded-full"
                />
            </section>
            <AlphabetFilter letters={letters} onSelectLetter={setSelectedLetter} selectedLetter={selectedLetter} />
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cocktails.map(cocktail => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </section>
        </main>
    );
}