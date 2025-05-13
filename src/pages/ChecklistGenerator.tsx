import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, ArrowRight, ListChecks } from 'lucide-react';

// Step 1: Country selection
const CountryStep: React.FC<{
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  onNext: () => void;
}> = ({ selectedCountry, onCountryChange, onNext }) => {
  const countries = [
    { value: 'france', label: 'France' },
    { value: 'belgique', label: 'Belgique' },
    { value: 'espagne', label: 'Espagne' },
    { value: 'italie', label: 'Italie' },
    { value: 'allemagne', label: 'Allemagne' },
    { value: 'pays_bas', label: 'Pays-Bas' },
    { value: 'canada', label: 'Canada' },
    { value: 'usa', label: 'États-Unis' },
    { value: 'emirats', label: 'Émirats Arabes Unis' },
    { value: 'autre', label: 'Autre pays' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dans quel pays résidez-vous ?</h2>
      <p className="text-gray-600 mb-6">
        Cette information nous permettra de personnaliser votre checklist avec les exigences spécifiques à votre pays de résidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {countries.map(country => (
          <button
            key={country.value}
            className={`p-4 border rounded-lg text-left hover:border-red-500 transition ${
              selectedCountry === country.value 
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200'
            }`}
            onClick={() => onCountryChange(country.value)}
          >
            {country.label}
          </button>
        ))}
      </div>

      <button 
        className="bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onNext}
        disabled={!selectedCountry}
      >
        Continuer
        <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

// Step 2: Procedure selection
const ProcedureStep: React.FC<{
  selectedProcedure: string;
  onProcedureChange: (procedure: string) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ selectedProcedure, onProcedureChange, onNext, onBack }) => {
  const procedures = [
    { value: 'cni', label: "Demande/renouvellement CNI" },
    { value: 'passeport', label: "Passeport" },
    { value: 'mariage', label: "Mariage" },
    { value: 'acte-naissance', label: "Acte de naissance" },
    { value: 'legalisation', label: "Légalisation de signature" },
    { value: 'procuration', label: "Procuration immobilière" },
    { value: 'certificat-vie', label: "Certificat de vie" },
    { value: 'reconnaissance-enfant', label: "Reconnaissance d'enfant" },
    { value: 'transfert-corps', label: "Transfert de corps" },
    { value: 'certificat-celibat', label: "Certificat de célibat" }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Quelle démarche souhaitez-vous effectuer ?</h2>
      <p className="text-gray-600 mb-6">
        Sélectionnez la démarche pour laquelle vous avez besoin d'une checklist personnalisée.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {procedures.map(procedure => (
          <button
            key={procedure.value}
            className={`p-4 border rounded-lg text-left hover:border-red-500 transition ${
              selectedProcedure === procedure.value 
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200'
            }`}
            onClick={() => onProcedureChange(procedure.value)}
          >
            {procedure.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center w-full sm:w-auto"
          onClick={onBack}
        >
          Retour
        </button>
        <button 
          className="bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onNext}
          disabled={!selectedProcedure}
        >
          Continuer
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Step 3: Personal information
const PersonalInfoStep: React.FC<{
  personalInfo: {
    email: string;
    fullName: string;
    phoneNumber: string;
    familyStatus: string;
  };
  onInfoChange: (name: string, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}> = ({ personalInfo, onInfoChange, onSubmit, onBack }) => {
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = 
      personalInfo.email.trim() !== '' && 
      personalInfo.fullName.trim() !== '' &&
      personalInfo.familyStatus !== '';
    
    setFormValid(isValid);
  }, [personalInfo]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Vos informations personnelles</h2>
      <p className="text-gray-600 mb-6">
        Ces informations nous permettront de personnaliser votre checklist et de vous l'envoyer par email.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={personalInfo.fullName}
            onChange={(e) => onInfoChange('fullName', e.target.value)}
            placeholder="Prénom et Nom"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={personalInfo.email}
            onChange={(e) => onInfoChange('email', e.target.value)}
            placeholder="votre.email@exemple.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={personalInfo.phoneNumber}
            onChange={(e) => onInfoChange('phoneNumber', e.target.value)}
            placeholder="+33 6 12 34 56 78"
          />
        </div>
        
        <div>
          <label htmlFor="familyStatus" className="block text-sm font-medium text-gray-700 mb-1">
            Situation familiale
          </label>
          <select
            id="familyStatus"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={personalInfo.familyStatus}
            onChange={(e) => onInfoChange('familyStatus', e.target.value)}
            required
          >
            <option value="">Sélectionnez votre situation</option>
            <option value="celibataire">Célibataire</option>
            <option value="marie">Marié(e)</option>
            <option value="divorce">Divorcé(e)</option>
            <option value="veuf">Veuf/Veuve</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center w-full sm:w-auto"
          onClick={onBack}
        >
          Retour
        </button>
        <button 
          className="bg-red-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 transition flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onSubmit}
          disabled={!formValid}
        >
          Générer ma checklist
          <CheckSquare size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Main component
const ChecklistGenerator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    procedure: '',
    personalInfo: {
      email: '',
      fullName: '',
      phoneNumber: '',
      familyStatus: ''
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Générateur de checklist - Démarches MRE";
  }, []);

  const handleCountryChange = (country: string) => {
    setFormData({
      ...formData,
      country
    });
  };

  const handleProcedureChange = (procedure: string) => {
    setFormData({
      ...formData,
      procedure
    });
  };

  const handleInfoChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call to generate PDF
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', { 
        state: { 
          email: formData.personalInfo.email,
          type: 'checklist'
        } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <div className="mr-4 bg-red-100 p-3 rounded-full">
              <ListChecks className="h-8 w-8 text-red-700" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Générateur de checklist personnalisée</h1>
              <p className="text-gray-600">
                Obtenez une liste de documents adaptée à votre situation spécifique
              </p>
            </div>
          </div>

          {/* Progress steps */}
          <div className="flex mb-8">
            <div className="flex-1">
              <div className={`h-1 ${currentStep >= 1 ? 'bg-red-700' : 'bg-gray-200'}`}></div>
              <div className="flex items-center mt-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  currentStep >= 1 ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="ml-2 text-sm">Pays</span>
              </div>
            </div>
            <div className="flex-1">
              <div className={`h-1 ${currentStep >= 2 ? 'bg-red-700' : 'bg-gray-200'}`}></div>
              <div className="flex items-center mt-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  currentStep >= 2 ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="ml-2 text-sm">Démarche</span>
              </div>
            </div>
            <div className="flex-1">
              <div className={`h-1 ${currentStep >= 3 ? 'bg-red-700' : 'bg-gray-200'}`}></div>
              <div className="flex items-center mt-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  currentStep >= 3 ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
                <span className="ml-2 text-sm">Informations</span>
              </div>
            </div>
          </div>

          {/* Form steps */}
          <div className="py-4">
            {currentStep === 1 && (
              <CountryStep 
                selectedCountry={formData.country}
                onCountryChange={handleCountryChange}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <ProcedureStep 
                selectedProcedure={formData.procedure}
                onProcedureChange={handleProcedureChange}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            )}

            {currentStep === 3 && (
              <PersonalInfoStep 
                personalInfo={formData.personalInfo}
                onInfoChange={handleInfoChange}
                onSubmit={handleSubmit}
                onBack={() => setCurrentStep(2)}
              />
            )}
          </div>

          {/* Loading state */}
          {isSubmitting && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700 mx-auto mb-4"></div>
                <p className="text-lg font-medium">Génération de votre checklist en cours...</p>
                <p className="text-gray-600">Merci de patienter quelques instants</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChecklistGenerator;