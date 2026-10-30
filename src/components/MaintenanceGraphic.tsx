import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Compass, ShieldCheck, TrendingUp, Sparkles, Layers } from 'lucide-react';

export const MaintenanceGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4 select-none">
      {/* Background Ambient Glows */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/15 via-blue-600/10 to-amber-300/10 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full aspect-square max-w-[420px] rounded-3xl p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-slate-900/90 via-[#0A192F]/80 to-[#030914]/90 border border-amber-500/20 shadow-2xl shadow-black/80 backdrop-blur-xl gold-border-glow">
        
        {/* Outer Rotating Dashed Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-5 rounded-full border border-dashed border-amber-500/25 pointer-events-none"
        />

        {/* Counter-rotating Inner Compass Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-14 rounded-full border border-slate-700/60 pointer-events-none flex items-center justify-between px-2"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-md shadow-amber-400" />
          <div className="w-2 h-2 rounded-full bg-blue-400/80 shadow-md shadow-blue-400" />
        </motion.div>

        {/* Centerpiece Monogram & Machinery Core */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Animated Central Emblem */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-b from-slate-800 to-[#0A192F] border-2 border-amber-400/40 p-1 shadow-xl flex items-center justify-center">
            
            {/* Spinning decorative background gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute text-amber-500/15"
            >
              <Cog className="w-24 h-24 sm:w-28 sm:h-28" />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-serif-brand text-2xl sm:text-3xl font-extrabold gold-gradient-text tracking-widest">
                RBN
              </span>
              <div className="h-0.5 w-8 bg-gradient-to-r from-amber-400 to-amber-600 my-1 rounded-full" />
              <span className="text-[9px] font-semibold text-amber-200/90 tracking-widest uppercase">
                CONSULTING
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Infrastructure Upgrade</span>
          </div>
        </div>

        {/* Floating Badges */}
        {/* Top Right: Strategy */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-2 sm:right-2 bg-slate-900/95 border border-amber-500/30 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5 backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium">Domain</p>
            <p className="text-xs font-semibold text-slate-100">Strategic Advisory</p>
          </div>
        </motion.div>

        {/* Bottom Left: Governance & Quality */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-3 -left-2 sm:left-2 bg-slate-900/95 border border-amber-500/30 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5 backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium">Assurance</p>
            <p className="text-xs font-semibold text-slate-100">Quality & Precision</p>
          </div>
        </motion.div>

        {/* Bottom Right: Growth */}
        <motion.div
          animate={{ y: [-3, 5, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute bottom-8 -right-4 bg-slate-900/95 border border-amber-500/30 rounded-xl px-3 py-2 shadow-xl items-center gap-2.5 backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium">Focus</p>
            <p className="text-xs font-semibold text-slate-100">Operational Value</p>
          </div>
        </motion.div>

        {/* Top Left: Architecture */}
        <motion.div
          animate={{ y: [3, -5, 3] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute top-8 -left-4 bg-slate-900/95 border border-amber-500/30 rounded-xl px-3 py-2 shadow-xl items-center gap-2.5 backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium">System</p>
            <p className="text-xs font-semibold text-slate-100">2026 Portal v2.0</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
