import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    }, [window])

    //T por que é genérico - posso receber uma string, int, bool
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}