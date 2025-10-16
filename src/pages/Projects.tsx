import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="projectsSection">

      <div className="projectsGrid">
        {/* WEB */}
        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Clínica Mind"
            description="Sistema para clínicas com autenticação, agenda, cadastro de pacientes e profissionais, finanças e múltiplos perfis."
            img="/img/mind-clinica.png"
            siteUrl="https://mindclinicapsi.com.br/"
            repoUrl="https://github.com/Alyssonln/Gestao-Clinica"
          />
        </div>

        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Carteira Pessoal"
            description="Aplicação web para controle de finanças pessoais, com registro de entradas e saídas, cálculo automático de saldo e filtro por mês."
            img="/img/mypocket.png"            /* coloque sua capa aqui */
            siteUrl="https://mypocket-portfolio.vercel.app"  /* landing/demo se tiver */
            repoUrl="https://github.com/Alyssonln/mypocket-portfolio"
          />
        </div>
      </div>
    </section>
  );
}
