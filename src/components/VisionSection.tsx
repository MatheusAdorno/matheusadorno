import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section id="visao" className="py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8 md:mb-12">
            Visão
          </h2>
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground italic tracking-tight text-balance">
            "Acredito que o futuro da medicina será construído na integração entre excelência clínica, ciência de dados e inovação tecnológica."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
