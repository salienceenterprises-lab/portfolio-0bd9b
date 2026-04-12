"use client";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const words = (data?.name || "").split(" ");
  const hasPhoto = !!data?.heroImageBase64;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large pink circle top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,45,85,0.08) 0%, transparent 70%)" }} />
        {/* Violet blob bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Big watermark number */}
        <div className="absolute -bottom-8 right-8 text-[22rem] font-black leading-none select-none pointer-events-none hidden lg:block"
          style={{ color: "rgba(255,45,85,0.04)", fontVariantNumeric: "tabular-nums" }}>01</div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
        {hasPhoto ? (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(255,45,85,0.08)", border: "1.5px solid rgba(255,45,85,0.2)" }}>
                <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-2 h-2 rounded-full" style={{ background: "#ff2d55" }} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "#ff2d55" }}>
                  {data?.title || "Portfolio"}
                </span>
              </motion.div>

              <div className="mb-8">
                {words.map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 130, damping: 16 }}
                      className="font-black tracking-tighter leading-[0.88] uppercase"
                      style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", color: i === words.length - 1 ? "#ff2d55" : "#0a0a0a" }}>
                      {word}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "rgba(10,10,10,0.5)" }}>
                {data?.sloganHeroSection}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4">
                {data?.resumeBase64 && (
                  <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                    download={`${data.name || "Resume"}.pdf`}
                    className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white rounded-full transition-all hover:opacity-85 shadow-lg"
                    style={{ background: "#ff2d55", boxShadow: "0 8px 30px rgba(255,45,85,0.35)" }}>
                    <FaDownload className="w-3.5 h-3.5" /> Resume
                  </a>
                )}
                <button onClick={scrollToContact}
                  className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider rounded-full border-2 transition-all hover:bg-[#ff2d55] hover:text-white hover:border-[#ff2d55]"
                  style={{ color: "#0a0a0a", borderColor: "rgba(10,10,10,0.15)" }}>
                  Contact <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </div>

            {/* Photo — tilted editorial frame */}
            <motion.div initial={{ opacity: 0, scale: 0.85, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
              className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #ff2d55, #7c3aed)", opacity: 0.15, transform: "rotate(3deg)" }} />
                <motion.div whileHover={{ rotate: 0 }} transition={{ duration: 0.3 }}
                  className="relative"
                  style={{ transform: "rotate(-2deg)" }}>
                  <img src={data.heroImageBase64} alt={data?.name || "Profile"}
                    className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
                    style={{ border: "4px solid #ff2d55" }} />
                  {/* Pop accent badge */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-black uppercase tracking-wide text-center leading-tight shadow-lg"
                    style={{ background: "#7c3aed" }}>
                    <span>Let's<br/>Talk</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* No photo — bold centered */
          <div className="text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
              style={{ background: "rgba(255,45,85,0.08)", border: "1.5px solid rgba(255,45,85,0.2)" }}>
              <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full" style={{ background: "#ff2d55" }} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "#ff2d55" }}>
                {data?.title || "Portfolio"}
              </span>
            </motion.div>

            <div className="mb-10">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.12, type: "spring", stiffness: 110, damping: 15 }}
                    className="font-black tracking-tighter leading-[0.88] uppercase"
                    style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: i === words.length - 1 ? "#ff2d55" : "#0a0a0a" }}>
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="text-xl leading-relaxed mb-14 max-w-2xl mx-auto" style={{ color: "rgba(10,10,10,0.45)" }}>
              {data?.sloganHeroSection}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
              className="flex flex-wrap items-center justify-center gap-5">
              {data?.resumeBase64 && (
                <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                  download={`${data.name || "Resume"}.pdf`}
                  className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider text-white rounded-full transition-all hover:opacity-85 shadow-xl"
                  style={{ background: "#ff2d55", boxShadow: "0 12px 40px rgba(255,45,85,0.35)" }}>
                  <FaDownload className="w-4 h-4" /> Download Resume
                </a>
              )}
              <button onClick={scrollToContact}
                className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider rounded-full border-2 transition-all hover:bg-[#0a0a0a] hover:text-white"
                style={{ color: "#0a0a0a", borderColor: "#0a0a0a" }}>
                Get In Touch <FaArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom diagonal clip */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fafafa]"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
}
