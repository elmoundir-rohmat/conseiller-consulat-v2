import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, CreditCard, SendHorizontal, ArrowRight, HelpCircle } from 'lucide-react';
import { useProcedure } from '../context/ProcedureContext';

const ConsultationPage: React.FC = () => {
  const [consultationType, setConsultationType] = useState<'free' | 'premium'>('free');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [procedureId, setProcedureId] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { procedures } = useProcedure();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Consultation avec un expert - Démarches MRE";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', { 
        state: { 
          email: email,
          type: 'consultation',
          consultationType: consultationType
        } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Consultation avec un ancien consul</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Posez votre question à notre expert et obtenez une réponse personnalisée sous 48h maximum. 
              Notre consultant, ancien consul du Maroc, vous apportera des conseils précis et fiables.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div 
                className={`p-6 cursor-pointer ${
                  consultationType === 'free' 
                    ? 'bg-red-50 border-b-2 md:border-b-0 md:border-r-2 border-red-700' 
                    : 'bg-white hover:bg-gray-50 transition'
                }`}
                onClick={() => setConsultationType('free')}
              >
                <div className="flex items-center mb-4">
                  <MessageSquare className="text-red-700 mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Question Gratuite</h2>
                </div>
                <ul className="space-y-2 ml-8 mb-4">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>1 question simple</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Réponse sous 48h</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Par email ou WhatsApp</span>
                  </li>
                </ul>
                <p className="font-bold text-xl text-center">GRATUIT</p>
              </div>
              
              <div 
                className={`p-6 cursor-pointer ${
                  consultationType === 'premium' 
                    ? 'bg-red-50 border-t-2 md:border-t-0 md:border-l-2 border-red-700' 
                    : 'bg-white hover:bg-gray-50 transition'
                }`}
                onClick={() => setConsultationType('premium')}
              >
                <div className="flex items-center mb-4">
                  <CreditCard className="text-red-700 mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Consultation Premium</h2>
                </div>
                <ul className="space-y-2 ml-8 mb-4">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Cas complexes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Réponse prioritaire (24h)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Suivi personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span>Appel de 15 minutes inclus</span>
                  </li>
                </ul>
                <p className="font-bold text-xl text-center">15 €</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Votre prénom"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="procedure" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de démarche
                </label>
                <select
                  id="procedure"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={procedureId}
                  onChange={(e) => setProcedureId(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez une démarche</option>
                  {procedures.map(procedure => (
                    <option key={procedure.id} value={procedure.id}>
                      {procedure.title}
                    </option>
                  ))}
                  <option value="autre">Autre (précisez dans votre question)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre question
                </label>
                <textarea
                  id="question"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Posez votre question de manière précise pour obtenir la réponse la plus adaptée."
                  required
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  <HelpCircle size={14} className="inline mr-1" />
                  Maximum 500 caractères. Soyez précis et concis.
                </p>
              </div>

              {consultationType === 'premium' && (
                <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm font-medium">
                    Pour la consultation Premium, vous serez redirigé vers la page de paiement après validation de ce formulaire.
                  </p>
                </div>
              )}
              
              <button 
                type="submit"
                className="w-full bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    {consultationType === 'free' ? (
                      <>Envoyer ma question<SendHorizontal size={18} className="ml-2" /></>
                    ) : (
                      <>Continuer vers le paiement<ArrowRight size={18} className="ml-2" /></>
                    )}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;