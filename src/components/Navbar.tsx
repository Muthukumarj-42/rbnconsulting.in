import React from 'react';
import { Phone, Mail, ShieldAlert } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-amber-500/15 bg-[#071324]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1.5px] shadow-lg shadow-amber-500/10">
            <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
              <span className="font-serif-brand font-bold text-amber-300 text-base sm:text-lg tracking-wider">
                RBN
              </span>
            </div>
          </div>
          <div>
            <span className="font-serif-brand text-lg sm:text-xl font-bold tracking-tight text-white block">
              RBN
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase block -mt-0.5">
              Consultancy Services
            </span>
          </div>
        </div>

        {/* Status Badge & Direct Hotline */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Scheduled Portal Upgrade</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919176521179"
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium group"
              title="Call RBN Consultancy hotline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">+91 9176521179</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href="mailto:rbnambiar@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium group"
              title="Email RBN Consultancy"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">rbnambiar@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
