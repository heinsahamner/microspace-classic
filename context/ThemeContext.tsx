import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light'); 
  const [accentColor, setAccentColor] = useState<string>('#7900c5'); // Roxo Assinatura LW
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.style.setProperty('--accent-color', accentColor);
    
    const hex = accentColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    root.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);

  }, [theme, accentColor]);

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      accentColor,
      setAccentColor,
      isSearchOpen,
      setIsSearchOpen,
      isSettingsOpen,
      setIsSettingsOpen,
      isAboutOpen,
      setIsAboutOpen
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
