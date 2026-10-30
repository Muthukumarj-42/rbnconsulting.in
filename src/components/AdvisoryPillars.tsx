import React from 'react';
import { Briefcase, BarChart3, ShieldCheck, Scale, Cpu, Users } from 'lucide-react';

export const AdvisoryPillars: React.FC = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: 'Strategic Management',
      description: 'Guiding corporate restructuring, market expansion, and long-range operational blueprints.',
    },
    {
      icon: BarChart3,
      title: 'Financial Governance',
      description: 'Capital optimization, fiscal forecasting, and financial risk mitigation frameworks.',
    },
    {
      icon: ShieldCheck,
      title: 'Regulatory & Compliance',
      description: 'Statutory adherence, audit readiness, and institutional policy alignment.',
    },
    {
      icon: Scale,
      title: 'Corporate Advisory',
      description: 'Executive counsel on strategic partnerships, transactions, and corporate governance.',
    },
    {
      icon: Cpu,
      title: 'Digital Modernization',
      description: 'Adopting contemporary digital tools, workflow automation, and enterprise technologies.',
    },
    {
      icon: Users,
      title: 'Organizational Leadership',
      description: 'Talent architecture, leadership development, and change management strategies.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-t border-slate-800/80 bg-[#061120]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            Practice Overview
          </p>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Comprehensive Advisory Practices
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Delivering cross-sector consulting expertise to enterprise leaders, institutions, and forward-looking businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
