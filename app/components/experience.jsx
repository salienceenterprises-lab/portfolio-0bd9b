"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-exp-item {
          display: grid; 
          grid-template-columns: 150px 1fr; /* Increased width to prevent overlap */
          gap: 2.5rem;
          padding: 2.5rem 0; border-bottom: 1px solid rgba(59,130,246,0.07);
          position: relative; transition: all 0.3s;
        }
        .pp-exp-item:last-child { border-bottom: none; }
        .pp-exp-item::before {
          content: ''; position: absolute; left: 0; top: 0; width: 1px; height: 0;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4);
          transition: height 0.45s ease;
        }
        .pp-exp-item:hover::before { height: 100%; }
        .pp-exp-item:hover { padding-left: 1rem; }
        .pp-duration-badge {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 6px 12px; border: 1px solid rgba(139,92,246,0.25);
          background: rgba(139,92,246,0.05); fontFamily: monospace;
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          color: rgba(139,92,246,0.8); align-self: start; margin-top: 4px;
          width: 100%; /* Force containment in the 150px column */
          text-align: center;
        }
        @media(max-width: 768px) { 
          .pp-exp-item { grid-template-columns: 1fr; gap: 1rem; } 
          .pp-duration-badge { width: auto; }
        }
      `}</style>

      {/* Large Background Number */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>03</div>
      
      {/* Decorative Gradient Orb */}
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(139,92,246,0.6)", letterSpacing: "0.2em" }}>03.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #8b5cf6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Experience</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #3b82f6, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        {/* Experience List */}
        <div>
          {items.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="pp-exp-item">
                {/* Duration */}
                <div>
                  <span className="pp-duration-badge">{exp.period || exp.duration || exp.years || exp.startDate || "—"}</span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <FaBriefcase style={{ color: "rgba(6,182,212,0.6)", fontSize: "14px" }} />
                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#e8eaf6", margin: 0, letterSpacing: "-0.02em" }}>
                      {exp.role || exp.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "rgba(59,130,246,0.8)", margin: "0 0 8px" }}>
                    {exp.company || exp.employer || exp.organization}
                  </p>
                  {(exp.location || exp.city) && (
                    <p style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(232,234,246,0.35)", margin: "0 0 10px" }}>
                      <FaMapMarkerAlt style={{ fontSize: "10px" }} /> {exp.location || exp.city}
                    </p>
                  )}
                  {exp.description && (
                    <p style={{ fontSize: "13.5px", color: "rgba(232,234,246,0.45)", lineHeight: 1.7, margin: 0, maxWidth: "800px" }}>
                      {exp.description}
                    </p>
                  )}
                  {(() => {
                    const bullets = exp.highlights || exp.responsibilities || exp.bullets;
                    if (!Array.isArray(bullets) || bullets.filter(Boolean).length === 0) return null;
                    return (
                      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {bullets.filter(Boolean).map((b, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "rgba(232,234,246,0.45)", lineHeight: 1.6 }}>
                            <div style={{ width: "5px", height: "5px", background: "rgba(6,182,212,0.7)", transform: "rotate(45deg)", marginTop: "6px", flexShrink: 0 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    );
                  })()}
                  {(() => {
                    const stack = exp.stack || exp.tags || exp.technologies || exp.tech;
                    if (!Array.isArray(stack) || stack.length === 0) return null;
                    return (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "15px" }}>
                        {stack.map((tech, idx) => (
                          <span key={idx} style={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(6,182,212,0.5)", border: "1px solid rgba(6,182,212,0.1)", padding: "2px 6px" }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
