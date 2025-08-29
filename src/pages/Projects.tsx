import Card from "../components/Card";

export default function Projects() {
  const items = [
    {
      title: "MyPocket (Finanças)",
      description: "App web de controle financeiro com entrada, edição e saldo.",
      tags: ["JS", "UI/UX", "LocalStorage"],
      img: "/img/theme-gamer.png",
      link: "#",
    },
    {
      title: "Sistema Clínica",
      description: "React + Firebase (Auth + Firestore) com múltiplos perfis.",
      tags: ["React", "TS", "Firebase"],
      img: "/img/theme-space.png",
      link: "#",
    },
    {
      title: "Portfolio Multi-temas",
      description: "Este site — Vite + React + Framer Motion.",
      tags: ["Vite", "Design Tokens", "Animations"],
      img: "/img/theme-dev.png",   // atualizado para Dev
    },
  ];
  return (
    <section id="projects" className="grid grid-3">
      {items.map((p) => (
        <Card key={p.title} {...p} />
      ))}
    </section>
  );
}
