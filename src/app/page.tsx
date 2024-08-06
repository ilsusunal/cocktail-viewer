import { fetchCocktailCategories, fetchIngredients } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const categories = await fetchCocktailCategories();
  const ingredients = await fetchIngredients();

  return (
    <main className="max-w-6xl mx-auto m-8">
      <div className="border-solid border-4 border-amber-600 rounded-3xl p-12 m-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Cocktail Viewer!</h1>
        <p>This is an assignment made by using CocktailDB. You can browse cocktails by name after login. If you like a cocktail, you can add them to your basket and save them to your recipe list.</p>
        <Link href="/search">
          <p className="text-amber-600 p-2 hover:text-gray-800 hover:underline">Check Out Cocktails</p>
        </Link>
      </div>
      <div className="flex flex-col items-center m-8">
        <h1 className="text-xl font-bold mb-4">Categories</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <li key={index} className="bg-gray-800 text-white rounded-full py-2 px-4">
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center m-8">
        <h1 className="text-xl font-bold mb-4">Popular Ingredients</h1>
        <div className="flex flex-wrap gap-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex flex-col items-center text-center justify-center">
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className="w-24 h-24 mb-2 object-cover"
            />
            <p className="text-amber-600 p-2">{ingredient.name}</p>
          </div>
          ))}
        </div>
      </div>
    </main>
  );
}
