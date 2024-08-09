import { Cocktail } from "@/models/cocktail";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function fetchCocktailsByName(name: string): Promise<Cocktail[]> {
    const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
    const data = await response.json();
    return data.drinks || [];
}

export async function fetchCocktailsByLetter(letter: string): Promise<Cocktail[]> {
    const response = await fetch(`${BASE_URL}/search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks || [];
}

export async function fetchCocktailCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/list.php?c=list`);
    const data = await response.json();
    return data.drinks.map((category: { strCategory: string }) => category.strCategory) || [];
}


export async function fetchIngredients(): Promise<{ name: string; image: string }[]> {
    const response = await fetch(`${BASE_URL}/list.php?i=list`);
    const data = await response.json();

    const ingredients = data.drinks
        .map((item: { [key: string]: string }) => item['strIngredient1'])
        .filter((ingredient: string) => ingredient.trim().split(' ').length === 1)
        .slice(0, 8);

    return ingredients.map((ingredient: string) => ({
        name: ingredient,
        image: `https://www.thecocktaildb.com/images/ingredients/${ingredient.toLowerCase()}.png`,
    }));
}
