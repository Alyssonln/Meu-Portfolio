import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="projectsSection">

      {/* wrapper com rolagem horizontal */}
      <div className="projectsScroll">
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
            img="/img/mypocket.png"
            siteUrl="https://mypocket-portfolio.vercel.app"
            repoUrl="https://github.com/Alyssonln/mypocket-portfolio"
          />
        </div>

        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Clíma Hoje"
            description="Aplicação web que exibe a previsão do tempo em tempo real, com busca por cidade e interface leve e responsiva."
            img="/img/weather.png"
            siteUrl="https://weather-app-alyssonln.vercel.app/"
            repoUrl="https://github.com/Alyssonln/Weather"
          />
        </div>
      </div>
    </section>
  );
}
