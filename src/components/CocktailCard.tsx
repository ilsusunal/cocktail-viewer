import { useBasket } from "@/context/BasketContext";
import { Cocktail } from "@/models/cocktail";

interface CocktailCardProps {
    cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
    const { addToBasket } = useBasket();
    
    return (
        <div className=" hover:text-white bg-zinc-100 hover:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-48 object-cover rounded border-2 border-zinc-100" />
            <p className="text-sm mt-2">{cocktail.strCategory} | {cocktail.strAlcoholic}</p>
            <h3 className="text-lg font-bold my-2">{cocktail.strDrink}</h3>
            <p className="text-sm mt-2">Blablabla</p>
            <button
                onClick={() => addToBasket(cocktail)}
                className="mt-2 bg-amber-500 hover:bg-amber-800 text-white py-1 px-3 rounded-full"
            >
                Add to Basket
            </button>
        </div>
    );
}
