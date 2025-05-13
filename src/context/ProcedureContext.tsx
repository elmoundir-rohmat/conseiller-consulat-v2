import React, { createContext, useContext, useState, ReactNode } from 'react';
import { procedures } from '../data/procedures';
import { Procedure } from '../types';

interface ProcedureContextType {
  procedures: Procedure[];
  getProcedureById: (id: string) => Procedure | undefined;
  searchProcedures: (query: string) => Procedure[];
}

const ProcedureContext = createContext<ProcedureContextType>({
  procedures: [],
  getProcedureById: () => undefined,
  searchProcedures: () => [],
});

export const useProcedure = () => useContext(ProcedureContext);

interface ProcedureProviderProps {
  children: ReactNode;
}

export const ProcedureProvider: React.FC<ProcedureProviderProps> = ({ children }) => {
  const [proceduresList] = useState<Procedure[]>(procedures);

  const getProcedureById = (id: string) => {
    return proceduresList.find(procedure => procedure.id === id);
  };

  const searchProcedures = (query: string) => {
    if (!query) return proceduresList;
    
    const lowerCaseQuery = query.toLowerCase();
    return proceduresList.filter(procedure => 
      procedure.title.toLowerCase().includes(lowerCaseQuery) ||
      procedure.shortDescription.toLowerCase().includes(lowerCaseQuery)
    );
  };

  return (
    <ProcedureContext.Provider value={{ procedures: proceduresList, getProcedureById, searchProcedures }}>
      {children}
    </ProcedureContext.Provider>
  );
};