import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
        setItem(parsedItem);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };