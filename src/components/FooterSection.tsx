import { Linkedin, Instagram, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-14 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center text-center space-y-5">
          <p className="font-heading text-base md:text-lg text-foreground">
            Dr. Matheus Ribeiro Adorno Silva
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Médico · Oftalmologia · São Paulo, Brasil
          </p>
          <p className="text-xs text-muted-foreground font-body">
            CRM em andamento
          </p>

          <div className="flex gap-5 pt-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Email profissional"
              className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60 pt-8 font-body max-w-md leading-relaxed">
            Este site tem caráter informativo e educacional. Não substitui consulta médica profissional.
          </p>

          <p className="text-xs text-muted-foreground pt-2 font-body">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
