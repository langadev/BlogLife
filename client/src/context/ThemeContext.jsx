import  { createContext, useState } from 'react';

// Cria o contexto
export const ThemeContext = createContext();

// Cria o provedor de contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado para armazenar o tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
