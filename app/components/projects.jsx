"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  const items = data?.projects;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="projects" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2px;
          background: rgba(59,130,246,0.05);
        }
        .pp-project-card {
          background: #02030a;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid transparent;
        }
        .pp-project-card:hover { 
          background: rgba(59,130,246,0.02);
          border-color: rgba(59,130,246,0.1);
        }
        .pp-project-card::before {
          content: ''; position: absolute; left: 0; top: 0; width: 0; height: 1px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
          transition: width 0.45s ease;
          z-index: 10;
        }
        .pp-project-card:hover::before { width: 100%; }
        
        .pp-proj-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: monospace; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(232,234,246,0.4); transition: all 0.3s;
          text-decoration: none;
        }
        .pp-proj-link:hover { color: #06b6d4; transform: translateY(-1px); }

        .pp-img-container {
          position: relative; height: 200px; width: 100%; overflow: hidden;
          background: #05070a;
        }
        .pp-img-overlay {
          absolute; inset: 0; 
          background: linear-gradient(to bottom, transparent 20%, #02030a);
          z-index: 2;
        }
        
        @media(max-width: 640px) { .pp-project-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Large Background Watermark */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>04</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", letterSpacing: "0.2em" }}>04.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Projects</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        <div className="pp-project-grid">
          {items.map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="pp-project-card group">
                
                {/* Image or Fallback Header */}
                {(proj.imageBase64 || proj.image) ? (
                  <div className="pp-img-container">
                    <img
                      src={proj.imageBase64 || proj.image}
                      alt={proj.title || proj.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%) contrast(1.1)" }}
                    />
                    <div className="pp-img-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 20%, #02030a)" }} />
                  </div>
                ) : (
                  <div style={{ padding: "2rem 2rem 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "monospace", fontSize: "40px", fontWeight: 900, color: "rgba(59,130,246,0.05)", lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <FaCode style={{ color: "rgba(59,130,246,0.2)", fontSize: "20px" }} />
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: "1.5rem 2rem 2.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#e8eaf6", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                    {proj.title || proj.name}
                  </h3>
                  
                  {proj.description && (
                    <p style={{ fontSize: "13px", color: "rgba(232,234,246,0.45)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                      {proj.description}
                    </p>
                  )}

                  {/* Tech Stack */}
                  {(() => {
                    const stack = proj.stack || proj.tags || proj.technologies || proj.tech;
                    if (!Array.isArray(stack) || stack.length === 0) return null;
                    return (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "2rem", marginTop: "auto" }}>
                        {stack.filter(t => t?.trim()).map((t, j) => (
                          <span key={j} style={{ fontSize: "9px", fontFamily: "monospace", color: "rgba(6,182,212,0.7)", background: "rgba(6,182,212,0.05)", padding: "3px 7px", border: "1px solid rgba(6,182,212,0.1)" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    );
                  })()}

                  {/* Links */}
                  <div style={{ display: "flex", gap: "20px" }}>
                    {(proj.github || proj.githubUrl || proj.repo) && (
                      <a href={proj.github || proj.githubUrl || proj.repo} target="_blank" rel="noopener noreferrer" className="pp-proj-link">
                        <FaGithub style={{ fontSize: "14px" }} /> Code
                      </a>
                    )}
                    {(proj.demo || proj.liveUrl || proj.live || proj.url || proj.link) && (
                      <a href={proj.demo || proj.liveUrl || proj.live || proj.url || proj.link} target="_blank" rel="noopener noreferrer" className="pp-proj-link">
                        <FaExternalLinkAlt style={{ fontSize: "11px" }} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
