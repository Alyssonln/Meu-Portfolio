import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="grid grid-3 mt5">
      <Card
        title="Sistema Clínica"
        description="Sistema para clínicas com autenticação, agenda e múltiplos perfis."
        img="/img/mind-clinica.png"                 
        siteUrl="https://mindclinicapsi.com.br/"    
        repoUrl="https://github.com/Alyssonln/Gestao-Clinica-"
        tags={["React", "Vite", "Typescript", "Css3", "Framer Motion", "Lucide", "Firebase", "Firestore", "Hosting"]}
      />

      <Card
        title="Sistema Clínica"
        description="Sistema para clínicas com autenticação, agenda e múltiplos perfis."
        img="/img/"                 /* ex: /img/clinica.png */
        siteUrl="https://seu-site-clinica.com"
        repoUrl="https://github.com/Alyssonln/sistema-clinica"
        tags={["React", "Vite", "Typescript", "Css3", "Framer Motion", "Lucide", "Firebase", "Firestore", "Hosting"]}
      />

      <Card
        title="Portfólio Multitemas"
        description="Este site — 3 temas, design tokens e animações com Framer Motion."
        img="/img/"                   /* ex: /img/portfolio.png */
        siteUrl="https://seu-portfolio.com"
        repoUrl="https://github.com/Alyssonln/portfolio-multitemas"
        tags={["Vite", "Design Tokens", "Animations"]}
      />
    </section>
  );
}
