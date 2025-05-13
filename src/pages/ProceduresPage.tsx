import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useProcedure } from '../context/ProcedureContext';
import ProcedureCard from '../components/procedures/ProcedureCard';

const ProceduresPage: React.FC = () => {
  const { procedures, searchProcedures } = useProcedure();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProcedures, setFilteredProcedures] = useState(procedures);

  useEffect(() => {
    document.title = "Catalogue des démarches - Démarches MRE";
  }, []);

  useEffect(() => {
    const results = searchProcedures(searchTerm);
    setFilteredProcedures(results);
  }, [searchTerm, searchProcedures]);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Catalogue des démarches administratives</h1>
          <p className="text-gray-600 mb-8">
            Trouvez des informations complètes sur toutes les démarches administratives consulaires pour les Marocains Résidant à l'Étranger.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher une démarche..."
              className="w-full py-3 px-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Procedures grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProcedures.length > 0 ? (
            filteredProcedures.map(procedure => (
              <ProcedureCard key={procedure.id} procedure={procedure} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                Aucune démarche ne correspond à votre recherche. Essayez avec d'autres termes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProceduresPage;