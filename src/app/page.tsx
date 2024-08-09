import { fetchCocktailCategories, fetchIngredients } from "@/lib/api";
import Link from "next/link";
import Image from 'next/image';

export default async function Home() {
  const categories = await fetchCocktailCategories();
  const ingredients = await fetchIngredients();

  return (
    <main className="max-w-6xl mx-auto m-2 lg:m-4">
      <div className="border-2 border-accentBlue rounded-3xl p-12 m-4 lg:m-8 lg:flex-row flex flex-col">
        <div className="justify-center flex flex-col gap-4">
          <p className="px-20  text-mainOrange">+ Browse cocktails by name <br /> + Log in and save the recipes </p>
          <h1 className="text-5xl text-mainBlue underline underline-offset-1 decoration-4 decoration-mainYellow font-bold mb-2 lg:mb-8">
            Welcome to the Cocktail Viewer!
          </h1>
          <div className="px-20 space-y-2 text-accentDark ">
            <p>This assignment uses CocktailDB. You can browse cocktails by name. If you like a cocktail, you can add it to your basket and save it to your recipe list.</p>
            <p>You need to be logged in to add cocktails to your basket and save them to your list, which you can view in the top right corner after logging in.</p>
          </div>
            <Link href="/login">
              <div className="flex items-center my-2 px-20">
                <p className="text-accentLight bg-mainOrange hover:bg-mainBlue rounded py-1 px-6 text-lg font-medium">Login</p>
              </div>
            </Link>
        </div>
        <img src="./cocktail-viewer.png" alt="Welcome" className="w-auto h-48 lg:h-96 mr-16 mb-4" />
      </div>

      {/*Category Section*/}
      <div className="flex flex-col items-center m-12 border-b-2 border-accentBlue pb-16">
        <h1 className="text-2xl text-mainBlue underline underline-offset-1 decoration-4 decoration-mainYellow font-bold my-8">Categories</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <li key={index} className="border-2 border-accentBlue hover:border-mainOrange text-accentDark rounded py-2 px-4">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/*Ingredient Section*/}
      <div className="flex flex-col items-center m-8">
        <h1 className="text-2xl text-mainBlue underline underline-offset-1 decoration-4 decoration-mainYellow font-bold my-8">Popular Ingredients</h1>
        <div className="flex flex-wrap gap-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex flex-col items-center flex-grow text-center justify-center p-2 hover:border-b-2 border-mainOrange">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-24 h-24 lg:w-52 lg:h-52 mb-2 object-cover"
              />
              <p className="text-accentDark p-2">{ingredient.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
