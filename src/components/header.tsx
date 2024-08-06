import SiteNav from "./site-nav";

export default function Header(){
    return(
        <header className="bg-amber-600 text-white p-6 flex justify-around">
            <h1 className="text-2xl">The Cocktail Viewer</h1>
            <SiteNav/>
        </header>
    )
}