import React from 'react';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, Film, MonitorPlay, Zap } from 'lucide-react';
import { PRODUCTION_PIPELINE } from '../data/agencyData';

export const Methodology: React.FC = () => {
  return (
    <section 
      id="methodology" 
      className="py-24 relative bg-[#040806] border-t border-emerald-500/20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE PRODUCTION STANDARD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE INTREPID PROTOCOL: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
              FROM SCRIPT TO DOMINANCE.
            </span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            A battle-tested production pipeline developed across 150+ high-stakes shoots. Zero chaos, zero delays, 100% predictable cinematic excellence.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTION_PIPELINE.map((step, idx) => (
            <div
              key={step.step}
              id={`methodology-step-${step.step}`}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.05] text-neutral-300 border border-white/[0.06]">
                    {step.duration}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold mb-1">
                  {step.phase}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                  Phase Deliverable:
                </div>
                <div className="font-mono text-xs text-emerald-300 font-medium flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-transparent to-green-950/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                The Intrepid Perfection Guarantee
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">
                Every contract includes dedicated Frame.io review passes, colorist grading sessions, and complete raw 6K archive delivery.
              </p>
            </div>
          </div>

          <a
            href="#book"
            className="font-mono text-xs text-emerald-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-emerald-500/40 transition-colors"
          >
            <span>Initiate Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
