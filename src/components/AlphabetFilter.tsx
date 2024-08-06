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
                    className="text-gray-800 text-lg font-black active:underline"
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
