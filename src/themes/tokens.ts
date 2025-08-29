// Design tokens e paletas dos 3 temas

export type ThemeKey = "dev" | "gamer" | "space";

export type ThemeTokens = {
  name: ThemeKey;
  // cores principais
  bg: string;        // fundo base
  surface: string;   // cartões/superfícies
  text: string;      // texto padrão
  muted: string;     // texto secundário
  accent: string;    // cor de destaque principal
  accent2: string;   // cor de destaque secundária
  outline: string;   // bordas sutis
  // gradiente para hero/header
  gradientFrom: string;
  gradientTo: string;
};

export const THEMES: Record<ThemeKey, ThemeTokens> = {
  dev: {
    name: "dev",
    // inspirado no computador com "Hello World" (tela teal + tons bege)
    bg: "#0e1114",
    surface: "#171b21",
    text: "#f3f6f7",
    muted: "#b6c3c7",
    accent: "#55cfc6",     // teal da tela
    accent2: "#d2b690",    // bege retrô
    outline: "#24303a",
    gradientFrom: "#0f1520",
    gradientTo: "#1e2a36",
  },
  gamer: {
    name: "gamer",
    // inspirado no controle SNES (cinzas + lilás/roxo)
    bg: "#0f0f12",
    surface: "#191a1f",
    text: "#f5f6fa",
    muted: "#b7b9c6",
    accent: "#9b87f5",     // lilás
    accent2: "#6b5bd6",    // roxo
    outline: "#2a2b33",
    gradientFrom: "#1a1b22",
    gradientTo: "#3a2f5f",
  },
  space: {
    name: "space",
    // inspirado no OVNI/astronauta (cinza espacial + vermelho borda)
    bg: "#0b1320",
    surface: "#151e2d",
    text: "#eef2ff",
    muted: "#a9b3c7",
    accent: "#ff445a",     // vermelho bordo
    accent2: "#46d6ff",    // ciano espacial
    outline: "#233046",
    gradientFrom: "#0f1a2f",
    gradientTo: "#2b3b6e",
  },
};

// chave do localStorage
export const THEME_STORAGE_KEY = "portfolio.theme";
