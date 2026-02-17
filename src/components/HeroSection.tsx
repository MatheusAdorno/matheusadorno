import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] md:min-h-screen flex items-center pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-0">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] leading-tight tracking-tight text-foreground text-balance max-w-xl">
              Oftalmologia guiada por evidências, tecnologia e inovação.
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0 font-body font-light">
              Residente em Oftalmologia no Instituto Suel Abujamra, com atuação em pesquisa, ciência de dados e inovação
              em saúde.{" "}
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {["Para Pacientes", "Para Médicos"].map((label, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="relative px-5 md:px-6 py-2.5 md:py-3 text-sm font-body font-medium tracking-wide border border-border text-foreground rounded-sm transition-all duration-300 hover:border-accent/50 hover:shadow-sm"
                >
                  {label}
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-body font-medium tracking-wider uppercase bg-muted text-muted-foreground rounded-sm leading-none">
                    Em breve
                  </span>
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/projetos"
                  className="inline-block px-5 md:px-6 py-2.5 md:py-3 text-sm font-body font-medium tracking-wide border border-border text-foreground rounded-sm transition-all duration-300 hover:border-accent/50 hover:shadow-sm"
                >
                  Projetos
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md flex-shrink-0"
          >
            <div className="relative aspect-[2/3] bg-secondary rounded-sm overflow-hidden">
              <img
                src={doctorPlaceholder}
                alt="Dr. Matheus Ribeiro Adorno Silva — Médico Oftalmologista"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
