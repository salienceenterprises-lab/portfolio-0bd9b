"use client";
import { motion } from "framer-motion";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community || !Array.isArray(data.community) || data.community.length === 0) return null;

  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden bg-white">

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(124,58,237,0.04)", fontVariantNumeric: "tabular-nums" }}>06</div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#7c3aed" }}>06</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#7c3aed" }}>Impact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none"
          style={{ color: "#0a0a0a" }}>
          Community
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 rounded-full mb-14"
          style={{ background: "linear-gradient(90deg, #7c3aed, #ff2d55)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.community.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 120, damping: 16, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border-2 bg-white p-7 transition-all duration-300 hover:shadow-2xl"
                style={{ borderColor: "rgba(10,10,10,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.08)")}>

                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #ff2d55)" }} />

                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(124,58,237,0.1)", border: "2px solid rgba(124,58,237,0.2)" }}>
                    <FaHeart className="w-4 h-4" style={{ color: "#7c3aed" }} />
                  </motion.div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-black/20 hover:text-[#7c3aed] transition-colors">
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="font-black uppercase tracking-tight mb-1 group-hover:text-[#7c3aed] transition-colors"
                  style={{ color: "#0a0a0a" }}>{item.role || "Contributor"}</h3>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "#ff2d55" }}>
                  {item.organization || "Community Initiative"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.5)" }}>
                  {item.description || ""}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
