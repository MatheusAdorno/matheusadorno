import { motion } from "framer-motion";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight tracking-tight text-foreground text-balance">
              Oftalmologia baseada em evidência, tecnologia e educação.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg font-body font-light">
              Médico em formação no Instituto Suel Abujamra, com trajetória em pesquisa, ciência de dados e inovação em saúde.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                disabled
                className="px-6 py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Para Pacientes
              </button>
              <button
                disabled
                className="px-6 py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Para Médicos
              </button>
              <button
                disabled
                className="px-6 py-3 text-sm font-body font-medium tracking-wide border border-border text-muted-foreground rounded-sm cursor-not-allowed opacity-60 transition-opacity hover:opacity-80"
              >
                Projetos Tecnológicos
              </button>
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[2/3] bg-secondary rounded-sm overflow-hidden">
              <img
                src={doctorPlaceholder}
                alt="Dr. Matheus Ribeiro Adorno Silva"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
