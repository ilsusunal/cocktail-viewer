import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    const getInitialValue = () => {
        if (typeof window === 'undefined') return initialValue;
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    };

    const [value, setValue] = useState<T>(getInitialValue);

    const setLocalStorageValue = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };

    return [value, setLocalStorageValue] as const;
}

export default useLocalStorage;
