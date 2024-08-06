"use client"

export default function Basket({ isOpen, onClose, items }: { isOpen: boolean, onClose: () => void, items: any[] }) {
    if (!isOpen) return null;
    return (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 border border-gray-200 z-50">
            <h2 className="text-xl font-bold mb-4 px-4 py-2">Basket</h2>
            <ul className="px-4 py-2">
                {items.length === 0 ? (
                    <li>Your basket is empty.</li>
                ) : (
                    items.map((item, index) => (
                        <li key={index} className="py-1 border-b border-gray-200">{item.name}</li>
                    ))
                )}
            </ul>
        </div>
    )
}