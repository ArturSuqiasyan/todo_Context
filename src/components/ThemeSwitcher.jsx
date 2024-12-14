import { useState } from "react";

export const ThemeSwitcher = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    onThemeChange(!isDarkMode ? "dark" : "light"); 
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};