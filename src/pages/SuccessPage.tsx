import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Mail, Home, ArrowLeft } from 'lucide-react';

interface LocationState {
  email: string;
  type: 'checklist' | 'consultation';
  consultationType?: 'free' | 'premium';
}

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  useEffect(() => {
    document.title = "Demande enregistrée - Démarches MRE";
  }, []);

  if (!state || !state.email || !state.type) {
    return <Navigate to="/" />;
  }

  const isChecklist = state.type === 'checklist';
  const isPremiumConsultation = state.type === 'consultation' && state.consultationType === 'premium';

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isChecklist ? 'Votre checklist a été générée !' : 'Votre demande a bien été enregistrée !'}
          </h1>
          
          <p className="text-gray-600 mb-6">
            {isChecklist ? (
              <>
                Nous avons envoyé votre checklist personnalisée à l'adresse <strong>{state.email}</strong>. 
                Consultez votre boîte de réception (et vos spams si nécessaire).
              </>
            ) : isPremiumConsultation ? (
              <>
                Merci pour votre paiement ! Notre expert vous répondra dans les 24 heures à l'adresse <strong>{state.email}</strong>.
              </>
            ) : (
              <>
                Notre expert vous répondra dans les 48 heures maximum à l'adresse <strong>{state.email}</strong>.
              </>
            )}
          </p>
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-gray-600 mb-6">
              {isChecklist ? (
                "N'hésitez pas à consulter nos fiches détaillées ou à poser une question à notre expert si vous avez besoin de plus d'informations."
              ) : (
                "En attendant, vous pouvez consulter nos fiches détaillées ou générer une checklist personnalisée pour votre démarche."
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="flex items-center justify-center bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition"
              >
                <Home size={18} className="mr-2" />
                Retour à l'accueil
              </Link>
              
              {isChecklist ? (
                <Link 
                  to="/consultation" 
                  className="flex items-center justify-center border border-red-700 text-red-700 py-3 px-6 rounded-lg font-medium hover:bg-red-50 transition"
                >
                  <Mail size={18} className="mr-2" />
                  Consulter l'expert
                </Link>
              ) : (
                <Link 
                  to="/procedures" 
                  className="flex items-center justify-center border border-red-700 text-red-700 py-3 px-6 rounded-lg font-medium hover:bg-red-50 transition"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Voir les démarches
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;