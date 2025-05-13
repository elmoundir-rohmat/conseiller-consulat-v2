import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Procedure } from '../../types';
import ProcedureIcon from './ProcedureIcon';

interface ProcedureCardProps {
  procedure: Procedure;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ procedure }) => {
  return (
    <Link 
      to={`/procedures/${procedure.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-3 rounded-lg mr-3">
            <ProcedureIcon iconName={procedure.icon} className="h-6 w-6 text-red-700" />
          </div>
          <h3 className="font-semibold text-lg">{procedure.title}</h3>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">
          {procedure.shortDescription}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {procedure.documents.length} documents requis
          </span>
          <span className="text-red-700 flex items-center text-sm font-medium">
            Voir les détails
            <ChevronRight size={16} className="ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProcedureCard;