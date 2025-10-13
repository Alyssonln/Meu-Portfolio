import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="projectsSection">

      <div className="projectsGrid">
        {/* WEB */}
        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Sistema Clínica"
            description="Sistema para clínicas com autenticação, agenda, cadastro de pacientes e profissionais, finanças e múltiplos perfis."
            img="/img/mind-clinica.png"
            siteUrl="https://mindclinicapsi.com.br/"
            repoUrl="https://github.com/Alyssonln/Gestao-Clinica-"
          />
        </div>

        {/* MOBILE */}
        <div className="projectItem">
          <span className="projectBadge">Mobile</span>
          <Card
            title="Sistema Clínica (Mobile)"
            description="Versão mobile do sistema, focada em agenda e prontuários no bolso."
            img="/img/mobile-cover.png"            /* coloque sua capa aqui */
            siteUrl="https://seu-site-clinica.com"  /* landing/demo se tiver */
            repoUrl="https://github.com/Alyssonln/sistema-clinica"
          />
        </div>
      </div>
    </section>
  );
}
