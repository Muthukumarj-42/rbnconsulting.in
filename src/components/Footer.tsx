import React from 'react';
import { Phone, Mail, Globe, MapPin, ArrowUp } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030914] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px]">
                <div className="w-full h-full bg-[#0A192F] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif-brand font-bold text-amber-300 text-xs">RBN</span>
                </div>
              </div>
              <span className="font-serif-brand font-bold text-lg text-white tracking-wide">
                RBN Consultancy Services
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing strategic counsel, corporate financial guidance, and institutional governance to businesses navigating transformative growth.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>India • Global Practice Advisory</span>
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Direct Communication
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="tel:+919176521179"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 9176521179</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rbnambiar@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>rbnambiar@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>rbnconsulting.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Notice */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Notice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This domain is currently undergoing planned scheduled reconstruction. New portal capabilities and corporate client services will launch shortly.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors pt-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} RBN Consultancy Services. All rights reserved.</p>
          <p className="text-slate-400">
            Corporate Consultation & Strategic Advisory Services
          </p>
        </div>
      </div>
    </footer>
  );
};
