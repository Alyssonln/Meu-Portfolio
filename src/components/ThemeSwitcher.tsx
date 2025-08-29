import { useTheme } from "../themes/ThemeProvider";
import clsx from "clsx";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const Btn = (key: typeof theme, label: string) => (
    <button
      key={key}
      className={clsx("btn", theme === key ? "primary" : "ghost")}
      onClick={() => setTheme(key)}
      aria-pressed={theme === key}
      title={`Tema ${label}`}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {Btn("dev", "Dev")}
      {Btn("gamer", "Gamer")}
      {Btn("space", "Space")}
    </div>
  );
}
