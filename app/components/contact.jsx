"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaCircleNotch } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const hasForm = !!data?.web3forms_key;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasForm) return;
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: data.web3forms_key, subject: `New Portfolio Message from ${formData.name}`, from_name: "Portfolio Contact Form", botcheck: "" }),
      });
      const result = await response.json();
      if (result.success) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); setTimeout(() => setStatus("idle"), 5000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const contactLinks = [
    { show: data?.email, icon: FaEnvelope, label: "Email", value: data?.email, href: `mailto:${data?.email}`, color: "#ff2d55" },
    { show: data?.github, icon: FaGithub, label: "GitHub", value: "View Profile", href: data?.github, color: "#0a0a0a" },
    { show: data?.linkedin, icon: FaLinkedin, label: "LinkedIn", value: "Connect", href: data?.linkedin, color: "#7c3aed" },
  ].filter(l => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-[#fafafa]">

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(255,45,85,0.04)", fontVariantNumeric: "tabular-nums" }}>07</div>

      {/* Big gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,45,85,0.06) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-4 ${!hasForm ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
            style={{ background: "#ff2d55" }}>07</div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#ff2d55" }}>Contact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className={`text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase leading-none ${!hasForm ? "text-center" : ""}`}
          style={{ color: "#0a0a0a" }}>
          Get In Touch
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`h-1 rounded-full mb-14 ${!hasForm ? "mx-auto" : ""}`}
          style={{ background: "linear-gradient(90deg, #ff2d55, #7c3aed)" }} />

        <div className={`grid gap-10 ${hasForm ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1 max-w-md mx-auto"}`}>

          {/* Links */}
          <motion.div initial={{ opacity: 0, x: hasForm ? -40 : 0 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`${hasForm ? "lg:col-span-2" : ""} space-y-3`}>
            {contactLinks.map((link, i) => (
              <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 p-4 rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "rgba(10,10,10,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = link.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.08)")}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${link.color}15`, border: `2px solid ${link.color}30` }}>
                  <link.icon className="w-5 h-5" style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "rgba(10,10,10,0.35)" }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-black" style={{ color: "#0a0a0a" }}>{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          {hasForm && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
              className="lg:col-span-3">
              <div className="bg-white rounded-2xl border-2 p-8" style={{ borderColor: "rgba(10,10,10,0.08)" }}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: "rgba(10,10,10,0.4)" }}>
                          {field === "name" ? "Your Name" : "Email Address"}
                        </label>
                        <input name={field} type={field === "email" ? "email" : "text"}
                          value={formData[field]} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all bg-[#fafafa]"
                          style={{ borderColor: "rgba(10,10,10,0.1)", color: "#0a0a0a" }}
                          onFocus={(e) => (e.target.style.borderColor = "#ff2d55")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(10,10,10,0.1)")} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: "rgba(10,10,10,0.4)" }}>
                      Message
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all resize-none bg-[#fafafa]"
                      style={{ borderColor: "rgba(10,10,10,0.1)", color: "#0a0a0a" }}
                      onFocus={(e) => (e.target.style.borderColor = "#ff2d55")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(10,10,10,0.1)")} />
                  </div>
                  <motion.button type="submit"
                    disabled={status === "loading" || status === "success"}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(255,45,85,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-white transition-all"
                    style={{ background: status === "success" ? "#10b981" : "#ff2d55" }}>
                    <AnimatePresence mode="wait">
                      {status === "loading" ? (
                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center gap-2">
                          <FaCircleNotch className="w-4 h-4 animate-spin" /> Sending...
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span key="success" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                          className="flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4" /> Sent!
                        </motion.span>
                      ) : (
                        <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center gap-2">
                          Send Message <FaPaperPlane className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
