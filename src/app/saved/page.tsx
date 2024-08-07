import ProtectedPage from "@/components/ProtectedPage";
import SavedPage from "./SavedPage";

export const metadata = {
    title: "Saved Cocktails - The Cocktail Viewer",
};

export default function Page() {
    return (
        <ProtectedPage showWarning={true}>
            <main className="max-w-6xl my-8">
                <SavedPage />
            </main>
        </ProtectedPage>
    )
}