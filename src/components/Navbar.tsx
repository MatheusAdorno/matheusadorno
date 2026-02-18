import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const pageLinks = [
  { label: "Início", to: "/", enabled: true },
  { label: "Projetos", to: "/projetos", enabled: true },
  { label: "Pacientes", to: "/pacientes", enabled: false },
  { label: "Médicos", to: "/medicos", enabled: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="font-heading text-base tracking-tight text-foreground">
          Dr. Matheus Adorno
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {pageLinks.map((link) =>
            link.enabled ? (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {({ isActive }) => (
                  <span className="relative">
                    <span className={isActive ? "text-foreground" : "text-muted-foreground"}>{link.label}</span>

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ) : (
              <span key={link.to} className="text-sm text-muted-foreground/40 flex items-center gap-2 cursor-default">
                {link.label}
                <span className="text-[10px] uppercase tracking-widest">• em breve</span>
              </span>
            ),
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {pageLinks.map((link) =>
                link.enabled ? (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <span key={link.to} className="text-sm text-muted-foreground/40">
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
