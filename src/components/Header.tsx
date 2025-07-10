
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/27fc59fe-7bb6-4128-959e-7e90a8654256.png" 
              alt="Michele Freitas Advogada - Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-serif font-bold text-olive-800">Dra. Michele Freitas</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-olive-700 hover:text-olive-900 font-medium transition-colors">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-olive-700 hover:text-olive-900 font-medium transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('areas')} className="text-olive-700 hover:text-olive-900 font-medium transition-colors">Áreas de Atuação</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-olive-700 hover:text-olive-900 font-medium transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="text-olive-700 hover:text-olive-900 font-medium transition-colors">Contato</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-olive-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-olive-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => handleMenuClick('inicio')} className="text-olive-700 hover:text-olive-900 font-medium text-left">Início</button>
              <button onClick={() => handleMenuClick('sobre')} className="text-olive-700 hover:text-olive-900 font-medium text-left">Sobre</button>
              <button onClick={() => handleMenuClick('areas')} className="text-olive-700 hover:text-olive-900 font-medium text-left">Áreas de Atuação</button>
              <button onClick={() => handleMenuClick('depoimentos')} className="text-olive-700 hover:text-olive-900 font-medium text-left">Depoimentos</button>
              <button onClick={() => handleMenuClick('contato')} className="text-olive-700 hover:text-olive-900 font-medium text-left">Contato</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
