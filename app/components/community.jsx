"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaHandsHelping } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  const items = data?.community;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="community" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-comm-item {
          display: grid; grid-template-columns: 40px 1fr auto; gap: 1.5rem;
          padding: 2.5rem 0; border-bottom: 1px solid rgba(59,130,246,0.07);
          position: relative; transition: all 0.3s;
        }
        .pp-comm-item:last-child { border-bottom: none; }
        .pp-comm-item::before {
          content: ''; position: absolute; left: 0; top: 0; width: 1px; height: 0;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4);
          transition: height 0.45s ease;
        }
        .pp-comm-item:hover::before { height: 100%; }
        .pp-comm-item:hover { padding-left: 1.5rem; background: rgba(59,130,246,0.01); }
        
        .pp-impact-link {
          color: rgba(232,234,246,0.2); transition: all 0.3s;
        }
        .pp-comm-item:hover .pp-impact-link { color: #06b6d4; transform: scale(1.1); }
        
        @media(max-width: 640px) { 
          .pp-comm-item { grid-template-columns: 1fr auto; }
          .pp-comm-icon-cell { display: none; }
        }
      `}</style>

      {/* Large Background Watermark */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>06</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", letterSpacing: "0.2em" }}>06.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Community Impact</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        {/* Impact List */}
        <div>
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="pp-comm-item">
                {/* Icon Cell */}
                <div className="pp-comm-icon-cell" style={{ display: "flex", justifyContent: "center", paddingTop: "4px" }}>
                   <FaHandsHelping style={{ color: i % 2 === 0 ? "rgba(59,130,246,0.4)" : "rgba(6,182,212,0.4)", fontSize: "16px" }} />
                </div>

                {/* Content Cell */}
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#e8eaf6", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                    {item.role || item.title || item.name}
                  </h3>
                  {item.organization && (
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(139,92,246,0.8)", margin: "0 0 12px" }}>
                      {item.organization}
                    </p>
                  )}
                  {item.description && (
                    <p style={{ fontSize: "13px", color: "rgba(232,234,246,0.45)", lineHeight: 1.65, margin: 0, maxWidth: "900px" }}>
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Link Cell */}
                <div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="pp-impact-link">
                      <FaExternalLinkAlt style={{ fontSize: "14px" }} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
