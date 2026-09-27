import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...links.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 border-violet-500/20"
          : "bg-[#0a0a0f]/60 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-lg bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent"
        >
          DA.
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  active === link.href ? "text-violet-400" : "hover:text-violet-400"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg,#8b5cf6,#2dd4bf)",
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-violet-400"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-violet-500/10"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-violet-400"
                      : "text-slate-300 hover:text-violet-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;