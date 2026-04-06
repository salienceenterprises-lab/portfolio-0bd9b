"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

// ── Prism Protocol palette ───────────────────────────────────────────────────
// bg: #02030a  |  blue: #3b82f6  |  violet: #8b5cf6  |  cyan: #06b6d4
// text: #e8eaf6  |  muted: rgba(232,234,246,0.4)

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  if (!data) return null;

  const allLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Impact",     href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allLinks.filter((l) => {
    if (l.label === "About") return true;
    const d = data?.[l.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  useEffect(() => {
    const ids = activeLinks.map((l) => l.href.replace("#", ""));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sorted = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);
      let cur = sorted[0]?.id ?? "about";
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].offsetTop - 120) { cur = sorted[i].id; break; }
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .pp-nav-link {
          position: relative; text-decoration: none; cursor: pointer;
          font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; padding: 8px 14px;
          color: rgba(232,234,246,0.35); transition: color 0.2s;
        }
        .pp-nav-link:hover { color: #e8eaf6; }
        .pp-nav-link.active { color: #e8eaf6; }
        .pp-nav-link::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.06));
          border: 1px solid transparent;
          opacity: 0; transition: opacity 0.2s;
        }
        .pp-nav-link:hover::before { opacity: 1; border-color: rgba(59,130,246,0.2); }
        .pp-nav-link.active::before {
          opacity: 1;
          border-color: rgba(139,92,246,0.3);
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.08));
        }
        @keyframes pp-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200vh); }
        }
        .pp-scan-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(139,92,246,0.15), transparent);
          animation: pp-scan 8s linear infinite; pointer-events: none;
        }
        .pp-resume-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; font-size: 10px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          text-decoration: none; color: #06b6d4;
          border: 1px solid rgba(6,182,212,0.3);
          background: rgba(6,182,212,0.05);
          transition: all 0.2s;
        }
        .pp-resume-btn:hover {
          background: rgba(6,182,212,0.12);
          border-color: rgba(6,182,212,0.6);
          box-shadow: 0 0 20px rgba(6,182,212,0.15);
          color: #67e8f9;
        }
      `}</style>

      <motion.nav
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "rgba(2,3,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        {/* Scan line */}
        <div className="pp-scan-line" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "66px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo mark */}
          <a href="#about" onClick={(e) => go(e, "#about")} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Prism mark */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="10,1 19,18 1,18" fill="none" stroke="url(#pp-logo-grad)" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="pp-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "13px", letterSpacing: "0.05em", color: "#e8eaf6" }}>
              {data.name?.split(" ")[0] || "PORT"}
              <span style={{ color: "#3b82f6" }}>_</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2px" }}>
            {activeLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                  className={`pp-nav-link${isActive ? " active" : ""}`}>
                  {link.label}
                </a>
              );
            })}
            {data?.resumeBase64 && (
              <a href="/resume.pdf" download="Resume.pdf" className="pp-resume-btn" style={{ marginLeft: "8px" }}>
                <FaDownload size={9} /> Resume
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden"
            style={{ background: "none", border: "none", color: "rgba(232,234,246,0.5)", cursor: "pointer", padding: "8px" }}>
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              style={{ background: "rgba(2,3,10,0.98)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(59,130,246,0.12)", overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
                {activeLinks.map((link, i) => (
                  <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                    style={{ display: "block", padding: "12px 0", color: "rgba(232,234,246,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderBottom: i < activeLinks.length - 1 ? "1px solid rgba(59,130,246,0.07)" : "none" }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
