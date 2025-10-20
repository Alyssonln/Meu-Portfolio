export type ThemeKey = "dev" | "gamer" | "space";

export type ThemeTokens = {
  name: ThemeKey;
  bg: string;   
  surface: string; 
  text: string; 
  muted: string; 
  accent: string;  
  accent2: string;   
  outline: string; 
  gradientFrom: string;
  gradientTo: string;
};

export const THEMES: Record<ThemeKey, ThemeTokens> = {
  dev: {
    name: "dev",
    bg: "#0e1114",
    surface: "#171b21",
    text: "#f3f6f7",
    muted: "#b6c3c7",
    accent: "#55cfc6",     
    accent2: "#d2b690",    
    outline: "#24303a",
    gradientFrom: "#0f1520",
    gradientTo: "#1e2a36",
  },
  gamer: {
    name: "gamer",
    bg: "#0f0f12",
    surface: "#191a1f",
    text: "#f5f6fa",
    muted: "#b7b9c6",
    accent: "#9b87f5",  
    accent2: "#6b5bd6", 
    outline: "#2a2b33",
    gradientFrom: "#1a1b22",
    gradientTo: "#3a2f5f",
  },
  space: {
    name: "space",
    bg: "#0b1320",
    surface: "#151e2d",
    text: "#eef2ff",
    muted: "#a9b3c7",
    accent: "#ff445a",    
    accent2: "#46d6ff",   
    outline: "#233046",
    gradientFrom: "#0f1a2f",
    gradientTo: "#2b3b6e",
  },
};

export const THEME_STORAGE_KEY = "portfolio.theme";
