
const Footer = () => {
  return (
    <footer className="bg-olive-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/27fc59fe-7bb6-4128-959e-7e90a8654256.png" 
                alt="Michele Freitas Advogada - Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xl font-serif font-bold">Dra. Michele Freitas</span>
            </div>
            <p className="text-olive-200 text-sm leading-relaxed">
              Advocacia especializada com atendimento humanizado e soluções jurídicas eficazes 
              para famílias, aposentados e trabalhadores. Atendimento 100% online.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm text-olive-200">
              <li>Direito de Família</li>
              <li>Direito Previdenciário</li>
              <li>Direito Trabalhista</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-olive-200">
              <li>(15) 98838-0319</li>
              <li>💻 Atendimento 100% Online</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informações Legais</h4>
            <ul className="space-y-2 text-sm text-olive-200">
              <li>OAB/SP 445.524</li>
              <li>Atendimento Online</li>
              <li>Horário: Seg. à Sex., 8h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-olive-700 mt-8 pt-8 text-center">
          <p className="text-sm text-olive-200">
            © 2024 Dra. Michele Freitas - Todos os direitos reservados. 
            Desenvolvido com cuidado para melhor atendê-la.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
