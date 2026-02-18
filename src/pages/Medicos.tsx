import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Construction } from "lucide-react";

const Medicos = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <Construction size={40} className="mx-auto text-muted-foreground/60" strokeWidth={1.5} />
          <h1 className="font-heading text-2xl text-foreground">Área Médica</h1>
          <p className="text-sm text-muted-foreground font-body max-w-md">
            Esta página está em construção. Em breve você encontrará recursos e informações dedicadas a profissionais médicos.
          </p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Medicos;
