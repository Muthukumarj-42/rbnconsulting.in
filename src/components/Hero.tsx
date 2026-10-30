import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, ArrowUpRight, Clock, Shield } from 'lucide-react';
import { MaintenanceGraphic } from './MaintenanceGraphic';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Status Announcement Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300 uppercase">
                Notice: Scheduled Platform Upgrade
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                RBN Consultancy <br />
                <span className="gold-gradient-text">Services</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 tracking-tight">
                Our Website Is Under Reconstruction
              </h2>
            </div>

            {/* Required Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300/95 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              We&apos;re working behind the scenes to bring you a better digital experience. Our website is currently being updated. We&apos;ll be back soon!
            </p>

            {/* Prominent Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-5">
              
              {/* Call Us Button */}
              <a
                href="tel:+919176521179"
                className="gold-btn-gradient group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-950 text-base shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Call Us</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/15 text-slate-900 border border-black/10">
                  +91 9176521179
                </span>
              </a>

              {/* Send an Email Button */}
              <a
                href="mailto:rbnambiar@gmail.com"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-850 border border-amber-400/40 hover:border-amber-400 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

            </div>

            {/* Quick Guarantees & Info Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400/80 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Availability</p>
                  <p className="text-xs font-semibold text-slate-200">Mon - Sat (Regular)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-amber-400/80 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Client Support</p>
                  <p className="text-xs font-semibold text-slate-200">Direct Telephone</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Email Dispatch</p>
                  <p className="text-xs font-semibold text-slate-200">Priority Response</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <MaintenanceGraphic />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
