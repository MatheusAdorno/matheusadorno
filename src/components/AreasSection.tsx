import { motion } from "framer-motion";
import { BookOpen, Database, Cpu } from "lucide-react";

const areas = [
  {
    icon: BookOpen,
    title: "Educação em Saúde",
    description: "Desenvolvimento de materiais educativos baseados em evidência científica.",
  },
  {
    icon: Database,
    title: "Pesquisa e Dados em Saúde",
    description: "Experiência em projetos envolvendo interoperabilidade e análise de dados no SUS.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e Inteligência Artificial",
    description: "Desenvolvimento de soluções digitais aplicadas à prática médica e à oftalmologia.",
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground mb-10 md:mb-16 text-center"
        >
          Áreas de Interesse
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 md:p-8 bg-background rounded-sm border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-sm"
            >
              <area.icon
                className="text-accent mb-4 md:mb-6 transition-colors duration-300 group-hover:text-primary"
                size={24}
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-base md:text-lg text-foreground mb-2 md:mb-3">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body font-light">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
