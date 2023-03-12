import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ chidlren }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeProvider value={{ darkMode, toggleDarkMode }}>
      {chidlren}
    </DarkModeProvider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
