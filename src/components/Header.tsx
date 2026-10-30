import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-zinc-200/80 bg-[#FAFAFA]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Name */}
        <span className="text-sm sm:text-base font-semibold tracking-tight text-zinc-900">
          RBN Consultancy Services
        </span>

        {/* Right: Minimal Status Indicator */}
        <div className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>Website Under Reconstruction</span>
        </div>
      </div>
    </header>
  );
};
