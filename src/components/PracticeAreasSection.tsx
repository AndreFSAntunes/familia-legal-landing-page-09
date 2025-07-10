
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Users } from 'lucide-react';

const PracticeAreasSection = () => {
  return (
    <section id="areas" className="py-20 px-4 bg-gradient-to-b from-olive-50 to-terracotta-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-800 mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-olive-600 max-w-2xl mx-auto">
            Especialização em três áreas fundamentais do direito, sempre com foco 
            no atendimento humano e resultados efetivos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
            <CardHeader className="text-center pb-4">
              <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl font-serif text-olive-800">Direito de Família</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-olive-600 mb-4 text-center">
                Cuidando das relações familiares com sensibilidade e expertise jurídica.
              </CardDescription>
              <ul className="space-y-2 text-sm text-olive-600">
                <li>• Divórcio consensual e litigioso</li>
                <li>• Guarda e visitação de filhos</li>
                <li>• Pensão alimentícia</li>
                <li>• Reconhecimento de paternidade</li>
                <li>• Inventário e partilha de bens</li>
                <li>• Violência doméstica</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
            <CardHeader className="text-center pb-4">
              <div className="bg-terracotta-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-terracotta-600" />
              </div>
              <CardTitle className="text-xl font-serif text-olive-800">Direito Previdenciário</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-olive-600 mb-4 text-center">
                Garantindo os direitos previdenciários que você conquistou.
              </CardDescription>
              <ul className="space-y-2 text-sm text-olive-600">
                <li>• Aposentadoria por tempo de contribuição</li>
                <li>• Aposentadoria por idade</li>
                <li>• Auxílio-doença e acidente</li>
                <li>• BPC (Benefício de Prestação Continuada)</li>
                <li>• Revisão de benefícios</li>
                <li>• Recursos administrativos</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
            <CardHeader className="text-center pb-4">
              <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl font-serif text-olive-800">Direito Trabalhista</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-olive-600 mb-4 text-center">
                Defendendo os direitos dos trabalhadores com determinação.
              </CardDescription>
              <ul className="space-y-2 text-sm text-olive-600">
                <li>• Rescisão indireta e demissão</li>
                <li>• Horas extras e adicionais</li>
                <li>• Assédio moral e sexual</li>
                <li>• Estabilidade da gestante</li>
                <li>• Acidente de trabalho</li>
                <li>• Equiparação salarial</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
