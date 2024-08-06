import SearchPage from "./SearchPage";

export const metadata = {
    title: "Search Cocktail - The Cocktail Viewer",
  };

export default function Page(){
    return(
        <main className="max-w-6xl my-8">
            <SearchPage/>
        </main>
    )
}