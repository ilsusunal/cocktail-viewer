import SearchPage from "./SearchPage";

export const metadata = {
    title: "Search Cocktail - The Cocktail Viewer",
  };

export default function Page(){
    return(
        <main className="w-6xl my-8 mx-4">
            <SearchPage/>
        </main>
    )
}