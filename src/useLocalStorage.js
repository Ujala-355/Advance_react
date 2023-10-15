import React, { useState, useEffect } from "react";
const getSavedValue = (key, value) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue !== null) {
    return savedValue;
  }
  return value;
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
