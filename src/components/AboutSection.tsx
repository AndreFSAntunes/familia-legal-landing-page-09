
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, Monitor } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-800 mb-6">
            Sobre a Profissional
          </h2>
          <p className="text-lg text-olive-600 leading-relaxed">
            Dedico minha carreira a defender os direitos de quem mais precisa de apoio jurídico 
            especializado e humanizado, com atendimento 100% online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-olive-100 p-3 rounded-lg">
                <Monitor className="h-6 w-6 text-olive-600" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-olive-800 mb-2">
                  Atendimento 100% Online
                </h3>
                <p className="text-olive-600">
                  Consultas jurídicas por videoconferência com toda a segurança e comodidade, 
                  eliminando deslocamentos e otimizando seu tempo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-olive-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-olive-600" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-olive-800 mb-2">
                  Atendimento Humanizado
                </h3>
                <p className="text-olive-600">
                  Cada cliente é único. Ofereço escuta ativa, acolhimento e soluções 
                  personalizadas para cada situação.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-terracotta-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-terracotta-600" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-olive-800 mb-2">
                  Segurança Jurídica
                </h3>
                <p className="text-olive-600">
                  Conhecimento técnico profundo e atualização constante para garantir 
                  os melhores resultados.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-olive-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-olive-600" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-olive-800 mb-2">
                  Foco em Pessoas
                </h3>
                <p className="text-olive-600">
                  Especialização no atendimento a mulheres, famílias, aposentados e 
                  trabalhadores em situações vulneráveis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-olive-50 to-terracotta-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <Badge className="bg-olive-600 text-white">OAB/SP 445.524</Badge>
              <h3 className="text-2xl font-serif font-bold text-olive-800">
                Dra. Michele Freitas
              </h3>
              <div className="space-y-3 text-olive-600">
                <p>📚 Pós-graduada em Direito de Família e Sucessões</p>
                <p>📚 Especialista em Direito Previdenciário</p>
                <p>📚 Certificação em Direito do Trabalho</p>
                <p>💻 Atendimento 100% Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
