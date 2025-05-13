import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Clock, FileQuestion } from 'lucide-react';
import { useProcedure } from '../context/ProcedureContext';
import HeroImage from '../components/ui/HeroImage';
import ExpertProfile from '../components/home/ExpertProfile';
import ProcedureCard from '../components/procedures/ProcedureCard';
import TestimonialCard from '../components/home/TestimonialCard';

const HomePage: React.FC = () => {
  const { procedures } = useProcedure();
  const featuredProcedures = procedures.slice(0, 4);

  useEffect(() => {
    // Update the document title
    document.title = "Démarches MRE - Prod Push Push vos démarches administratives";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <HeroImage />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              PushV1 vos démarches administratives consulaires
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Une plateforme d'information fiable et rapide pour les Marocains Résidant à l'Étranger. 
              Évitez les déplacements inutiles et obtenez des réponses précises à vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/procedures" 
                className="bg-white text-red-700 font-medium py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center"
              >
                Voir les démarches
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link 
                to="/checklist-generator" 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                Générer ma checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Pourquoi utiliser Démarches MRE ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Information fiable</h3>
              <p className="text-gray-600">
                Des fiches détaillées et vérifiées par un ancien consul marocain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gain de temps</h3>
              <p className="text-gray-600">
                Évitez les déplacements inutiles et les allers-retours au consulat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <FileQuestion className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accompagnement expert</h3>
              <p className="text-gray-600">
                Un ancien consul répond à vos questions spécifiques sous 48h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Démarches populaires</h2>
            <Link 
              to="/procedures" 
              className="text-red-700 font-medium hover:text-red-800 transition flex items-center"
            >
              Voir toutes
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProcedures.map(procedure => (
              <ProcedureCard key={procedure.id} procedure={procedure} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <ExpertProfile />

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Ce que disent nos utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Grâce à cette plateforme, j'ai pu renouveler mon passeport sans perdre de temps. Les instructions étaient précises et j'ai eu tous les documents du premier coup !"
              author="Nawal K."
              location="Lyon, France"
              rating={5}
            />
            <TestimonialCard 
              quote="L'option de consultation avec l'ancien consul a été d'une aide précieuse pour mon cas particulier de mariage mixte. Je recommande vivement ce service."
              author="Karim B."
              location="Bruxelles, Belgique"
              rating={5}
            />
            <TestimonialCard 
              quote="La checklist personnalisée m'a fait gagner beaucoup de temps. Tout était clair et bien expliqué, même pour une procédure aussi complexe qu'un transfert de corps."
              author="Mohammed L."
              location="Montréal, Canada"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à simplifier vos démarches ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Générez une checklist personnalisée pour votre situation ou consultez notre expert pour des conseils spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/checklist-generator" 
              className="bg-white text-green-700 font-medium py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Générer ma checklist
            </Link>
            <Link 
              to="/consultation" 
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition"
            >
              Consulter l'expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;