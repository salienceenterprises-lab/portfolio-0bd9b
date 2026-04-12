"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  return (
    <footer className="relative py-10 px-6 border-t bg-white" style={{ borderColor: "rgba(10,10,10,0.08)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-black text-sm uppercase tracking-tight" style={{ color: "#0a0a0a" }}>
            {data.name || "Portfolio"}<span style={{ color: "#ff2d55" }}>.</span>
          </span>
          <p className="text-xs font-medium" style={{ color: "rgba(10,10,10,0.3)" }}>
            &copy; {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {data?.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="transition-colors" style={{ color: "rgba(10,10,10,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a0a0a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,10,10,0.3)")}>
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {data?.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="transition-colors" style={{ color: "rgba(10,10,10,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,10,10,0.3)")}>
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {data?.email && (
            <a href={`mailto:${data.email}`} aria-label="Email"
              className="transition-colors" style={{ color: "rgba(10,10,10,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2d55")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,10,10,0.3)")}>
              <FaEnvelope className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-xs font-medium" style={{ color: "rgba(10,10,10,0.3)" }}>
          Built with <span className="font-black" style={{ color: "#ff2d55" }}>Salience</span>
        </p>
      </div>
    </footer>
  );
}
