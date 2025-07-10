
import { Button } from "@/components/ui/button";
import { Monitor } from 'lucide-react';

interface CTASectionProps {
  scrollToSection: (sectionId: string) => void;
}

const CTASection = ({ scrollToSection }: CTASectionProps) => {
  return (
    <section className="py-16 px-4 bg-olive-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Precisa de orientação jurídica?
        </h2>
        <p className="text-lg text-olive-100 mb-8 max-w-2xl mx-auto">
          Não enfrente seus problemas jurídicos sozinha. Agende uma consulta online 
          e descubra como posso ajudar você e sua família.
        </p>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Monitor className="h-5 w-5 text-olive-200" />
          <span className="text-olive-200">Atendimento 100% Online por Videoconferência</span>
        </div>
        <Button 
          className="bg-white text-olive-800 hover:bg-olive-50 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => scrollToSection('contato')}
        >
          Fale com a Dra. Michele Freitas Agora
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
