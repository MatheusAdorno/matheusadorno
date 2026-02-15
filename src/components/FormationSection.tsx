import { motion } from "framer-motion";
import { GraduationCap, Building2, Lightbulb, Eye } from "lucide-react";

const education = [
  {
    icon: Eye,
    institution: "Instituto Suel Abujamra",
    role: "Residência Médica em Oftalmologia",
  },
  {
    icon: GraduationCap,
    institution: "Faculdade Israelita de Ciências da Saúde Albert Einstein",
    role: "Graduação em Medicina",
  },
];

const complementary = [
  {
    icon: Building2,
    institution: "Hospital Israelita Albert Einstein",
    role: "Iniciação Científica em Inteligência Artificial — PROADI-SUS",
  },
  {
    icon: Lightbulb,
    institution: "Eretz.bio",
    role: "Estágio em Inovação em Saúde",
  },
];

const FormationSection = () => {
  return (
    <section id="formacao" className="py-14 md:py-18 lg:py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-sm tracking-[0.25em] uppercase text-muted-foreground mb-12 text-center"
        >
          Formação e Experiência
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Formação Acadêmica */}
          <div className="mb-12">
            <h3 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Formação Acadêmica
            </h3>

            <div className="space-y-10">
              {education.map((item, i) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-md border border-border flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="font-heading text-base md:text-lg text-foreground leading-snug">
                      {item.institution}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground font-light">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experiência Complementar */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Experiência Complementar
            </h3>

            <div className="space-y-10">
              {complementary.map((item, i) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-md border border-border flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="font-heading text-base md:text-lg text-foreground leading-snug">
                      {item.institution}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground font-light">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
