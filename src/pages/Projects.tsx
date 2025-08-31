import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="grid grid-3 mt5">
      <Card
        title="MyPocket (Finanças)"
        description="App web de controle financeiro com entradas, edições e visão de saldo."
        img="/img/theme-gamer.png"                 /* troque pela capa real, ex: /img/mypocket.png */
        siteUrl="https://seu-site-mypocket.com"    /* link real do deploy */
        repoUrl="https://github.com/Alyssonln/mypocket"
        tags={["React", "TypeScript", "LocalStorage"]}
      />

      <Card
        title="Sistema Clínica"
        description="Sistema para clínicas com autenticação, agenda e múltiplos perfis."
        img="/img/theme-space.png"                 /* ex: /img/clinica.png */
        siteUrl="https://seu-site-clinica.com"
        repoUrl="https://github.com/Alyssonln/sistema-clinica"
        tags={["React", "Firebase", "UI/UX"]}
      />

      <Card
        title="Portfólio Multitemas"
        description="Este site — 3 temas, design tokens e animações com Framer Motion."
        img="/img/theme-dev.png"                   /* ex: /img/portfolio.png */
        siteUrl="https://seu-portfolio.com"
        repoUrl="https://github.com/Alyssonln/portfolio-multitemas"
        tags={["Vite", "Design Tokens", "Animations"]}
      />
    </section>
  );
}
