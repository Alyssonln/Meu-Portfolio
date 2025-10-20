import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  img: string;  
  siteUrl: string;
  repoUrl: string; 
};

export default function Card({ title, description, tags, img, siteUrl, repoUrl }: CardProps) {
  return (
    <motion.article
      className="card p4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      <div
        className="round"
        style={{
          overflow: "hidden",
          border: "1px solid var(--outline)",
          aspectRatio: "16 / 9",
          background: "color-mix(in oklab, var(--surface), #ffffff 2%)",
        }}
      >
        <img
          src={img}
          alt={`Capa do projeto ${title}`}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h3 className="h3 mt3">{title}</h3>
      <p className="mt2 text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mt3" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      <div className="mt3" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a
          className="btn primary"
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir site do projeto ${title}`}
        >
          <ExternalLink size={18} /> Ver site
        </a>
        <a
          className="btn"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir repositório do projeto ${title} no GitHub`}
        >
          <Github size={18} /> Repositório
        </a>
      </div>
    </motion.article>
  );
}
