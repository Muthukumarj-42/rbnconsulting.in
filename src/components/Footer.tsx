import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-200/80 bg-[#FAFAFA] py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
        <span className="font-medium text-zinc-700">RBN Consultancy Services</span>
        <span>© 2026 All Rights Reserved.</span>
      </div>
    </footer>
  );
};
