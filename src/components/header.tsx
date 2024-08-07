import SideNav from "./SideNav";


export default function Header(){
    return(
        <header className="bg-amber-600 text-white p-6 flex justify-around items-center">
            <h1 className="text-2xl">The Cocktail Viewer</h1>
            <SideNav/>
        </header>
    )
}