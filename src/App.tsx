import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProceduresPage from './pages/ProceduresPage';
import ProcedureDetailPage from './pages/ProcedureDetailPage';
import ChecklistGenerator from './pages/ChecklistGenerator';
import ConsultationPage from './pages/ConsultationPage';
import SuccessPage from './pages/SuccessPage';
import { ProcedureProvider } from './context/ProcedureContext';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <ProcedureProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/procedures" element={<ProceduresPage />} />
                <Route path="/procedures/:id" element={<ProcedureDetailPage />} />
                <Route path="/checklist-generator" element={<ChecklistGenerator />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/success" element={<SuccessPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProcedureProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;