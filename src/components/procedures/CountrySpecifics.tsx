import React, { useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface CountrySpecificsProps {
  specifics: Record<string, string>;
}

const CountrySpecifics: React.FC<CountrySpecificsProps> = ({ specifics }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const countryNames: Record<string, string> = {
    france: 'France',
    belgique: 'Belgique',
    espagne: 'Espagne',
    italie: 'Italie',
    allemagne: 'Allemagne',
    pays_bas: 'Pays-Bas',
    canada: 'Canada',
    usa: 'États-Unis',
    emirats: 'Émirats Arabes Unis',
    autre: 'Autres pays'
  };

  if (!specifics || Object.keys(specifics).length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <button 
        className="flex justify-between items-center w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-semibold flex items-center">
          <Globe size={20} className="mr-2 text-blue-600" />
          Spécificités par pays
        </h2>
        {isExpanded ? (
          <ChevronUp size={18} className="text-gray-500" />
        ) : (
          <ChevronDown size={18} className="text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {Object.entries(specifics).map(([country, info]) => (
            <div key={country} className="border-t pt-4 first:border-t-0 first:pt-0">
              <h3 className="font-medium text-lg mb-2">{countryNames[country] || country}</h3>
              <p className="text-gray-700">{info}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySpecifics;