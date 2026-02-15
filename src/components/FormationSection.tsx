import { motion } from "framer-motion";
import { GraduationCap, Building2, Lightbulb, Eye } from "lucide-react";

const education = [
  {
    icon: Eye,
    institution: "Instituto Suel Abujamra",
    role: "Residência Médica em Oftalmologia",
    highlight: true,
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
    role: "Iniciação Científica — PROADI-SUS",
  },
  {
    icon: Lightbulb,
    institution: "Eretz.bio",
    role: "Inovação em Saúde",
  },
];

const FormationSection = () => {
  return (
    <section id="formacao" className="py-24 md:py-32 lg:py-40 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-sm tracking-[0.25em] uppercase text-muted-foreground mb-16 text-center"
        >
          Formação e Experiência
        </motion.h2>

        {/* ========================= */}
        {/* FORMAÇÃO ACADÊMICA */}
        {/* ========================= */}

        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="font-heading text-base uppercase tracking-widest text-muted-foreground mb-10 text-center">
            Formação Acadêmica
          </h3>

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group flex items-start gap-6 p-8 rounded-xl border 
                ${item.highlight ? "bg-background shadow-sm border-border" : "bg-transparent border-border/50"}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-background border border-border flex items-center justify-center">
                  <item.icon size={22} strokeWidth={1.5} className="text-muted-foreground" />
                </div>

                <div>
                  <h4
                    className={`font-heading ${
                      item.highlight ? "text-lg md:text-xl text-foreground" : "text-base md:text-lg text-foreground"
                    } leading-snug`}
                  >
                    {item.institution}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground font-body font-light">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* EXPERIÊNCIA COMPLEMENTAR */}
        {/* ========================= */}

        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Experiência Complementar
          </h3>

          <div className="space-y-6">
            {complementary.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 py-5 border-b border-border/40 last:border-b-0"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-background border border-border/50 flex items-center justify-center">
                  <item.icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                </div>

                <div>
                  <h4 className="font-heading text-sm text-foreground leading-snug">{item.institution}</h4>
                  <p className="mt-1 text-xs text-muted-foreground font-body font-light">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
