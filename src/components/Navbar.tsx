import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const pageLinks = [
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
              <NavLink key={link.to} to={link.to} className="relative text-sm font-medium transition-colors">
                {({ isActive }) => (
                  <span className="relative">
                    <span className={isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                      {link.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-foreground rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ) : (
              <div key={link.to} className="relative group text-sm font-medium text-muted-foreground/40 cursor-default">
                {link.label}

                {/* Tooltip */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-200
                                pointer-events-none"
                >
                  <div className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                    Em breve
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Mobile Button */}
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
            <div className="flex flex-col px-6 py-6 gap-6">
              {pageLinks.map((link) =>
                link.enabled ? (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <div className="relative group text-sm text-muted-foreground/40">
                    {link.label}

                    <div className="mt-1 text-xs opacity-70">Em breve</div>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
