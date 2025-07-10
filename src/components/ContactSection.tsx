
import { Button } from "@/components/ui/button";
import { Phone, Monitor, Clock } from 'lucide-react';

const ContactSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?1=pt_BR&phone=5515988380319";

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-olive-50 to-terracotta-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-olive-600 mb-4">
            Estou aqui para ajudar você. Entre em contato e agende sua consulta online.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Monitor className="h-5 w-5 text-olive-600" />
            <span className="text-olive-600 font-medium">Atendimento 100% Online</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-olive-600 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-olive-800 mb-2">Telefone e WhatsApp</h3>
                <p className="text-olive-600">(15) 98838-0319</p>
                <p className="text-sm text-olive-500">Atendimento de seg. à sex., das 8h às 18h</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-terracotta-500 p-3 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-olive-800 mb-2">Consultas Online</h3>
                <p className="text-olive-600">Videoconferência segura e privada</p>
                <p className="text-sm text-olive-500">Atendimento onde você estiver</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-olive-600 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-olive-800 mb-2">Horário de Atendimento</h3>
                <p className="text-olive-600">
                  Segunda à Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h (agendamento)
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-olive-800 mb-4">
              Consulta Jurídica Online
            </h3>
            <p className="text-olive-600 mb-6">
              Oferecemos consultas jurídicas online por videoconferência para avaliar seu caso 
              e apresentar as melhores soluções jurídicas, com toda segurança e comodidade.
            </p>
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
