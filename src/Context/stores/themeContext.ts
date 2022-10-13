import { createContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export type ThemeType = {
  foreground: string;
  background: string;
};

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.dark,
  toggleTheme: () => {},
});
