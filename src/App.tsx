import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-900">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
