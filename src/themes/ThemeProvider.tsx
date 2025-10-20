import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { THEMES, THEME_STORAGE_KEY } from "./tokens";
import type { ThemeKey, ThemeTokens } from "./tokens";

type ThemeContextValue = {
  theme: ThemeKey;
  tokens: ThemeTokens;
  setTheme: (t: ThemeKey) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const order: ThemeKey[] = ["dev", "gamer", "space"];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeKey | null;

    return saved && THEMES[saved] ? saved : "dev";
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);

    const t = THEMES[theme];
    const root = document.documentElement.style;
    root.setProperty("--bg", t.bg);
    root.setProperty("--surface", t.surface);
    root.setProperty("--text", t.text);
    root.setProperty("--muted", t.muted);
    root.setProperty("--accent", t.accent);
    root.setProperty("--accent2", t.accent2);
    root.setProperty("--outline", t.outline);
    root.setProperty("--grad-from", t.gradientFrom);
    root.setProperty("--grad-to", t.gradientTo);
  }, [theme]);

  const setTheme = (t: ThemeKey) => setThemeState(t);
  const cycleTheme = () =>
    setThemeState((cur) => order[(order.indexOf(cur) + 1) % order.length]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, tokens: THEMES[theme], setTheme, cycleTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
