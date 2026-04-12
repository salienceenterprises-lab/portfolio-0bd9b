"use client";
import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 18 } },
};

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;

  const colors = [
    { bg: "rgba(255,45,85,0.08)", border: "rgba(255,45,85,0.2)", text: "#ff2d55", dot: "#ff2d55" },
    { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", text: "#7c3aed", dot: "#7c3aed" },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#fafafa]">

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(255,45,85,0.04)", fontVariantNumeric: "tabular-nums" }}>05</div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#ff2d55" }}>05</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#ff2d55" }}>Skills</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none"
          style={{ color: "#0a0a0a" }}>
          Tech Stack
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 rounded-full mb-14"
          style={{ background: "linear-gradient(90deg, #ff2d55, #7c3aed)" }} />

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap gap-3">
          {data.skills.map((skill, i) => {
            const c = colors[i % 2];
            return (
              <motion.div key={`${skill}-${i}`} variants={item}
                whileHover={{ y: -4, scale: 1.05, boxShadow: `0 8px 25px ${c.dot}30` }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border-2 cursor-default transition-all duration-200 bg-white"
                style={{ borderColor: c.border, background: c.bg }}>
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5 + (i % 4) * 0.4, repeat: Infinity }}
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.dot }} />
                <span className="text-sm font-black uppercase tracking-wider" style={{ color: c.text }}>
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="flex items-center gap-4 mt-14">
          <div className="h-0.5 flex-1 rounded-full" style={{ background: "linear-gradient(90deg, #ff2d55, transparent)" }} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(10,10,10,0.3)" }}>
            {data.skills.length} Technologies
          </span>
          <div className="h-0.5 flex-1 rounded-full" style={{ background: "linear-gradient(270deg, #7c3aed, transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
