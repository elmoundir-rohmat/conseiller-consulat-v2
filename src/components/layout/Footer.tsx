import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-10 w-auto" isWhite={true} />
              <span className="font-bold text-xl">Démarches MRE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre guide simplifié pour toutes vos démarches administratives consulaires.
              Information fiable et accompagnement expert pour les Marocains du monde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-white hover:text-red-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-white hover:text-red-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/procedures" className="text-gray-300 hover:text-white transition">
                  Catalogue des démarches
                </Link>
              </li>
              <li>
                <Link to="/checklist-generator" className="text-gray-300 hover:text-white transition">
                  Générateur de checklist
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white transition">
                  Consultation expert
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Avenue Mohammed V, Rabat, Maroc
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:contact@demarches-mre.com" className="text-gray-300 hover:text-white transition">
                  contact@demarches-mre.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+212522000000" className="text-gray-300 hover:text-white transition">
                  +212 522 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Démarches MRE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;