import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="projectsSection">

      <article className="featuredProject">
        <span className="featuredBadge">Projeto destaque</span>

        <div className="featuredContent">
          <header className="featuredHeader">
            <h2 className="h2">Clínica Mind</h2>
            <p className="featuredSubtitle">
              Meu primeiro trabalho freelancer e também meu sistema mais completo.
              Desenvolvi front-end e back-end com autenticação, agenda, cadastro de
              clientes e profissionais, finanças e integração com banco de dados.
            </p>
          </header>

          <div className="featuredTags">
  <span className="tag">React + TypeScript</span>
  <span className="tag">Vite</span>
  <span className="tag">Firebase (Auth / Firestore / Functions)</span>
  <span className="tag">Cloud Hosting</span>
</div>


          <div className="featuredActions">
            <a
              className="btn primary"
              href="https://mindclinicapsi.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Ver site
            </a>
            <a
              className="btn"
              href="https://github.com/Alyssonln/Gestao-Clinica"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          </div>
        </div>

        <div className="featuredMedia">
          <img
            src="/img/mind-clinica.png"
            alt="Capa do projeto Clínica Mind"
            loading="lazy"
          />
        </div>
      </article>

      <div className="projectsHeader">
        <h2>Outros projetos</h2>
        <p>Algumas aplicações web que desenvolvi para estudo e portfólio.</p>
      </div>

      <div className="projectsGrid">
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

        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Site Portfólio"
            description="Meu portfólio pessoal, desenvolvido com foco em performance e design, reúne meus principais projetos e demonstra minha evolução como desenvolvedor."
            img="/img/portfolio.png"
            siteUrl="https://alyssonln-portfolio.vercel.app/"
            repoUrl="https://github.com/Alyssonln/Meu-Portfolio"
          />
        </div>

        <div className="projectItem">
          <span className="projectBadge">Web</span>
          <Card
            title="Calculadora"
            description="Calculadora simples e responsiva, ideal para práticas de UI, formatação e operações básicas."
            img="/img/calculadora.png"
            siteUrl="https://calculadora-aln.vercel.app/"
            repoUrl="https://github.com/Alyssonln/Calculadora"
          />
        </div>
      </div>
    </section>
  );
}
