import { motion } from "framer-motion";
import { useTheme } from "../themes/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  const cover = {
    dev: "/img/theme-dev.png",
    gamer: "/img/theme-gamer.png",
    space: "/img/theme-space.png",
  }[theme];

  return (
    <>
      <section className="grid grid-2" style={{ alignItems: "center" }}>
        <div>
          <h1 className="h1">
            Oi, eu sou <span style={{ color: "var(--accent)" }}>dev</span> e curto animes, games, espaço e código.
          </h1>
          <p className="mt3 text-muted">
            Este portfólio tem <strong>3 temas</strong>. Use o trocador no topo para navegar por visuais diferentes.
          </p>
          <div className="mt4" style={{ display: "flex", gap: 10 }}>
            <a className="btn primary" href="#projects">Ver Projetos</a>
            <a className="btn" href="#about">Sobre mim</a>
          </div>
        </div>
        <motion.div
          className="center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
        >
          <img
            className="round"
            src={cover}
            alt="tema-capa"
            style={{ maxHeight: 320, border: "1px solid var(--outline)" }}
          />
        </motion.div>
      </section>

      <hr className="sep mt5" />

      <section id="features" className="grid grid-3 mt5">
        {[
          { t: "Animações suaves", d: "Framer Motion para entradas e interações." },
          { t: "3 temas", d: "Dev, Gamer e Space com paletas próprias." },
          { t: "Design tokens", d: "Cores centralizadas para fácil manutenção." },
        ].map((f) => (
          <div key={f.t} className="card p4">
            <h3 className="h3">{f.t}</h3>
            <p className="mt2 text-muted">{f.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
