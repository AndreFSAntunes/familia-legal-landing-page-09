
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="h-6 w-6 text-olive-600" />
              <Badge className="bg-olive-600 text-white px-3 py-1">100% Online</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-olive-800 mb-6 leading-tight">
              Defendendo seus direitos com 
              <span className="text-olive-700 block font-semibold">empatia, técnica e compromisso</span>
            </h1>
            <p className="text-lg text-olive-600 mb-6 leading-relaxed">
              Como advogada especialista em Direito de Família, Previdenciário e Trabalhista, 
              ofereço atendimento humanizado e soluções jurídicas eficazes para mulheres, 
              famílias, aposentados e trabalhadores.
            </p>
            <div className="bg-olive-50 border-l-4 border-olive-600 p-4 mb-8 rounded-r-lg">
              <div className="flex items-center space-x-2 text-olive-700">
                <Monitor className="h-5 w-5" />
                <span className="font-semibold">Atendimento 100% Online</span>
              </div>
              <p className="text-olive-600 text-sm mt-1">
                Consultas e acompanhamento jurídico por videoconferência, onde você estiver.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => scrollToSection('contato')}
              >
                Agende uma Consulta
              </Button>
              <Button 
                variant="outline" 
                className="border-olive-600 text-olive-700 hover:bg-olive-50 text-lg px-8 py-4"
                onClick={() => scrollToSection('sobre')}
              >
                Conheça minha história
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/ae98cb6a-49d0-4ea6-882c-a09c6b2b61d4.png"
                alt="Dra. Michele Freitas - Advogada especialista"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
