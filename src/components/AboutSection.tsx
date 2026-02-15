import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8 md:mb-12 text-center">
            Sobre
          </h2>

          <div className="space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 font-body font-light text-center">
            <p>
              Sou médico graduado pela Faculdade Israelita de Ciências da Saúde Albert Einstein, com formação complementar em pesquisa e inovação em saúde.
            </p>
            <p>
              Durante a graduação, realizei Iniciação Científica por dois anos no Hospital Israelita Albert Einstein, atuando no projeto PROADI-SUS com foco em uso, interoperabilidade e territorialização de dados em saúde pública.
            </p>
            <p>
              Também tive experiência no ecossistema de inovação em saúde por meio de estágio na Eretz.bio.
            </p>
            <p>
              Além disso, cursei disciplina optativa em Introdução a Algoritmos de Inteligência Artificial e Big Data em Saúde, consolidando meu interesse na aplicação de ciência de dados à prática médica.
            </p>
            <p>
              Atualmente, realizo residência médica em Oftalmologia no Instituto Suel Abujamra, com interesse especial na integração entre excelência clínica e desenvolvimento de soluções tecnológicas aplicadas à saúde ocular.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
