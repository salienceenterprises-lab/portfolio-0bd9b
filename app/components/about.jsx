"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  if (!data) return null;

  const infoRows = [
    { label: "Location", value: data.location, icon: <FaMapMarkerAlt />, link: null },
    { label: "Email",    value: data.email,    icon: <FaEnvelope />,    link: `mailto:${data.email}` },
    { label: "GitHub",   value: data.github ? "@" + data.github.split("/").pop() : null, icon: <FaGithub />, link: data.github },
    { label: "LinkedIn", value: data.linkedin ? "LinkedIn" : null, icon: <FaLinkedin />, link: data.linkedin },
    { label: "Website",  value: data.website,  icon: <FaGlobe />,       link: data.website },
  ].filter((r) => r.value);

  return (
    <section id="about" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes pp-iridescent-border {
          0%,100% { border-color: rgba(59,130,246,0.2); }
          33%      { border-color: rgba(139,92,246,0.2); }
          66%      { border-color: rgba(6,182,212,0.2); }
        }
        .pp-glass-panel {
          background: rgba(232,234,246,0.02);
          border: 1px solid rgba(59,130,246,0.15);
          animation: pp-iridescent-border 6s ease-in-out infinite;
          transition: background 0.3s;
        }
        .pp-glass-panel:hover { background: rgba(59,130,246,0.04); }
        .pp-info-row { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid rgba(59,130,246,0.06); transition: padding 0.2s; }
        .pp-info-row:last-child { border-bottom: none; }
        .pp-info-row:hover { padding-left: 6px; }
        .pp-info-a { color: rgba(232,234,246,0.55); text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .pp-info-a:hover { color: #3b82f6; }
        .pp-skill-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.05em;
          border: 1px solid rgba(59,130,246,0.2); color: rgba(59,130,246,0.8);
          background: rgba(59,130,246,0.05); transition: all 0.2s; cursor: default;
        }
        .pp-skill-chip:hover { background: rgba(59,130,246,0.12); border-color: rgba(59,130,246,0.5); color: #93c5fd; }
        .pp-skill-chip.v { border-color: rgba(139,92,246,0.2); color: rgba(139,92,246,0.8); background: rgba(139,92,246,0.05); }
        .pp-skill-chip.v:hover { background: rgba(139,92,246,0.12); border-color: rgba(139,92,246,0.5); color: #c4b5fd; }
        @media (max-width: 767px) { .pp-two-col { display: block !important; } }
      `}</style>

      {/* Ghost section number */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>01</div>

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(6,182,212,0.6)", letterSpacing: "0.2em" }}>01.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>About</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="pp-two-col">
          {/* Bio block */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            {/* Glass bio panel */}
            <div className="pp-glass-panel" style={{ padding: "2rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(59,130,246,0.08)" }}>
                <div style={{ width: "2px", height: "20px", background: "linear-gradient(180deg, #3b82f6, #8b5cf6)" }} />
                <span style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", color: "rgba(6,182,212,0.6)", textTransform: "uppercase" }}>BIO.txt</span>
              </div>
              <p style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", lineHeight: 1.8, color: "rgba(232,234,246,0.7)", fontWeight: 300, margin: 0 }}>
                {data.bio}
              </p>
            </div>

            {/* Skills chips */}
            {data.skills?.length > 0 && (
              <div>
                <p style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.35em", color: "rgba(59,130,246,0.5)", textTransform: "uppercase", marginBottom: "1rem" }}>
                  STACK[]
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {data.skills.slice(0, 9).map((skill, i) => (
                    <span key={i} className={`pp-skill-chip${i % 3 === 1 ? " v" : ""}`}>{skill}</span>
                  ))}
                  {data.skills.length > 9 && (
                    <a href="#skills" style={{ display: "inline-flex", alignItems: "center", padding: "5px 12px", fontSize: "11px", color: "rgba(232,234,246,0.25)", border: "1px solid rgba(232,234,246,0.06)", textDecoration: "none" }}>
                      +{data.skills.length - 9}
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="pp-glass-panel" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(59,130,246,0.08)" }}>
                <div style={{ width: "2px", height: "20px", background: "linear-gradient(180deg, #8b5cf6, #06b6d4)" }} />
                <span style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", color: "rgba(6,182,212,0.6)", textTransform: "uppercase" }}>PROFILE.json</span>
              </div>
              {infoRows.map((row, i) => (
                <div key={i} className="pp-info-row">
                  <span style={{ color: "rgba(59,130,246,0.6)", fontSize: "13px", flexShrink: 0 }}>{row.icon}</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(232,234,246,0.25)", textTransform: "uppercase", width: "72px", flexShrink: 0 }}>{row.label}</span>
                  {row.link ? (
                    <a href={row.link} target="_blank" rel="noopener noreferrer" className="pp-info-a">{row.value}</a>
                  ) : (
                    <span style={{ color: "rgba(232,234,246,0.55)", fontSize: "13px" }}>{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
