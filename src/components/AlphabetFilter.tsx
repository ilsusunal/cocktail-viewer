interface AlphabetFilterProps {
    letters: string[];
    selectedLetter: string;
    onSelectLetter: (letter: string) => void;
}

export default function AlphabetFilter({ letters, selectedLetter, onSelectLetter }: AlphabetFilterProps) {
    return (
        <div className="flex flex-wrap justify-center my-8 gap-4">
            {letters.map(letter => (
                <button
                    key={letter}
                    onClick={() => onSelectLetter(letter)}
                    className={ letter === selectedLetter ? "text-amber-600 text-lg font-black underline" : "text-gray-800 text-lg font-black"}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
