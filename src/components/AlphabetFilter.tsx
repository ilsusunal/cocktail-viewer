interface AlphabetFilterProps {
    letters: string[];
    selectedLetter: string;
    onSelectLetter: (letter: string) => void;
}

export default function AlphabetFilter({ letters, selectedLetter, onSelectLetter }: AlphabetFilterProps) {
    return (
        <div className="flex flex-wrap justify-center my-8 gap-4 text-lg font-bold ">
            {letters.map(letter => (
                <button
                    key={letter}
                    onClick={() => onSelectLetter(letter)}
                    className={ letter === selectedLetter ? "text-mainBlue  underline underline-offset-1 decoration-4 decoration-mainYellow" : "text-accentDark"}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
