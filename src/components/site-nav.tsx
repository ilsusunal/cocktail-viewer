import Link from "next/link";
//import { usePathname } from "next/navigation"

const siteRoutes = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/login', label: 'Login' },
    { href: '/saved', label: 'Saved Cocktails' },
];

export default function SiteNav() {
    //const pathname = usePathname();

    return (
        <nav>
            <ul className="flex gap-x-4">
                {siteRoutes.map((siteRoute) => (
                    <li key={siteRoute.href}>
                        <Link 
                            href={siteRoute.href} 
                            
                        >
                            {siteRoute.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}