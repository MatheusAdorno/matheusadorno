import { motion } from "framer-motion";
import { GraduationCap, Building2, Lightbulb, Eye } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    institution: "Faculdade Israelita de Ciências da Saúde Albert Einstein",
    role: "Graduação em Medicina",
  },
  {
    icon: Building2,
    institution: "Hospital Israelita Albert Einstein",
    role: "Iniciação Científica — PROADI-SUS",
  },
  {
    icon: Lightbulb,
    institution: "Eretz.bio",
    role: "Inovação em Saúde",
  },
  {
    icon: Eye,
    institution: "Instituto Suel Abujamra",
    role: "Residência Médica em Oftalmologia",
  },
];

const FormationSection = () => {
  return (
    <section id="formacao" className="py-20 md:py-28 lg:py-36 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground mb-10 md:mb-16 text-center"
        >
          Formação e Experiência
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-5 py-7 border-b border-border/60 last:border-b-0"
            >
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center transition-colors duration-300 group-hover:border-accent/40">
                <exp.icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                />
              </div>
              <div>
                <h3 className="font-heading text-base md:text-lg text-foreground leading-snug">
                  {exp.institution}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-body font-light">
                  {exp.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
