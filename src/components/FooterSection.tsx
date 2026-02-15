import { Linkedin, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="font-heading text-lg text-foreground">
            Matheus Ribeiro Adorno Silva
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Médico · São Paulo – Brasil
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
          </div>

          <p className="text-xs text-muted-foreground pt-6 font-body">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
