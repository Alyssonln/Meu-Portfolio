import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="app-hero">
      <style>{`
        /* Desktop: theme switcher inline; botão hambúrguer escondido */
        @media (min-width: 769px) {
          .ts-inline { display: block; }
          .ts-hamburger { display: none; }
        }
        /* Mobile: esconde inline, mostra hambúrguer */
        @media (max-width: 768px) {
          .ts-inline { display: none; }
          .ts-hamburger { display: inline-flex; }
        }
        .ts-drawer-backdrop {
          position: fixed; inset: 0; background: rgba(0,0,0,.35); z-index: 30;
        }
        .ts-drawer {
          position: fixed; right: 12px; top: 12px; z-index: 31;
          border: 1px solid var(--outline);
          border-radius: var(--radius);
          background: linear-gradient(180deg, color-mix(in oklab, var(--surface), #fff 3%), var(--surface));
          box-shadow: var(--shadow);
          padding: 12px;
          min-width: 240px;
        }
        .ts-drawer h4 { margin: 4px 0 10px; font-weight: 600; }
      `}</style>

      <div className="container p4" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/img/logo-img.png"
              alt="Logo Alysson Nunes"
              style={{
                height: 45,
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          </div>

          <div className="ts-inline">
            <ThemeSwitcher />
          </div>

          <button
            className="btn ts-hamburger"
            aria-label="Abrir menu de temas"
            onClick={() => setOpen(true)}
            title="Temas"
          >
            <span style={{ display: "inline-block", lineHeight: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="2" rx="1" />
                <rect x="3" y="11" width="18" height="2" rx="1" />
                <rect x="3" y="16" width="18" height="2" rx="1" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="ts-drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="ts-drawer">
            <h4>Temas</h4>
            <ThemeSwitcher />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
              <button className="btn" onClick={() => setOpen(false)}>Fechar</button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
