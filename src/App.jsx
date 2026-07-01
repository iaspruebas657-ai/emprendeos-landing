import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import OpportunitySection from './components/OpportunitySection';
import MarketingAISection from './components/MarketingAISection';
import MethodOrbitaSection from './components/MethodOrbitaSection';
import HowItWorksSection from './components/HowItWorksSection';
import DeliverablesSection from './components/DeliverablesSection';
import ToolsSection from './components/ToolsSection';
import DifferentiationSection from './components/DifferentiationSection';
import OfferSection from './components/OfferSection';
import UrgencySection from './components/UrgencySection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import DiagnosticModal from './components/DiagnosticModal';
import { useScrollTracking } from './hooks/useScrollTracking';

function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  
  // Initialize scroll tracking
  useScrollTracking();

  return (
    <div style={{ backgroundColor: 'var(--bg-deep)', minHeight: '100vh', position: 'relative' }}>
      <Header />
      <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
      <HeroSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
      <ProblemSection />
      <OpportunitySection />
      <MarketingAISection />
      <MethodOrbitaSection />
      <HowItWorksSection />
      <DeliverablesSection />
      <ToolsSection />
      <DifferentiationSection />
      <OfferSection />
      <UrgencySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
