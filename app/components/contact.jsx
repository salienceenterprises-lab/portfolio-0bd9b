"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaCircleNotch, FaLink } from "react-icons/fa";

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
        body: JSON.stringify({ ...formData, access_key: data.web3forms_key, subject: `Portfolio Message from ${formData.name}` }),
      });
      const result = await response.json();
      if (result.success) { 
        setStatus("success"); 
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => setStatus("idle"), 5000); 
      } else setStatus("error");
    } catch { setStatus("error"); }
  };

  const contactLinks = [
    { show: data?.email, icon: FaEnvelope, label: "Email", value: data?.email, href: `mailto:${data?.email}` },
    { show: data?.github, icon: FaGithub, label: "GitHub", value: "View Profile", href: data?.github },
    { show: data?.linkedin, icon: FaLinkedin, label: "LinkedIn", value: "Connect", href: data?.linkedin },
  ].filter((l) => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" style={{ background: "#02030a", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .pp-contact-input {
          width: 100%; padding: 1rem 0; background: transparent; border: none;
          border-bottom: 1px solid rgba(59,130,246,0.1); color: #e8eaf6;
          font-size: 14px; outline: none; transition: all 0.3s;
        }
        .pp-contact-input:focus { border-bottom-color: #06b6d4; }
        .pp-input-label {
          font-family: monospace; font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.2em; color: rgba(59,130,246,0.5);
        }
        .pp-contact-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.5rem 0; border-bottom: 1px solid rgba(59,130,246,0.07);
          text-decoration: none; transition: all 0.3s;
        }
        .pp-contact-link:hover { padding-left: 10px; border-bottom-color: rgba(6,182,212,0.3); }
        .pp-contact-btn {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          color: white; border: none; padding: 1rem 2.5rem;
          font-family: monospace; font-size: 11px; font-weight: 900;
          text-transform: uppercase; letter-spacing: 0.2em; cursor: pointer;
          display: inline-flex; align-items: center; gap: 12px;
        }
        @media (max-width: 767px) { .pp-outer-grid { display: block !important; } .pp-inner-grid { display: block !important; } }
      `}</style>

      {/* Large Background Watermark */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", fontFamily: "monospace", fontSize: "220px", fontWeight: 900, lineHeight: 1, color: "rgba(59,130,246,0.03)", pointerEvents: "none", userSelect: "none" }}>07</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(139,92,246,0.6)", letterSpacing: "0.2em" }}>07.</span>
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #8b5cf6, transparent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#e8eaf6", margin: 0 }}>Get In Touch</h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #3b82f6, transparent)", maxWidth: "120px", marginTop: "1rem" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: hasForm ? "1fr 1.2fr" : "1fr", gap: "5rem" }} className="pp-outer-grid">
          
          {/* Contact Links Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: "15px", color: "rgba(232,234,246,0.45)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "400px" }}>
              Interested in collaborating or just want to say hi? Reach out through any of these platforms.
            </p>
            <div style={{ borderTop: "1px solid rgba(59,130,246,0.07)" }}>
              {contactLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="pp-contact-link group">
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <link.icon style={{ color: "rgba(6,182,212,0.5)", fontSize: "16px" }} />
                    <div>
                      <span className="pp-input-label" style={{ display: "block", marginBottom: "2px" }}>{link.label}</span>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#e8eaf6" }}>{link.value}</span>
                    </div>
                  </div>
                  <FaLink style={{ fontSize: "12px", color: "rgba(59,130,246,0.2)" }} className="group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          {hasForm && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="pp-inner-grid">
                  <div>
                    <label className="pp-input-label">Your Name</label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} required className="pp-contact-input" />
                  </div>
                  <div>
                    <label className="pp-input-label">Email Address</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required className="pp-contact-input" />
                  </div>
                </div>
                <div>
                  <label className="pp-input-label">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="pp-contact-input" style={{ resize: "none" }} />
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <motion.button type="submit" disabled={status === "loading" || status === "success"} className="pp-contact-btn" whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    <AnimatePresence mode="wait">
                      {status === "loading" ? (
                        <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <FaCircleNotch className="animate-spin" /> Sending...
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <FaCheckCircle /> Message Sent
                        </motion.span>
                      ) : (
                        <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          Transmit <FaPaperPlane />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  {status === "error" && <span style={{ color: "#ef4444", fontSize: "11px", fontFamily: "monospace" }}>Error. Try again.</span>}
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
