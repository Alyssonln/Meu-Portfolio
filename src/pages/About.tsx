export default function About() {
  return (
    <section id="about" className="grid grid-2" style={{ alignItems: "center" }}>
      <div>
        <h2 className="h2">Sobre mim</h2>
        <p className="mt3 text-muted">
          Desenvolvedor focado em experiências web rápidas e bem cuidadas.
          Gosto de <strong>animes</strong>, <strong>games</strong>, <strong>espaço sideral</strong> e muito <strong>código</strong>.
        </p>
        <p className="mt2 text-muted">
          Este projeto demonstra um setup enxuto com <em>design tokens</em>, troca de temas e
          uma base pronta para crescer (rotas, CMS, deploy).
        </p>
      </div>
      <div className="card p4">
        <h3 className="h3">Stack</h3>
        <ul className="mt2 text-muted" style={{ lineHeight: 1.8 }}>
          <li>React + Vite (TypeScript)</li>
          <li>Framer Motion para animações</li>
          <li>Lucide Icons</li>
          <li>CSS puro com variáveis</li>
        </ul>
      </div>
    </section>
  );
}
