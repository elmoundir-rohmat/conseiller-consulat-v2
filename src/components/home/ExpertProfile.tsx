import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const ExpertProfile: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Un accompagnement expert par un ancien consul marocain
            </h2>
            <p className="text-gray-300 mb-4">
              Notre expert, ancien consul général du Maroc avec plus de 20 ans d'expérience, a accompagné des milliers de Marocains Résidant à l'Étranger dans leurs démarches administratives.
            </p>
            <p className="text-gray-300 mb-6">
              Fort de son expertise unique et de sa connaissance approfondie des procédures consulaires, il peut vous apporter des réponses précises et personnalisées à vos questions spécifiques.
            </p>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Expertise :</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">État civil</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">Immobilier</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">Documents officiels</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">Légalisations</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">Mariages</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm">Succession</span>
              </div>
            </div>
            <Link 
              to="/consultation" 
              className="inline-flex items-center bg-red-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-800 transition"
            >
              <MessageSquare size={18} className="mr-2" />
              Poser une question à l'expert
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-tr from-red-600 to-red-800 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/18530002/pexels-photo-18530002.jpeg"
                    alt="Ancien consul marocain"
                    className="rounded-lg w-full h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold">Mohammed Alaoui</h3>
                    <p>Ancien Consul Général du Maroc</p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm">Plus de 500 consultations</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Disponible pour vous aider avec :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Conseils sur les documents spécifiques à votre situation</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Situations administratives complexes</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Questions concernant votre cas particulier</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;