import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="app-hero">
      <div className="container p4" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "space-between",
          }}
        >
          {/* Esquerda: Logo / imagem */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/img/logo-img.png"   // troque pelo nome real da sua imagem
              alt="Logo Alysson Nunes"
              style={{
                height: 45,          // <-- aumentei aqui
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Direita: Apenas ThemeSwitcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
