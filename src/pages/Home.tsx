import { motion } from "framer-motion";
import { useTheme } from "../themes/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  const cover =
    {
      dev: "/img/theme-dev.png",
      gamer: "/img/theme-gamer.png",
      space: "/img/theme-space.png",
    }[theme];

  return (
    <>
      <section className="grid grid-2" style={{ alignItems: "center" }}>
        <div>
          <h1 className="h1">
            Oi, eu me chamo <span style={{ color: "var(--accent)" }}>Alysson</span> e este site reúne meus principais projetos.
          </h1>
          <p className="mt3 text-muted">
            Separei alguns dos <strong>meus projetos</strong> favoritos pra você conhecer minhas habilidades como dev.
          </p>
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
      {/* os cards foram movidos para pages/Projects.tsx */}
    </>
  );
}
