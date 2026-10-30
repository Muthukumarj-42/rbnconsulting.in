import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdvisoryPillars } from './components/AdvisoryPillars';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 flex flex-col relative selection:bg-amber-500/25 selection:text-amber-200">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="fixed inset-0 bg-radial-navy pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AdvisoryPillars />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
