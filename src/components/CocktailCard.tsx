import { Cocktail } from "@/models/cocktail";

interface CocktailCardProps {
    cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
    return (
        <div className="border rounded shadow-md p-4">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{cocktail.strDrink}</h3>
        </div>
    );
}
