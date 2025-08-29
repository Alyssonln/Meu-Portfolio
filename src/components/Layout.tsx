import { Github, Linkedin, Instagram } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="container" style={{ paddingTop: 28, paddingBottom: 48 }}>
        {children}
      </main>
      <footer
        className="container p4 text-muted"
        style={{
          borderTop: "1px solid var(--outline)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <small>
          © {new Date().getFullYear()} Alysson Nunes
        </small>

        {/* Ícones sociais no footer */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            className="btn"
            href="https://www.linkedin.com/in/alysson-nunes"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="btn"
            href="https://github.com/Alyssonln"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="btn"
            href="https://www.instagram.com/alyssonlnunes/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
