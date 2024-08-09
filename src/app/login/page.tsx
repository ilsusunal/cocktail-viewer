import LoginPage from "./LoginPage";

export const metadata = {
    title: "Login - The Cocktail Viewer",
};
export default async function Page() {
    return (
        <main className="max-w-5xl m-4 lg:m-20">
            <LoginPage />
        </main>
    )
}