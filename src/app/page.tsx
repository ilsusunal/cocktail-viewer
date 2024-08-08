import { fetchCocktailCategories, fetchIngredients } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const categories = await fetchCocktailCategories();
  const ingredients = await fetchIngredients();

  return (
    <main className="max-w-6xl mx-auto m-2 lg:m-4">
      <div className="border-solid border-4 border-amber-600 rounded-3xl p-12 m-4 lg:m-8 lg:flex-row flex flex-col">
        <img src="./cocktail-viewer.png" alt="Welcome" className="w-auto h-48 lg:h-96 mr-16 mb-4" />
        <div className="justify-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2 lg:mb-12">Welcome to the Cocktail Viewer!</h1>
          <p>This assignment uses CocktailDB. You can browse cocktails by name. If you like a cocktail, you can add it to your basket and save it to your recipe list.</p>
          <p>You need to be logged in to add cocktails to your basket and save them to your list, which you can view in the top right corner after logging in.</p>
          <div className="flex justify-around lg:mt-8 mt-2">
            <Link href="/login">
              <div className="flex items-center">
                <p className="text-amber-600 p-2 hover:text-gray-800 hover:underline text-lg font-medium">Login</p> 
                <img src="./arrow-right.svg" alt="Login" className="w-6 h-6" />
              </div>
            </Link>
            <Link href="/cocktails">
            <div className="flex items-center">
              <p className="text-amber-600 p-2 hover:text-gray-800 hover:underline text-lg font-medium">Check Out Cocktails</p>
              <img src="./arrow-right.svg" alt="Cocktails" className="w-6 h-6" />
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-12 border-b-2 border-amber-600 pb-8">
        <h1 className="text-2xl font-bold my-8">Categories</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <li key={index} className="bg-gray-800 text-white rounded-full py-2 px-4">
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center m-8">
        <h1 className="text-2xl font-bold my-8">Popular Ingredients</h1>
        <div className="flex flex-wrap gap-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex flex-col items-center flex-grow text-center justify-center">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-24 h-24 lg:w-52 lg:h-52 mb-2 object-cover"
              />
              <p className="text-amber-600 p-2">{ingredient.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
