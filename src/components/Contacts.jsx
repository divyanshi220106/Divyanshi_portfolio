import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // { type: "error" | "success", text: string }
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const handleContact = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setSending(true);

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );

    window.location.href = `mailto:divyanshiagarwal22@gmail.com?subject=${subject}&body=${body}`;

    setStatus({ type: "success", text: "Opening your email app..." });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSending(false), 800);
  };

  const contactLinks = [
    {
      href: "mailto:divyanshiagarwal22@gmail.com",
      label: "Email",
      value: "divyanshiagarwal22@gmail.com",
      bg: "rgba(139,92,246,0.15)",
      color: "text-violet-400",
      external: false,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      stroke: true,
    },
    {
      href: "https://linkedin.com/in/divyanshi-agarwal-95911827a",
      label: "LinkedIn",
      value: "divyanshi-agarwal-95911827a",
      bg: "rgba(20,184,166,0.15)",
      color: "text-teal-400",
      external: true,
      fill: true,
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      href: "https://github.com/divyanshi220106",
      label: "GitHub",
      value: "github.com/divyanshi220106",
      bg: "rgba(167,139,250,0.1)",
      color: "text-violet-400",
      external: true,
      fill: true,
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
  ];

  return (
    <Reveal>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* soft glow background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="reveal text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-medium mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              Open to opportunities
            </span>

            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              Let's connect
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Open to internships, collabs, and interesting conversations.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-8 items-start">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-violet-500/20 rounded-2xl p-7"
            >
              <h3 className="font-display font-semibold text-white mb-5">
                Send a message
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white text-sm placeholder:text-slate-500 outline-none focus:border-violet-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white text-sm placeholder:text-slate-500 outline-none focus:border-violet-400 transition-colors"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white text-sm placeholder:text-slate-500 outline-none focus:border-violet-400 transition-colors resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContact}
                  disabled={sending}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </motion.button>

                {status && (
                  <p
                    className={`text-xs text-center ${
                      status.type === "error"
                        ? "text-red-400"
                        : "text-teal-400"
                    }`}
                  >
                    {status.text}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/5 border border-violet-500/20 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-violet-400 transition-colors"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.bg }}
                  >
                    <svg
                      className={`w-5 h-5 ${item.color}`}
                      fill={item.fill ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke={item.stroke ? "currentColor" : undefined}
                    >
                      {item.icon ? item.icon : <path d={item.path} />}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm">
                      {item.label}
                    </p>
                    <p className="text-slate-400 text-xs truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="bg-white/5 border border-violet-500/20 rounded-2xl p-5 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(20,184,166,0.1)" }}
                >
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Phone</p>
                  <p className="text-slate-400 text-xs">+91 74173 23020</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Contacts;