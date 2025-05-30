'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { storageManager } from '../utils/storageManager';
import { LOCALSTORAGE_KEY } from '../constants/localStorage';

type ThemeType = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const themeLs: ThemeType = storageManager.getItem(LOCALSTORAGE_KEY.THEME) ?? 'dark';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(themeLs);

  useEffect(() => {
    // Apply theme class to body
    storageManager.setItem(LOCALSTORAGE_KEY.THEME, theme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    document.body.dataset.theme = theme;

  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
