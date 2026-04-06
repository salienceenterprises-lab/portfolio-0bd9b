"use client";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  if (!data) return null;
  const hasPhoto  = !!data?.heroImageBase64;
  const firstName = data?.name?.split(" ")[0] ?? "";
  const restName  = data?.name?.split(" ").slice(1).join(" ") ?? "";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="about" style={{ position: "relative", minHeight: "100vh", background: "#02030a", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <style>{`
        @keyframes pp-prism-rotate { 0%{transform:rotate(0deg) scale(1);} 50%{transform:rotate(180deg) scale(1.08);} 100%{transform:rotate(360deg) scale(1);} }
        @keyframes pp-drift-slow { 0%,100%{transform:translateY(0) translateX(0);} 33%{transform:translateY(-30px) translateX(10px);} 66%{transform:translateY(10px) translateX(-15px);} }
        @keyframes pp-scan-h { 0%{top:-2px;} 100%{top:100%;} }
        @keyframes pp-iridescent { 0%,100%{border-color:rgba(59,130,246,0.4);} 33%{border-color:rgba(139,92,246,0.4);} 66%{border-color:rgba(6,182,212,0.4);} }
        @keyframes pp-cursor { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes pp-frame-glow { 0%,100%{box-shadow:0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(139,92,246,0.08);} 50%{box-shadow:0 0 60px rgba(139,92,246,0.25), 0 0 100px rgba(6,182,212,0.1);} }
        @keyframes pp-bob { 0%,100%{transform:translateY(0);} 50%{transform:translateY(7px);} }

        .pp-hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent);
          animation: pp-scan-h 6s linear infinite;
          pointer-events: none; z-index: 2;
        }
        .pp-cta-primary {
          display: inline-flex; align-items: center; gap: 10px; cursor: pointer;
          padding: 14px 32px; font-size: 11px; font-weight: 800;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #fff; border: none; text-decoration: none;
          transition: all 0.25s ease; position: relative; overflow: hidden;
        }
        .pp-cta-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          opacity: 0; transition: opacity 0.3s;
        }
        .pp-cta-primary:hover::before { opacity: 1; }
        .pp-cta-primary:hover { box-shadow: 0 0 40px rgba(59,130,246,0.4); transform: translateY(-2px); }
        .pp-cta-primary span { position: relative; z-index: 1; }
        .pp-cta-secondary {
          display: inline-flex; align-items: center; gap: 10px; cursor: pointer; background: none;
          border: 1px solid rgba(232,234,246,0.12); color: rgba(232,234,246,0.5);
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 14px 28px; text-decoration: none; transition: all 0.25s;
        }
        .pp-cta-secondary:hover { border-color: rgba(139,92,246,0.5); color: #e8eaf6; background: rgba(139,92,246,0.07); }
        .pp-photo-frame { animation: pp-iridescent 4s ease-in-out infinite, pp-frame-glow 4s ease-in-out infinite; }
        .pp-cursor { display: inline-block; width: 3px; height: 0.85em; background: #3b82f6; animation: pp-cursor 1.2s step-end infinite; vertical-align: middle; margin-left: 4px; }
        .pp-scroll-btn { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; animation: pp-bob 2.5s ease-in-out infinite; }
      `}</style>

      {/* Mesh grid background */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.04 }}>
        <defs>
          <pattern id="pp-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
          </pattern>
          <radialGradient id="pp-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="100%" stopColor="#02030a" stopOpacity="0.85"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#pp-mesh)"/>
        <rect width="100%" height="100%" fill="url(#pp-vignette)"/>
      </svg>

      {/* Floating prism crystal */}
      <svg style={{ position: "absolute", right: hasPhoto ? "auto" : "8%", left: hasPhoto ? "auto" : "auto", top: "10%", width: "320px", height: "320px", pointerEvents: "none", opacity: 0.5, animation: "pp-prism-rotate 20s linear infinite" }}
        viewBox="0 0 320 320">
        <defs>
          <linearGradient id="pp-prism1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="pp-prism2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="pp-prism3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        {/* Main prism triangle */}
        <polygon points="160,20 300,280 20,280" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.5"/>
        {/* Inner facets */}
        <polygon points="160,20 230,150 90,150" fill="url(#pp-prism1)"/>
        <polygon points="90,150 160,280 20,280" fill="url(#pp-prism2)"/>
        <polygon points="230,150 300,280 160,280" fill="url(#pp-prism3)"/>
        {/* Light ray lines */}
        <line x1="160" y1="20" x2="20" y2="280" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3"/>
        <line x1="160" y1="20" x2="300" y2="280" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3"/>
        <line x1="160" y1="20" x2="160" y2="280" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3"/>
        {/* Refracted light rays spreading out */}
        <line x1="20" y1="280" x2="-40" y2="320" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="160" y1="280" x2="140" y2="340" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="300" y1="280" x2="360" y2="320" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5"/>
        {/* Vertex dots */}
        <circle cx="160" cy="20" r="3" fill="#e8eaf6" fillOpacity="0.6"/>
        <circle cx="20" cy="280" r="3" fill="#06b6d4" fillOpacity="0.6"/>
        <circle cx="300" cy="280" r="3" fill="#3b82f6" fillOpacity="0.6"/>
      </svg>

      {/* Ambient color pools */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", animation: "pp-drift-slow 12s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", animation: "pp-drift-slow 15s 3s ease-in-out infinite", pointerEvents: "none" }} />

      {/* Horizontal scan line */}
      <div className="pp-hero-scan" />

      {/* Content grid */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "100px 1.5rem 3rem", width: "100%", display: "grid", gridTemplateColumns: hasPhoto ? "1fr 360px" : "1fr", gap: "4rem", alignItems: "center" }}>

        {/* Left: text */}
        <div>
          {/* Protocol badge */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(6,182,212,0.7)", letterSpacing: "0.2em" }}>PROTO://</span>
            <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", padding: "5px 14px", border: "1px solid rgba(59,130,246,0.25)", background: "rgba(59,130,246,0.06)", color: "rgba(59,130,246,0.9)" }}>
              {data?.title || "Portfolio"}
            </span>
          </motion.div>

          {/* Massive name — solid + outlined */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ overflow: "hidden" }}>
              <motion.div initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <span style={{ display: "block", fontSize: "clamp(3.5rem, 9.5vw, 8.5rem)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", color: "#e8eaf6" }}>
                  {firstName}
                </span>
              </motion.div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                <span style={{ display: "block", fontSize: "clamp(3.5rem, 9.5vw, 8.5rem)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", color: "transparent", WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "rgba(139,92,246,0.7)", filter: "drop-shadow(0 0 30px rgba(139,92,246,0.3))" }}>
                  {restName || firstName}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Iridescent divider */}
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.45 }}
            style={{ height: "1px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, transparent)", marginBottom: "2rem", transformOrigin: "left", maxWidth: "400px" }} />

          {/* Tagline with terminal cursor */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.55 }}
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300, color: "rgba(232,234,246,0.55)", maxWidth: "540px", lineHeight: 1.75, marginBottom: "3rem" }}>
            {data?.sloganHeroSection || data?.bio?.slice(0, 120)}
            <span className="pp-cursor" />
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <button onClick={() => scrollTo("contact")} className="pp-cta-primary">
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FaEnvelope size={12} /> Get In Touch
              </span>
            </button>
            {data?.resumeBase64 && (
              <a href="/resume.pdf" download="Resume.pdf" className="pp-cta-secondary">
                <FaDownload size={11} /> Download CV
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: photo in iridescent frame */}
        {hasPhoto && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.35 }}
            style={{ position: "relative", flexShrink: 0 }}
            className="hidden md:flex justify-end">
            <div style={{ position: "relative", width: "320px", height: "360px" }}>
              {/* Outer iridescent border */}
              <div className="pp-photo-frame" style={{ position: "absolute", inset: "-2px", border: "2px solid rgba(59,130,246,0.4)", zIndex: 2, pointerEvents: "none" }} />
              {/* Corner accent marks */}
              {[["top:-6px","left:-6px","borderTop","borderLeft"],["top:-6px","right:-6px","borderTop","borderRight"],["bottom:-6px","left:-6px","borderBottom","borderLeft"],["bottom:-6px","right:-6px","borderBottom","borderRight"]].map(([t,l,b1,b2], i) => (
                <div key={i} style={{ position: "absolute", [t.split(":")[0]]: t.split(":")[1], [l.split(":")[0]]: l.split(":")[1], width: "20px", height: "20px", [b1]: "2px solid #3b82f6", [b2]: "2px solid #3b82f6", zIndex: 3 }} />
              ))}
              {/* Gradient overlay on photo */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%, rgba(139,92,246,0.08) 100%)", zIndex: 1, pointerEvents: "none" }} />
              {/* Photo */}
              <img src={data.heroImageBase64} alt={data.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(0.95) contrast(1.05)" }} />
              {/* Status badge */}
              <div style={{ position: "absolute", bottom: "16px", left: "16px", display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", background: "rgba(2,3,10,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(59,130,246,0.2)", zIndex: 3 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 8px #06b6d4", animation: "pp-cursor 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(232,234,246,0.6)", letterSpacing: "0.1em" }}>AVAILABLE</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <button className="pp-scroll-btn" onClick={() => scrollTo("about")}>
          <span style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(59,130,246,0.5)" }}>SCROLL</span>
          <FaArrowDown style={{ color: "rgba(59,130,246,0.5)", fontSize: "11px" }} />
        </button>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, #02030a, transparent)", pointerEvents: "none" }} />
    </section>
  );
}
