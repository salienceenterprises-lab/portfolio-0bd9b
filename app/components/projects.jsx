"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-white">

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(124,58,237,0.04)", fontVariantNumeric: "tabular-nums" }}>04</div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#7c3aed" }}>04</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#7c3aed" }}>Projects</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none"
          style={{ color: "#0a0a0a" }}>
          Built Work
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 rounded-full mb-14"
          style={{ background: "linear-gradient(90deg, #7c3aed, #ff2d55)" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((proj, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border-2 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
              style={{ borderColor: "rgba(10,10,10,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.08)")}>

              {proj.imageBase64 ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={proj.imageBase64} alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 text-[10px] font-black px-2 py-1 rounded-full text-white"
                    style={{ background: "rgba(0,0,0,0.5)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-white rounded-full"
                        style={{ background: "#0a0a0a" }} onClick={(e) => e.stopPropagation()}>
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-white rounded-full"
                        style={{ background: "#7c3aed" }} onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative h-20 flex items-center justify-between px-6 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(255,45,85,0.05))" }}>
                  <div className="text-4xl font-black select-none leading-none"
                    style={{ color: "rgba(124,58,237,0.12)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex gap-3">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-60" style={{ color: "rgba(10,10,10,0.35)" }}>
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-60" style={{ color: "rgba(10,10,10,0.35)" }}>
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-base font-black uppercase tracking-tight mb-2 group-hover:text-[#7c3aed] transition-colors"
                  style={{ color: "#0a0a0a" }}>{proj.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.5)" }}>{proj.description}</p>

                {proj.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-black/[0.06]">
                    {proj.stack.filter(t => t?.trim()).map((tech) => (
                      <span key={tech}
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ color: "#7c3aed", background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.15)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
