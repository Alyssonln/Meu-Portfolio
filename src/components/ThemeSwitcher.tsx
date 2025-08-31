import { useTheme } from "../themes/ThemeProvider";
import clsx from "clsx";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const Btn = (key: typeof theme, label: string) => (
    <button
      key={key}
      className={clsx("btn", theme === key ? "primary" : "ghost", "ts-btn")}
      onClick={() => setTheme(key)}
      aria-pressed={theme === key}
      title={`Tema ${label}`}
    >
      {label}
    </button>
  );

  return (
    <>
      <style>{`
        /* desktop (default): botões lado a lado */
        .ts-switcher { display: flex; gap: 8px; }

        /* mobile (drawer): empilha verticalmente */
        @media (max-width: 768px) {
          .ts-switcher { 
            flex-direction: column; 
            align-items: stretch; 
            gap: 10px;
          }
          .ts-switcher .ts-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="ts-switcher">
        {Btn("dev", "Dev")}
        {Btn("space", "Space")}
        {Btn("gamer", "Gamer")}
      </div>
    </>
  );
}
