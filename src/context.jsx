import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
const [searchTerm,setSearchTerm] = useState('dog')  

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
  }
  return (
    <AppContext.Provider value={{ isDarkTheme,toggleTheme,searchTerm,setSearchTerm }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
