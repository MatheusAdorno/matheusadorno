import { motion } from "framer-motion";
import { ExternalLink, FileText, Brain, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Ativo" | "Em desenvolvimento";
  icon: React.ReactNode;
  url?: string;
}

const projects: Project[] = [
  {
    title: "Anki Forge – Gerador Inteligente de Flashcards para Medicina",
    description:
      "Plataforma que transforma PDFs médicos em flashcards estruturados, otimizados para active recall e spaced repetition. Desenvolvido para estudantes e residentes que desejam estudar de forma mais inteligente, não apenas mais intensa.",
    tags: ["IA", "PDF", "Anki", "Educação Médica"],
    status: "Ativo",
    icon: <Brain size={20} strokeWidth={1.5} />,
    url: "https://ankiforge.lovable.app/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
    className="border border-border rounded-sm p-6 md:p-8 bg-card hover:border-accent/40 transition-colors duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-2.5 bg-secondary rounded-sm text-foreground">{project.icon}</div>
      <Badge
        variant={project.status === "Ativo" ? "default" : "secondary"}
        className="text-[10px] tracking-wider uppercase font-body"
      >
        {project.status}
      </Badge>
    </div>

    <h3 className="font-heading text-lg md:text-xl text-foreground mb-3">{project.title}</h3>

    <p className="text-sm text-muted-foreground font-body font-light leading-relaxed mb-5">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] font-body font-medium tracking-wide uppercase px-2.5 py-1 bg-secondary text-muted-foreground rounded-sm"
        >
          {tag}
        </span>
      ))}
    </div>

    {project.url && (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground border border-border px-5 py-2.5 rounded-sm hover:border-accent/50 transition-colors duration-300"
      >
        Acessar
        <ExternalLink size={14} strokeWidth={1.5} />
      </a>
    )}
  </motion.div>
);

const Projetos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-14">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl mb-12 md:mb-16"
            >
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight text-foreground">
                Projetos
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed">
                Soluções tecnológicas na interseção entre medicina, inteligência artificial e inovação.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Projetos;
