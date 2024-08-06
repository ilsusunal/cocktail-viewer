'use client'
import { Cocktail } from '@/models/cocktail';
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface BasketContextType {
    basket: Cocktail[];
    addToBasket: (cocktail: Cocktail) => void;
    removeFromBasket: (id: string) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [basket, setBasket] = useState<Cocktail[]>([]);

    const addToBasket = (cocktail: Cocktail) => {
        setBasket(prevBasket => [...prevBasket, cocktail]);
    };

    const removeFromBasket = (id: string) => {
        setBasket(prevBasket => prevBasket.filter(cocktail => cocktail.idDrink !== id));
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = (): BasketContextType => {
    const context = useContext(BasketContext);
    if (context === undefined) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};
