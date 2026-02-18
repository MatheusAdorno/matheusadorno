import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sectionLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Áreas", href: "#areas" },
  { label: "Visão", href: "#visao" },
];

const pageLinks = [
  { label: "Projetos", to: "/projetos", enabled: true, highlight: true },
  { label: "Pacientes", to: "/pacientes", enabled: false },
  { label: "Médicos", to: "/medicos", enabled: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // Detecta seção ativa
  useEffect(() => {
    if (!isHome) return;

    const sections = sectionLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleSectionClick = (href: string) => {
    setOpen(false);

    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", {
        state: { scrollTo: href },
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-heading text-base tracking-tight text-foreground">
          Dr. Matheus Adorno
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {/* Seções */}
          <div className="flex items-center gap-6">
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSectionClick(link.href)}
                className={`text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Páginas */}
          <div className="flex items-center gap-6">
            {pageLinks.map((link) =>
              link.enabled ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    link.highlight
                      ? "px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
                      : `text-sm transition-colors ${
                          location.pathname === link.to
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`
                  }
                >
                  {link.label}
                </Link>
              ) : (
                <span key={link.to} className="text-sm text-muted-foreground/50 flex items-center gap-2">
                  {link.label}
                  <span className="text-[10px] uppercase tracking-widest">• em breve</span>
                </span>
              ),
            )}
          </div>
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {link.label}
                </button>
              ))}

              <div className="border-t border-border my-2" />

              <span className="text-xs uppercase tracking-widest text-muted-foreground/50">Páginas</span>

              {pageLinks.map((link) =>
                link.enabled ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.to} className="text-sm text-muted-foreground/50">
                    {link.label} • em breve
                  </span>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
