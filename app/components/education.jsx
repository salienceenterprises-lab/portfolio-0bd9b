"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-edu-item {
          display: grid; grid-template-columns: 100px 1fr; gap: 2rem;
          padding: 2.5rem 0; border-bottom: 1px solid rgba(59,130,246,0.07);
          position: relative; transition: all 0.3s;
        }
        .pp-edu-item:last-child { border-bottom: none; }
        .pp-edu-item::before {
          content: ''; position: absolute; left: 0; top: 0; width: 1px; height: 0;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4);
          transition: height 0.45s ease;
        }
        .pp-edu-item:hover::before { height: 100%; }
        .pp-edu-item:hover { padding-left: 1rem; }
        .pp-year-badge {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 6px 10px; border: 1px solid rgba(6,182,212,0.25);
          background: rgba(6,182,212,0.05); fontFamily: monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(6,182,212,0.8); white-space: nowrap; align-self: start; margin-top: 4px;
        }
        @media(max-width: 640px) { .pp-edu-item { grid-template-columns: 1fr; gap: 1rem; } }
      `}</style>

      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>02</div>
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", letterSpacing: "0.2em" }}>02.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Education</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        <div>
          {items.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="pp-edu-item">
                {/* Year */}
                <div>
                  <span className="pp-year-badge">{edu.period || edu.year || edu.graduationYear || edu.years || "—"}</span>
                </div>
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <FaGraduationCap style={{ color: "rgba(59,130,246,0.6)", fontSize: "14px" }} />
                    <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#e8eaf6", margin: 0, letterSpacing: "-0.02em" }}>
                      {edu.degree || edu.qualification || edu.field || edu.program}
                    </h3>
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(59,130,246,0.8)", margin: "0 0 10px" }}>
                    {edu.institution || edu.school || edu.university}
                  </p>
                  {(edu.location || edu.city) && (
                    <p style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(232,234,246,0.35)", margin: "0 0 8px" }}>
                      <FaMapMarkerAlt style={{ fontSize: "10px" }} /> {edu.location || edu.city}
                    </p>
                  )}
                  {edu.description && (
                    <p style={{ fontSize: "13px", color: "rgba(232,234,246,0.45)", lineHeight: 1.65, margin: 0 }}>{edu.description}</p>
                  )}
                  {(edu.gpa || edu.grade || edu.result) && (
                    <p style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", marginTop: "8px", fontWeight: 600 }}>
                      GPA: {edu.gpa || edu.grade || edu.result}
                    </p>
                  )}
                  {Array.isArray(edu.achievements) && edu.achievements.filter(Boolean).length > 0 && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {edu.achievements.filter(Boolean).map((a, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "rgba(232,234,246,0.45)", lineHeight: 1.6 }}>
                          <div style={{ width: "5px", height: "5px", background: "rgba(59,130,246,0.7)", transform: "rotate(45deg)", marginTop: "6px", flexShrink: 0 }} />
                          {a}
                        </li>
                      ))}
                    </ul>
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
