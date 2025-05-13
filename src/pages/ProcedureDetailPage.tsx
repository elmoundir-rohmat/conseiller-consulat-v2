import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileCheck, FileWarning, HelpCircle, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useProcedure } from '../context/ProcedureContext';
import ProcedureIcon from '../components/procedures/ProcedureIcon';
import CountrySpecifics from '../components/procedures/CountrySpecifics';

const ProcedureDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProcedureById } = useProcedure();
  const procedure = getProcedureById(id as string);
  const [activeTab, setActiveTab] = useState<string>('documents');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (procedure) {
      document.title = `${procedure.title} - Démarches MRE`;
    } else {
      document.title = "Démarche non trouvée - Démarches MRE";
    }
  }, [procedure]);

  if (!procedure) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Démarche non trouvée</h1>
          <p className="mb-6">La démarche que vous recherchez n'existe pas.</p>
          <Link to="/procedures" className="text-red-700 hover:text-red-800 font-medium">
            Retour à la liste des démarches
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-red-700 text-white py-10 mb-6">
        <div className="container mx-auto px-4">
          <Link to="/procedures" className="inline-flex items-center text-white hover:text-red-100 mb-6">
            <ArrowLeft size={18} className="mr-2" />
            Retour aux démarches
          </Link>
          <div className="flex items-center mb-4">
            <div className="bg-white/10 p-3 rounded-lg mr-4">
              <ProcedureIcon iconName={procedure.icon} className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">{procedure.title}</h1>
          </div>
          <p className="text-lg max-w-2xl">{procedure.shortDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 px-4 text-center font-medium ${
                    activeTab === 'documents' ? 'text-red-700 border-b-2 border-red-700' : 'text-gray-600 hover:text-red-700'
                  }`}
                  onClick={() => setActiveTab('documents')}
                >
                  Documents requis
                </button>
                <button
                  className={`flex-1 py-4 px-4 text-center font-medium ${
                    activeTab === 'steps' ? 'text-red-700 border-b-2 border-red-700' : 'text-gray-600 hover:text-red-700'
                  }`}
                  onClick={() => setActiveTab('steps')}
                >
                  Étapes à suivre
                </button>
                <button
                  className={`flex-1 py-4 px-4 text-center font-medium ${
                    activeTab === 'tips' ? 'text-red-700 border-b-2 border-red-700' : 'text-gray-600 hover:text-red-700'
                  }`}
                  onClick={() => setActiveTab('tips')}
                >
                  Astuces
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'documents' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Documents nécessaires</h2>
                    <ul className="space-y-3">
                      {procedure.documents.map((document, index) => (
                        <li key={index} className="flex items-start">
                          <FileCheck className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                          <span>{document}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'steps' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Étapes de la procédure</h2>
                    <ol className="space-y-4">
                      {procedure.steps.map((step, index) => (
                        <li key={index} className="flex">
                          <div className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Astuces et conseils</h2>
                    <ul className="space-y-3">
                      {procedure.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-yellow-500 mr-3 flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Country specifics */}
            <CountrySpecifics specifics={procedure.countrySpecifics} />

            {/* FAQ section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle size={20} className="mr-2 text-blue-600" />
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {procedure.faq.map((item, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      <span className="font-medium">{item.question}</span>
                      {activeFaq === index ? (
                        <ChevronUp size={18} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-500" />
                      )}
                    </button>
                    {activeFaq === index && (
                      <div className="p-4 pt-0 border-t">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
              <div className="flex items-center mb-4">
                <Clock size={20} className="text-blue-600 mr-2" />
                <h3 className="font-semibold">Délai estimé</h3>
              </div>
              <p className="mb-6 pl-7 text-gray-700">{procedure.timeframe}</p>

              <div className="flex items-center mb-4">
                <FileWarning size={20} className="text-yellow-600 mr-2" />
                <h3 className="font-semibold">Informations importantes</h3>
              </div>
              <ul className="mb-6 pl-7 space-y-2">
                <li className="text-gray-700">Vérifiez la validité de vos documents</li>
                <li className="text-gray-700">Consultez les spécificités par pays</li>
                <li className="text-gray-700">Contactez le consulat pour confirmer les exigences actuelles</li>
              </ul>

              <div className="flex items-center mb-4">
                <MapPin size={20} className="text-red-600 mr-2" />
                <h3 className="font-semibold">Où effectuer cette démarche</h3>
              </div>
              <p className="mb-6 pl-7 text-gray-700">
                Cette démarche doit être effectuée auprès du consulat du Maroc dans votre pays de résidence.
              </p>

              <Link
                to="/checklist-generator"
                className="block w-full bg-red-700 text-white text-center font-medium py-3 px-4 rounded-lg hover:bg-red-800 transition mb-3"
              >
                Générer ma checklist personnalisée
              </Link>
              <Link
                to="/consultation"
                className="block w-full bg-green-700 text-white text-center font-medium py-3 px-4 rounded-lg hover:bg-green-800 transition"
              >
                Consulter notre expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureDetailPage;