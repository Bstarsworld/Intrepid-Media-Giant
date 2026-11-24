import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import { BookingFormData } from '../types';
import { IntrepidMascot } from './IntrepidMascot';
import { sound } from '../utils/audio';

interface BookingTerminalProps {
  initialBrief?: string;
  initialBudget?: string;
}

export const BookingTerminal: React.FC<BookingTerminalProps> = ({
  initialBrief = '',
  initialBudget = '$25,000 – $35,000'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    companyName: '',
    projectType: 'Commercial / Brand Film',
    budgetRange: initialBudget || '$25,000 – $50,000',
    targetTimeline: 'Within 30 Days',
    projectBrief: initialBrief,
    preferredDate: '2026-09-24',
    preferredTime: '11:00 AM PST'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if initialBrief changes from estimator
  React.useEffect(() => {
    if (initialBrief) {
      setFormData(prev => ({
        ...prev,
        projectBrief: initialBrief,
        budgetRange: initialBudget || prev.budgetRange
      }));
    }
  }, [initialBrief, initialBudget]);

  const availableSlots = [
    "09:30 AM PST",
    "11:00 AM PST",
    "01:30 PM PST",
    "03:45 PM PST",
    "05:00 PM PST"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playSuccess();
    }, 1000);
  };

  const handleReset = () => {
    sound.playClick();
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      projectType: 'Commercial / Brand Film',
      budgetRange: '$25,000 – $50,000',
      targetTimeline: 'Within 30 Days',
      projectBrief: '',
      preferredDate: '2026-09-24',
      preferredTime: '11:00 AM PST'
    });
  };

  return (
    <section 
      id="book" 
      className="py-24 relative bg-[#040806] border-t border-emerald-500/20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>DIRECTORIAL DISCOVERY CALL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            COMMISSION YOUR FILM. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
              LOCK IN YOUR PRODUCTION DATE.
            </span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
            Direct access to our executive production team. We review your vision, recommend camera packages and creative treatments, and provide guaranteed timelines.
          </p>
        </div>

        {/* Booking Container */}
        <div className="max-w-4xl mx-auto">
          
          {isSubmitted ? (
            /* Confirmation Terminal */
            <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-emerald-500/50 shadow-[0_0_60px_rgba(16,185,129,0.25)] text-center space-y-6 animate-in zoom-in-95 duration-500">
              
              {/* Mascot Stamp */}
              <div className="flex justify-center mb-2">
                <IntrepidMascot size="lg" animated={true} withGlow={true} />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                  PRODUCTION PROTOCOL INITIATED // AUTH CODE #IMG-2026-CONF
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  VIP Directorial Discovery Confirmed
                </h3>
                <p className="text-neutral-300 text-sm max-w-lg mx-auto">
                  Thank you, <span className="text-emerald-300 font-bold">{formData.fullName || 'Partner'}</span>. 
                  Our Executive Producer and Director have received your brief for <span className="text-white font-semibold">{formData.companyName || 'your brand'}</span>.
                </p>
              </div>

              {/* Booking Summary Ticket */}
              <div className="max-w-md mx-auto p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-left space-y-2.5">
                <div className="flex justify-between text-neutral-400">
                  <span>Scheduled Session:</span>
                  <span className="text-emerald-300 font-bold">{formData.preferredDate} @ {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Production Type:</span>
                  <span className="text-white">{formData.projectType}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Target Budget:</span>
                  <span className="text-white">{formData.budgetRange}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Supervising Unit:</span>
                  <span className="text-emerald-400">Intrepid Media Giant Guild (Director Unit 01)</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl glass-panel text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/[0.1]"
                >
                  Submit Another Project Brief
                </button>
                <a
                  href="tel:+18005554648"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Direct Studio Line</span>
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form 
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.08] space-y-6"
            >
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Company / Brand / Artist Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aether Dynamics"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Project Format */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Production Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08120d] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Commercial / Brand Film">Commercial & Brand Film (6K Cinema)</option>
                    <option value="Paid Growth Ad Engine">Paid Growth Ad Engine (High ROAS)</option>
                    <option value="Founder Documentary">Executive & Founder Documentary</option>
                    <option value="Podcast & Episodic Studio">4K Multi-Cam Podcast Studio</option>
                    <option value="Product 3D VFX">Luxury Product Cinema & 3D VFX</option>
                  </select>
                </div>

                {/* Budget Bracket */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Anticipated Production Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08120d] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="$10,000 – $20,000">$10,000 – $20,000 (Sprint / Ad Engine)</option>
                    <option value="$20,000 – $35,000">$20,000 – $35,000 (Standard Commercial / Doc)</option>
                    <option value="$35,000 – $60,000">$35,000 – $60,000 (Multi-day Cinema Master)</option>
                    <option value="$60,000+">$60,000+ (High-Scale Global Campaign)</option>
                  </select>
                </div>

                {/* Target Timeline */}
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Target Shoot / Launch Window
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08120d] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="ASAP (Next 14 Days)">ASAP (Next 14 Days - Expedited)</option>
                    <option value="Within 30 Days">Within 30 Days (Standard Prep)</option>
                    <option value="Q3 / Q4 2026">Q3 / Q4 2026 Commission</option>
                    <option value="Exploratory / Planning Ahead">Exploratory / Future Budgeting</option>
                  </select>
                </div>

              </div>

              {/* Time Slot Picker for Discovery Session */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Select Live Video Consultation Time:
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">
                    Duration: 30 Mins (Google Meet)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFormData({ ...formData, preferredTime: slot });
                      }}
                      className={`px-3 py-2 rounded-lg font-mono text-xs transition-all ${
                        formData.preferredTime === slot
                          ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                          : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief & Notes */}
              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Project Vision & Reference Links
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your story, commercial goal, or paste links to reference videos you love..."
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-booking-terminal-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    Transmitting Production Brief...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm VIP Discovery Session & Lock In Production Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-between text-neutral-400 text-[11px] font-mono pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Strict Mutual Non-Disclosure Guaranteed
                </span>
                <span>Response Time: Under 2 Hours</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
