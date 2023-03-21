import React from 'react'
interface IThemeContext {
  theme: string;
  setTheme?:React.Dispatch<React.SetStateAction<string>>
}

export const themes = {
  dark: 'dark',
  light: 'light',
}

export const ThemeContext = React.createContext<IThemeContext>({theme:themes.dark})