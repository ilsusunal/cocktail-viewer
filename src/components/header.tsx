import SideNav from "./SideNav";


export default function Header(){
    return(
        <header className="border-b-2 border-accentBlue text-accentDark/80  flex justify-around items-center">
            <h1 className="text-2xl border-r-2 border-accentBlue px-8 py-2">The Cocktail Viewer</h1>
            <SideNav/>
        </header>
    )
}