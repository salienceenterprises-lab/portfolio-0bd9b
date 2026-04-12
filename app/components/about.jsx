"use client";
import { motion } from "framer-motion";

export default function PortfolioAbout({ data }) {
  if (!data?.bio) return null;
  const hasPhoto = !!data?.heroImageBase64;

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#fafafa]">

      {/* Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(124,58,237,0.04)", fontVariantNumeric: "tabular-nums" }}>01</div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Label */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#ff2d55" }}>01</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#ff2d55" }}>About</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none"
          style={{ color: "#0a0a0a" }}>
          The Story<br />Behind the Work
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 rounded-full mb-14"
          style={{ background: "linear-gradient(90deg, #ff2d55, #7c3aed)" }} />

        <div className={`grid gap-14 items-start ${hasPhoto ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1 max-w-3xl"}`}>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className={hasPhoto ? "lg:col-span-3" : ""}>
            <p className="text-lg leading-[1.85] mb-8" style={{ color: "rgba(10,10,10,0.6)" }}>{data.bio}</p>

            {data?.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.skills.slice(0, 8).map((skill, i) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className="px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full border-2 cursor-default transition-all hover:border-[#ff2d55] hover:text-[#ff2d55]"
                    style={{ color: "rgba(10,10,10,0.55)", borderColor: "rgba(10,10,10,0.12)", background: "white" }}>
                    {skill}
                  </motion.span>
                ))}
                {data.skills.length > 8 && (
                  <a href="#skills"
                    className="px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full border-2 transition-all hover:border-[#ff2d55] hover:text-[#ff2d55]"
                    style={{ color: "rgba(10,10,10,0.35)", borderColor: "rgba(10,10,10,0.08)" }}>
                    +{data.skills.length - 8} more
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {hasPhoto && (
            <motion.div initial={{ opacity: 0, x: 30, rotate: 2 }} whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
              className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #ff2d55, #7c3aed)", opacity: 0.12, transform: "rotate(2deg)" }} />
                <img src={data.heroImageBase64} alt={data.name}
                  className="relative w-52 h-64 object-cover rounded-2xl shadow-xl"
                  style={{ border: "3px solid #ff2d55" }} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
