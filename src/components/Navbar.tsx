import React, { useState, useEffect } from 'react';
import { Video, Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { IntrepidMascot } from './IntrepidMascot';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenReel: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenReel,
  soundEnabled,
  onToggleSound
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Showreel', href: '#showreel', onClick: onOpenReel },
    { label: 'Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'The Protocol', href: '#methodology' },
  ];

  return (
    <header 
      id="main-navigation" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-[#030705]/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with the Official Intrepid Mascot */}
        <a 
          href="#" 
          id="nav-brand-logo"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          {/* Mascot Icon Wrapper with Neon Green Frame */}
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 overflow-hidden">
            <IntrepidMascot size="sm" animated={true} withGlow={false} className="transform group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              INTREPID <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200 font-black">MEDIA GIANT</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-emerald-400/80 uppercase">
              Green Tech Cinema & Growth
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full glass-panel border border-emerald-500/20 bg-emerald-950/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                sound.playHover();
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Sound Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound toggle */}
          <button
            id="nav-sound-toggle"
            type="button"
            onClick={() => {
              onToggleSound();
              sound.playClick();
            }}
            title={soundEnabled ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
            className="w-9 h-9 flex items-center justify-center rounded-xl glass-panel text-neutral-400 hover:text-emerald-400 border border-emerald-500/20 hover:border-emerald-400/50 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
          </button>

          {/* Quick reel trigger */}
          <button
            id="nav-quick-reel-btn"
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenReel();
            }}
            className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-mono text-neutral-300 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/50 transition-colors"
          >
            <Video className="w-3.5 h-3.5 text-emerald-400" />
            <span>2026 REEL</span>
          </button>

          {/* Glowing Book CTA */}
          <button
            id="nav-book-cta"
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenBooking();
            }}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black font-semibold text-xs uppercase tracking-wider font-mono shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 flex items-center gap-1.5"
          >
            <span className="relative z-10 flex items-center gap-1">
              Book Production
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-sound-toggle"
            type="button"
            onClick={() => {
              onToggleSound();
              sound.playClick();
            }}
            className="p-2 rounded-lg glass-panel text-neutral-400 hover:text-emerald-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg glass-panel text-neutral-200 hover:text-emerald-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 mt-3 glass-panel border-b border-emerald-500/30 bg-[#030705]/95 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 mb-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-between">
              <span className="font-mono text-[10px] text-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ACCEPTING COMMISSIONS
              </span>
              <span className="font-mono text-[10px] text-emerald-400">6K RAW</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider text-neutral-300 hover:text-emerald-300 hover:bg-emerald-950/30"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-emerald-500/20 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  onOpenReel();
                }}
                className="w-full py-2.5 rounded-xl glass-panel text-xs font-mono uppercase tracking-wider text-emerald-300 border border-emerald-500/30 flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-emerald-400" />
                Play 2026 Showreel
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black font-bold font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
              >
                Book Discovery Session
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
