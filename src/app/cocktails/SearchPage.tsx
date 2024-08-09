"use client"

import AlphabetFilter from "@/components/AlphabetFilter";
import CocktailCard from "@/components/CocktailCard";
import { fetchCocktailsByLetter, fetchCocktailsByName } from "@/lib/api";
import { Cocktail } from "@/models/cocktail";
import { useCallback, useEffect, useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, timeout = 300): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(...args); }, timeout);
    };
}


export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('A');
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        setLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    }, []);

    const fetchCocktails = async (term: string, letter: string) => {
        let result: Cocktail[] = [];
        if (term) {
            result = await fetchCocktailsByName(term);
        } else if (letter) {
            result = await fetchCocktailsByLetter(letter);
        }
        setCocktails(result);
    };

    const debouncedFetch = useCallback(
        debounce((value: string) => fetchCocktails(value, selectedLetter), 300),
        [selectedLetter]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        debouncedFetch(e.target.value);
    };

    useEffect(() => {
        fetchCocktails(searchTerm, selectedLetter);
    }, [selectedLetter]);

    return (
        <main className="max-w-5xl mx-auto">
            <section className="flex items-center justify-between">
                <h1 className="text-2xl text-mainBlue bg-mainYellow rounded px-8 underline-offset-1 decoration-4 decoration-mainYellow font-bold">
                    All Cocktails
                </h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name"
                    className="py-2 px-4  text-accentDark/50 border-2 border-mainOrange hover:bg-accentBlue rounded"
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