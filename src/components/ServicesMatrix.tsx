import React from 'react';
import { Layers, Sparkles, Check, ArrowUpRight, Zap, Clock, TrendingUp, Shield } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceTier } from '../types';
import { sound } from '../utils/audio';

interface ServicesMatrixProps {
  onSelectService: (service: ServiceTier) => void;
  onOpenBooking: () => void;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({
  onSelectService,
  onOpenBooking
}) => {
  return (
    <section 
      id="services" 
      className="py-24 relative bg-[#040806] bg-radial-glow border-t border-emerald-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>SERVICES WE OFFER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            SERVICES WE OFFER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
              HIGH-IMPACT PRODUCTION SUITES.
            </span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            Choose your production tier. Each solution combines world-class Hollywood cinematography with commercial conversion science.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-tier-${service.id}`}
                className={`group glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  service.popular 
                    ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.2)] bg-gradient-to-b from-emerald-950/30 to-transparent' 
                    : 'border-white/[0.08] hover:border-emerald-500/40'
                }`}
              >
                {/* Popular / Prestige Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block bg-gradient-to-l from-emerald-500 to-green-400 text-black font-mono font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md">
                      MOST REQUESTED
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Code Identifier */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-emerald-400 tracking-wider font-semibold">
                      {service.code}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-300">
                      {service.highlightBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 font-normal leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Impact Metric callout */}
                  <div className="my-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{service.impactMetric}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 mt-4">
                    <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & Action */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {service.timeline}
                    </span>
                    <span className="text-emerald-300 font-bold">
                      from {service.startingBudget}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        onSelectService(service);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/25 to-teal-500/15 hover:from-emerald-500 hover:to-green-400 hover:text-black text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Book {service.title.split(' ')[0]}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        onSelectService(service);
                      }}
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500 text-neutral-300 hover:text-black border border-white/[0.08] hover:border-emerald-400 transition-all"
                      title="Book Discovery Call for this service"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
