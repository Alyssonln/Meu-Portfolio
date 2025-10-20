import { Github, Linkedin, Instagram } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <style>{`
        @media (max-width: 768px) {
          .footer-wrap {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-social {
            width: 100%;
            display: flex;
            gap: 10px;
          }
        }
      `}</style>

      <main className="container" style={{ paddingTop: 28, paddingBottom: 48 }}>
        {children}
      </main>

      <footer
        className="container p4 text-muted footer-wrap"
        style={{
          borderTop: "1px solid var(--outline)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <small>© {new Date().getFullYear()} Alysson Nunes</small>

        <div className="footer-social" style={{ display: "flex", gap: 10 }}>
          <a
            className="btn"
            href="https://www.linkedin.com/in/alysson-nunes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="btn"
            href="https://github.com/Alyssonln"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="btn"
            href="https://www.instagram.com/alyssonlnunes/"
            target="_blank"
            rel="noopener noreferrer"
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
