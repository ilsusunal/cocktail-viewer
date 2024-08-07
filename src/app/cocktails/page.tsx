import SearchPage from "./SearchPage";

export const metadata = {
    title: "Search Cocktail - The Cocktail Viewer",
  };

export default function Page(){
    return(
        <main className="w-6xl mx-auto my-8 px-4">
            <SearchPage/>
        </main>
    )
}