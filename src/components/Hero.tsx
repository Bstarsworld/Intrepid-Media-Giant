import React from 'react';
import { Play, ArrowUpRight, Sparkles, ShieldCheck, Film, Video, Radio } from 'lucide-react';
import { IntrepidMascot } from './IntrepidMascot';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenReel: () => void;
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReel,
  onOpenBooking,
  onExploreWork
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-glow"
    >
      {/* Dynamic Background Noise and Cinema Grid */}
      <div className="absolute inset-0 bg-grid-cinema opacity-40 pointer-events-none" />
      
      {/* Ambient Emerald Tech Light Cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (7 Columns) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Live Camera HUD Telemetry Strip with Green Tech Blink */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-[11px] font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                REC [00:14:28:19]
              </span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-300">6K DCI RAW</span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-300">24.00 FPS</span>
              <span className="text-white/30">•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Q1 PRODUCTION SLOTS: 2 AVAILABLE</span>
              </span>
            </div>

            {/* Massive Display Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05]">
              HIGH-END <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200 drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
                CINEMATIC FILMS.
              </span>
              <br />
              EXPONENTIAL ROAS.
            </h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              We engineer boundary-pushing commercial films, founder brand manifestos, and performance video systems 
              that turn ambitious companies into undisputed market leaders.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              
              {/* Watch Showreel Button */}
              <button
                id="hero-watch-reel-btn"
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenReel();
                }}
                className="relative group px-6 py-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 hover:border-emerald-400 text-white font-mono text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-emerald-300 fill-emerald-300 ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-emerald-300">WATCH 2026 REEL</div>
                  <div className="text-[10px] text-neutral-400">6K Anamorphic Master (1:45)</div>
                </div>
              </button>

              {/* Book Call Button */}
              <button
                id="hero-book-call-btn"
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenBooking();
                }}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>

            {/* Credibility & Guarantee Badges */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hollywood Guild Directors</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-emerald-400" />
                <span>Full RED & ARRI 6K Pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>3.8x Avg ROAS Growth</span>
              </div>
            </div>

          </div>

          {/* Right Column: Holographic Mascot Showcase Card (5 Columns) */}
          <div className="lg:col-span-5 relative">
            
            {/* Holographic Frame Card */}
            <div className="relative rounded-3xl glass-panel border border-emerald-500/40 p-6 sm:p-7 shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden bg-gradient-to-b from-emerald-950/30 via-black/80 to-[#030705]">
              
              {/* Corner Sci-Fi Tech Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

              {/* Card Header Telemetry */}
              <div className="flex items-center justify-between font-mono text-[11px] pb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Intrepid Bot</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px]">
                  ONLINE
                </span>
              </div>

              {/* Robot Mascot Hero Centerpiece */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                <IntrepidMascot 
                  size="xl" 
                  animated={true} 
                  withGlow={true} 
                  showHoloRing={true} 
                  className="mx-auto hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Mini Interactive Controls */}
              <div className="pt-4 border-t border-emerald-500/20 flex justify-center font-mono text-xs">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onExploreWork();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500 hover:text-black text-neutral-300 border border-white/[0.08] hover:border-emerald-400 flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Video className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
                  <span>Explore Work</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
