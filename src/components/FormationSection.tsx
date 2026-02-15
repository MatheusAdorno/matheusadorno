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
    <section id="formacao" className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-sm tracking-[0.25em] uppercase text-muted-foreground mb-14 text-center"
        >
          Formação e Experiência
        </motion.h2>

        {/* ===================== */}
        {/* FORMAÇÃO ACADÊMICA */}
        {/* ===================== */}

        <div className="max-w-3xl mx-auto mb-16">
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
                <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-border flex items-center justify-center">
                  <item.icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                </div>

                <div>
                  <h4 className="font-heading text-base md:text-lg text-foreground leading-snug">{item.institution}</h4>
                  <p className="mt-2 text-sm text-muted-foreground font-light">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* EXPERIÊNCIA COMPLEMENTAR */}
        {/* ===================== */}

        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Experiência Complementar
          </h3>

          <div className="space-y-8">
            {complementary.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-sm border border-border/50 flex items-center justify-center">
                  <item.icon size={16} strokeWidth={1.5} className="text-muted-foreground" />
                </div>

                <div>
                  <h4 className="font-heading text-sm text-foreground leading-snug">{item.institution}</h4>
                  <p className="mt-1 text-xs text-muted-foreground font-light">{item.role}</p>
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
