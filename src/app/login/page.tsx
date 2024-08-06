import LoginPage from "./LoginPage";

export const metadata = {
    title: "Login - The Cocktail Viewer",
};
export default function Page() {
    return (
        <main className="max-w-6xl my-8">
            <LoginPage />
        </main>
    )
}