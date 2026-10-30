import React, { useState } from 'react';
import { Phone, Mail, Check, Copy, ExternalLink, MessageSquare, Headphones } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phone = '+91 9176521179';
  const email = 'rbnambiar@gmail.com';

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Client Desk</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Need Immediate Assistance?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            While our digital platform undergoes planned restructuring, our advisory team remains fully operational and reachable.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Phone Card */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0A192F]/90 border border-slate-800 hover:border-amber-400/50 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-amber-500/10">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-800/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                Direct Telephone Hotline
              </h3>
              <a
                href="tel:+919176521179"
                className="mt-2 block text-2xl sm:text-3xl font-bold text-white hover:text-amber-300 transition-colors tracking-tight"
              >
                +91 9176521179
              </a>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Call directly for urgent client advisories, strategic appointments, and business consultations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Line Active
              </span>
              <a
                href="tel:+919176521179"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
              >
                <span>Call Hotline</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0A192F]/90 border border-slate-800 hover:border-amber-400/50 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-amber-500/10">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-800/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                Official Inquiries & Proposals
              </h3>
              <a
                href="mailto:rbnambiar@gmail.com"
                className="mt-2 block text-xl sm:text-2xl font-bold text-white hover:text-amber-300 transition-colors tracking-tight break-all"
              >
                rbnambiar@gmail.com
              </a>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Send formal proposals, partnership queries, or consulting mandates for swift executive appraisal.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                Response within 24 hours
              </span>
              <a
                href="mailto:rbnambiar@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
