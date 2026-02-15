import { motion } from "framer-motion";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex items-center pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-0">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] leading-tight tracking-tight text-foreground text-balance">
              Oftalmologia baseada em evidência, tecnologia e educação.
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 font-body font-light">
              Médico em formação no Instituto Suel Abujamra, com trajetória em pesquisa, ciência de dados e inovação em saúde.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <button
                disabled
                aria-label="Para Pacientes (em breve)"
                className="px-5 md:px-6 py-2.5 md:py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Para Pacientes
              </button>
              <button
                disabled
                aria-label="Para Médicos (em breve)"
                className="px-5 md:px-6 py-2.5 md:py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Para Médicos
              </button>
              <button
                disabled
                aria-label="Projetos Tecnológicos (em breve)"
                className="px-5 md:px-6 py-2.5 md:py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Projetos Tecnológicos
              </button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md flex-shrink-0"
          >
            <div className="relative aspect-[2/3] bg-secondary rounded-sm overflow-hidden">
              <img
                src={doctorPlaceholder}
                alt="Dr. Matheus Ribeiro Adorno Silva"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
