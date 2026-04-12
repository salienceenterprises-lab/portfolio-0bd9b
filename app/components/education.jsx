"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden bg-white">

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(255,45,85,0.04)", fontVariantNumeric: "tabular-nums" }}>02</div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#7c3aed" }}>02</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#7c3aed" }}>Education</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none"
          style={{ color: "#0a0a0a" }}>
          Credentials
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 rounded-full mb-14"
          style={{ background: "linear-gradient(90deg, #7c3aed, #ff2d55)" }} />

        <div className="space-y-5">
          {data.education.map((edu, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -3 }}
              className="group relative p-7 rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: "rgba(10,10,10,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.08)")}>

              {/* Top color bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #7c3aed, #ff2d55)" }} />

              <div className="absolute right-6 top-5 text-5xl font-black select-none leading-none"
                style={{ color: "rgba(124,58,237,0.06)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-1.5 group-hover:text-[#7c3aed] transition-colors"
                    style={{ color: "#0a0a0a" }}>{edu.degree}</h3>
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="w-3.5 h-3.5" style={{ color: "#7c3aed" }} />
                    <span className="text-sm font-black" style={{ color: "#7c3aed" }}>{edu.institution}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                  <span className="text-xs font-black px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1.5px solid rgba(124,58,237,0.2)" }}>
                    {edu.period}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1 text-[11px] font-medium" style={{ color: "rgba(10,10,10,0.4)" }}>
                      <FaMapMarkerAlt className="w-2.5 h-2.5" /> {edu.location}
                    </span>
                  )}
                </div>
              </div>

              {edu.description && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(10,10,10,0.55)" }}>{edu.description}</p>
              )}

              {edu.achievements?.length > 0 && (
                <ul className="space-y-2">
                  {edu.achievements.filter(a => a?.trim()).map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(10,10,10,0.55)" }}>
                      <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#7c3aed" }} />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
