'use client'
import { Cocktail } from '@/models/cocktail';
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface BasketContextType {
    basket: Cocktail[];
    addToBasket: (cocktail: Cocktail) => void;
    removeFromBasket: (id: string) => void;
    clearBasket: () => void;
    isBasketOpen: boolean; 
    toggleBasket: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);
export default function BasketProvider({ children }: { children: ReactNode }) {
    const [basket, setBasket] = useState<Cocktail[]>([]);
    const [isBasketOpen, setBasketOpen] = useState<boolean>(false);

    const addToBasket = (cocktail: Cocktail) => {
        const isInBasket = basket.some(item => item.idDrink === cocktail.idDrink);
        if (!isInBasket) {
            setBasket(prevBasket => [...prevBasket, cocktail]);
        }
    };

    const removeFromBasket = (id: string) => {
        setBasket(prevBasket => prevBasket.filter(cocktail => cocktail.idDrink !== id));
    };

    const clearBasket = () => {
        setBasket([]);
    };
    const toggleBasket = () => {
        setBasketOpen(prev => !prev);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket, isBasketOpen, toggleBasket }}>
            {children}
        </BasketContext.Provider>
    );
}

export function useBasket(): BasketContextType {
    const context = useContext(BasketContext);
    if (context === undefined) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
}