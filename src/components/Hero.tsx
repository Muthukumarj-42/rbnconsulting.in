import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-center px-6 py-20 sm:py-28 lg:py-36 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl mx-auto w-full"
      >
        {/* Main Brand Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          RBN Consultancy Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-xl sm:text-2xl font-medium text-zinc-700 tracking-tight">
          Page Under Re-Construction.
        </p>

        {/* Informative Description */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto font-normal">
          We&apos;re currently updating our website. Please contact us directly for any enquiries.
        </p>

        {/* Subtle Divider */}
        <div className="w-12 h-px bg-zinc-200 mx-auto my-10 sm:my-12" />

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            For Contacting Us
          </h2>

          {/* Contact Details: Single row on desktop, stacked on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base text-zinc-800">
            <a
              href="tel:+919176521179"
              className="inline-flex items-center gap-2.5 hover:text-zinc-950 transition-colors font-medium group"
              title="Call RBN Consultancy Services"
            >
              <Phone className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
              <span>+91 9176521179</span>
            </a>

            <span className="hidden sm:inline-block text-zinc-300">•</span>

            <a
              href="mailto:rbnambiar@gmail.com"
              className="inline-flex items-center gap-2.5 hover:text-zinc-950 transition-colors font-medium group"
              title="Email RBN Consultancy Services"
            >
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
              <span>rbnambiar@gmail.com</span>
            </a>
          </div>

          {/* Minimal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919176521179"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-medium transition-all duration-200 text-center"
            >
              Call Us
            </a>

            <a
              href="mailto:rbnambiar@gmail.com"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-medium transition-all duration-200 text-center"
            >
              Send Email
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
