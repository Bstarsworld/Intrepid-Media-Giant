import React, { useState, useEffect } from 'react';
import { Film, ArrowUpRight, Phone, Mail, MapPin, Globe, Sparkles } from 'lucide-react';
import { IntrepidMascot } from './IntrepidMascot';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    la: '',
    nyc: '',
    london: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        la: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: true }),
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: true }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#020503] border-t border-emerald-500/20 pt-20 pb-12 overflow-hidden text-neutral-400">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* World Studio Clocks */}
        <div className="pb-12 border-b border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="text-white font-bold">LOS ANGELES // STAGES</div>
              <div className="text-neutral-400">{times.la || '04:51 PM'} PST</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="text-white font-bold">NEW YORK // EDIT SUITE</div>
              <div className="text-neutral-400">{times.nyc || '07:51 PM'} EST</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="text-white font-bold">LONDON // COLOR LAB</div>
              <div className="text-neutral-400">{times.london || '12:51 AM'} GMT</div>
            </div>
          </div>
        </div>

        {/* Big Brand Statement */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <IntrepidMascot size="sm" animated={true} withGlow={true} />
              <span className="font-display font-black text-2xl tracking-tight text-white">
                INTREPID <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">MEDIA GIANT</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              We are an elite cinema and commercial growth production house. 
              We direct high-concept films that make high-growth tech, luxury, and creator brands unforgettable.
            </p>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <a href="mailto:productions@intrepidmediagiant.com" className="hover:text-emerald-300 transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>productions@intrepidmediagiant.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Studio Direct: +1 (800) 555-IMG4K</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider mb-2">Production</div>
            <div><a href="#showreel" className="hover:text-emerald-300 transition-colors">2026 Showreel</a></div>
            <div><a href="#tech" className="hover:text-emerald-300 transition-colors">Hardware Arsenal</a></div>
            <div><a href="#projects" className="hover:text-emerald-300 transition-colors">Featured Films</a></div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">Services We Offer</a></div>
            <div><a href="#methodology" className="hover:text-emerald-300 transition-colors">The Protocol</a></div>
          </div>

          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider mb-2">Capabilities</div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">Flagship Commercials</a></div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">Paid Growth Engine</a></div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">Founder Documentaries</a></div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">Podcast Multi-Cam</a></div>
            <div><a href="#services" className="hover:text-emerald-300 transition-colors">3D VFX & CGI Motion</a></div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="text-white font-mono text-xs font-bold uppercase tracking-wider">
              Reserve Production
            </div>
            <p className="text-xs text-neutral-400">
              Only 3 client production slots remaining for current quarter.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Giant Watermark Typography */}
        <div className="pt-8 pb-4 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            © {new Date().getFullYear()} INTREPID MEDIA GIANT INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <span className="hover:text-white cursor-pointer">Privacy & NDAs</span>
            <span className="hover:text-white cursor-pointer">Terms of Commission</span>
            <span className="hover:text-white cursor-pointer">6K Master Specs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
