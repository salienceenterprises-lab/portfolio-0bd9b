"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  return (
    <footer style={{ background: "#02030a", padding: "4rem 1.5rem", position: "relative", borderTop: "1px solid rgba(59,130,246,0.05)" }}>
      {/* Signature Accent Line */}
      <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", width: "120px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #06b6d4, transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        
        {/* Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <style>{`
            .pp-footer-icon { color: rgba(232,234,246,0.2); transition: all 0.3s; font-size: 18px; }
            .pp-footer-icon:hover { color: #06b6d4; transform: translateY(-3px); }
          `}</style>
          
          {data?.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="pp-footer-icon">
              <FaGithub />
            </a>
          )}
          {data?.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="pp-footer-icon">
              <FaLinkedin />
            </a>
          )}
          {data?.email && (
            <a href={`mailto:${data.email}`} className="pp-footer-icon">
              <FaEnvelope />
            </a>
          )}
        </div>

        {/* Branding & Copyright */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.4em", color: "#e8eaf6", margin: "0 0 8px" }}>
            {data.name || "Portfolio"}
            <span style={{ color: "#3b82f6" }}>_</span>
          </p>
          <p style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(232,234,246,0.2)", margin: 0 }}>
            &copy; {year} • System Active
          </p>
        </div>

        {/* Built With Tag */}
        <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(59,130,246,0.03)", width: "100%", textAlign: "center" }}>
           <p style={{ fontFamily: "monospace", fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.5em", color: "rgba(59,130,246,0.25)" }}>
            Built with <span style={{ color: "rgba(139,92,246,0.6)" }}>Salience</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
