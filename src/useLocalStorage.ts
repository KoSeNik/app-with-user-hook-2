import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
      setItem: (value: LocalStorageSetValue) => void;
      removeItem: () => void;
    },
  ];


export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : null;
  });

  const setItem = (newValue: LocalStorageSetValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue)
  }

  const removeItem = () => {
    localStorage.removeItem(key)
    setValue(null)
  }

  return [value, {setItem, removeItem}];
}
