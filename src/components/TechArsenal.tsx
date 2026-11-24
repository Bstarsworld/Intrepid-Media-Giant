import React from 'react';
import { Camera, Cpu, Eye, Sliders, Volume2, Sparkles } from 'lucide-react';
import { TECH_ARSENAL } from '../data/agencyData';

export const TechArsenal: React.FC = () => {
  const gearItems = [
    {
      title: "RED KOMODO-X 6K & ARRI ALEXA",
      tag: "6K SUPER 35 & LARGE FORMAT",
      spec: "16.5+ stops dynamic range, 6K DCI RAW at 80 FPS for pristine cinematic texture and depth.",
      icon: Camera
    },
    {
      title: "COOKE ANAMORPHIC & ATLAS ORION",
      tag: "LEGENDARY CINEMA GLASS",
      spec: "Oval bokeh, authentic horizontal blue/green streak flares, and organic cinema lens distortion.",
      icon: Eye
    },
    {
      title: "DJI INSPIRE 3 & RONIN 4D 6K",
      tag: "ROBOTIC TRACKING & AERIAL",
      spec: "Cinema ProRes RAW drone with RTK waypoint repeatability and 4-axis motorized stabilization.",
      icon: Cpu
    },
    {
      title: "DAVINCI RESOLVE THEATRICAL SUITE",
      tag: "ACES 33-POINT COLOR GRADING",
      spec: "Calibrated Flanders Scientific OLED masters, custom Kodak 2383 35mm print film emulation.",
      icon: Sliders
    }
  ];

  return (
    <section 
      id="arsenal" 
      className="py-20 relative bg-[#040806] border-t border-emerald-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span>PRODUCTION ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              HOLLYWOOD HARDWARE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
                ZERO COMPROMISES.
              </span>
            </h2>
          </div>

          <p className="text-neutral-300 text-xs sm:text-sm max-w-md font-mono">
            We own and deploy tier-one cinema equipment. No rented compromises. Every shot is captured in 6K raw and below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gearItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i}
                className="glass-panel p-5 rounded-xl border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>

                  <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="font-display text-sm font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                    {item.spec}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>ACTIVE INVENTORY</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
