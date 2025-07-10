
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-800 mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-olive-600">
            A confiança dos nossos clientes é nossa maior conquista.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-olive-50 to-terracotta-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-olive-700 mb-4 italic">
                "A Dra. Michele me acolheu em um momento muito difícil do meu divórcio. 
                Sua empatia e conhecimento fizeram toda a diferença no resultado final."
              </p>
              <div className="text-sm">
                <div className="font-semibold text-olive-800">Ana Carolina</div>
                <div className="text-olive-600">São Paulo, SP</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-terracotta-50 to-olive-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-olive-700 mb-4 italic">
                "Consegui minha aposentadoria depois de anos tentando. A dedicação e 
                competência da Dra. Michele foram fundamentais. Recomendo de olhos fechados!"
              </p>
              <div className="text-sm">
                <div className="font-semibold text-olive-800">José Roberto</div>
                <div className="text-olive-600">Santos, SP</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-olive-50 to-terracotta-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-olive-700 mb-4 italic">
                "Profissional excepcional! Me ajudou em uma questão trabalhista complexa. 
                Sempre clara nas explicações e muito humana no atendimento."
              </p>
              <div className="text-sm">
                <div className="font-semibold text-olive-800">Mariana Silva</div>
                <div className="text-olive-600">Campinas, SP</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
