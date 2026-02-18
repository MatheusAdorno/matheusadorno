import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const sectionLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Áreas", href: "#areas" },
  { label: "Visão", href: "#visao" },
];

const pageLinks = [
  { label: "Projetos", to: "/projetos", enabled: true },
  { label: "Pacientes", to: "/pacientes", enabled: false },
  { label: "Médicos", to: "/medicos", enabled: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleSectionClick = (href: string) => {
    setOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate("/" + href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-14">
        <Link
          to="/"
          className="font-heading text-base tracking-tight text-foreground"
        >
          Dr. Matheus Adorno
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}

          <Separator orientation="vertical" className="h-4 bg-border/50" />

          {pageLinks.map((link) =>
            link.enabled ? (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-body transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.to}
                className="text-sm font-body text-muted-foreground opacity-60 cursor-default flex items-center gap-1.5"
              >
                {link.label}
                <span className="text-[10px] text-muted-foreground/80 border border-border/60 rounded px-1 py-0.5 leading-none">
                  Em breve
                </span>
              </span>
            )
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
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
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}

              <Separator className="my-1" />

              <span className="text-[10px] font-body text-muted-foreground/60 uppercase tracking-widest">
                Páginas
              </span>

              {pageLinks.map((link) =>
                link.enabled ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-body transition-colors text-left ${
                      location.pathname === link.to
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span
                    key={link.to}
                    className="text-sm font-body text-muted-foreground opacity-60 cursor-default flex items-center gap-1.5"
                  >
                    {link.label}
                    <span className="text-[10px] text-muted-foreground/80 border border-border/60 rounded px-1 py-0.5 leading-none">
                      Em breve
                    </span>
                  </span>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
