"use client";
import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

export default function PortfolioSkills({ data }) {
  const items = data?.skills;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="skills" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-skill-badge {
          position: relative;
          padding: 1rem 1.5rem;
          background: rgba(59,130,246,0.03);
          border: 1px solid rgba(59,130,246,0.08);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .pp-skill-badge::before {
          content: ''; position: absolute; left: 0; top: 0; width: 2px; height: 0;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4);
          transition: height 0.3s ease;
        }
        .pp-skill-badge:hover {
          background: rgba(59,130,246,0.06);
          border-color: rgba(59,130,246,0.2);
          transform: translateY(-2px);
        }
        .pp-skill-badge:hover::before { height: 100%; }
        
        .pp-skill-text {
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(232,234,246,0.5);
          transition: color 0.3s;
        }
        .pp-skill-badge:hover .pp-skill-text { color: #06b6d4; }
      `}</style>

      {/* Large Background Watermark */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>05</div>

      {/* Decorative Gradient Orb */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", letterSpacing: "0.2em" }}>05.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Stack & Tools</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
          {items.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <div className="pp-skill-badge">
                <FaTerminal style={{ fontSize: "10px", color: "rgba(139,92,246,0.4)" }} />
                <span className="pp-skill-text">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
