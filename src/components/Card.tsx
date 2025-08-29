import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  img?: string;
  link?: string;
};

export default function Card({ title, description, tags, img, link }: CardProps) {
  return (
    <motion.article
      className="card p4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      {img && (
        <div className="round" style={{ overflow: "hidden", border: "1px solid var(--outline)" }}>
          <img src={img} alt="" />
        </div>
      )}
      <h3 className="h3 mt3">{title}</h3>
      <p className="mt2 text-muted">{description}</p>
      {tags && (
        <div className="mt3" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
      {link && (
        <a className="btn primary mt3" href={link} target="_blank" rel="noreferrer">Ver projeto</a>
      )}
    </motion.article>
  );
}
