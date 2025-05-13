import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
          <span className="font-bold text-xl text-red-700">Démarches MRE</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-gray-800 hover:text-red-700 transition ${
              location.pathname === '/' ? 'font-medium text-red-700' : ''
            }`}
          >
            Accueil
          </Link>
          <Link 
            to="/procedures" 
            className={`text-gray-800 hover:text-red-700 transition ${
              location.pathname === '/procedures' ? 'font-medium text-red-700' : ''
            }`}
          >
            Démarches
          </Link>
          <Link 
            to="/checklist-generator" 
            className={`text-gray-800 hover:text-red-700 transition ${
              location.pathname === '/checklist-generator' ? 'font-medium text-red-700' : ''
            }`}
          >
            Générateur de Checklist
          </Link>
          <Link 
            to="/consultation" 
            className={`text-gray-800 hover:text-red-700 transition ${
              location.pathname === '/consultation' ? 'font-medium text-red-700' : ''
            }`}
          >
            Consultation
          </Link>
          <button className="flex items-center text-gray-800 hover:text-red-700">
            <Globe size={18} className="mr-1" />
            <span>FR</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-gray-800 hover:text-red-700 transition py-2 ${
                location.pathname === '/' ? 'font-medium text-red-700' : ''
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/procedures" 
              className={`text-gray-800 hover:text-red-700 transition py-2 ${
                location.pathname === '/procedures' ? 'font-medium text-red-700' : ''
              }`}
            >
              Démarches
            </Link>
            <Link 
              to="/checklist-generator" 
              className={`text-gray-800 hover:text-red-700 transition py-2 ${
                location.pathname === '/checklist-generator' ? 'font-medium text-red-700' : ''
              }`}
            >
              Générateur de Checklist
            </Link>
            <Link 
              to="/consultation" 
              className={`text-gray-800 hover:text-red-700 transition py-2 ${
                location.pathname === '/consultation' ? 'font-medium text-red-700' : ''
              }`}
            >
              Consultation
            </Link>
            <button className="flex items-center text-gray-800 hover:text-red-700 py-2">
              <Globe size={18} className="mr-1" />
              <span>FR</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;