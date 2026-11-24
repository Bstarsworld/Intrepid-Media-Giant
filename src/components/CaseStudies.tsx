import React from 'react';
import { Star, TrendingUp, Quote, CheckCircle2, ArrowUpRight, Play } from 'lucide-react';
import { sound } from '../utils/audio';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const testimonials = [
    {
      quote: "Intrepid Media Giant didn't just produce a commercial; they completely re-anchored our brand identity. Our Series B oversubscribed by 3.1x within two weeks of launching the film. Their anamorphic cinematography is leagues above any agency we've hired.",
      author: "Julian Vance",
      role: "Founder & CEO, Aether Dynamics",
      metric: "+420% Pipeline",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      company: "Aerospace Robotics"
    },
    {
      quote: "Our ROAS on Meta went from 1.6x to 4.2x after deploying Intrepid's performance ad engine. The 14 modular hooks they delivered drove $8.4M in Q4 attributed revenue alone. Unbelievable return on investment.",
      author: "Marcus Sterling",
      role: "VP of Growth, Vanguard Hyperwear",
      metric: "$8.4M Q4 Revenue",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      company: "D2C Performance Wear"
    },
    {
      quote: "From day one, the production was run like an A24 feature film. The lighting, Cooke lenses, and sound design were mind-blowing. We gained 480,000 YouTube subscribers in our first 90 days from their studio setup and short-form cuts.",
      author: "Elena Rostova",
      role: "Host & Producer, Founders Uncut",
      metric: "480k+ Subscribers",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      company: "Episodic Media"
    }
  ];

  return (
    <section 
      id="reviews" 
      className="py-24 relative bg-[#040806] bg-radial-glow border-t border-emerald-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>EXECUTIVE TESTIMONIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE PROOF IS ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
              THE BALANCE SHEET.
            </span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            Read directly from venture founders and marketing leaders who partnered with Intrepid Media Giant to scale their vision.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 font-mono text-xs border border-emerald-500/30 font-bold shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-emerald-700/50 mb-2" />

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
                />
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
