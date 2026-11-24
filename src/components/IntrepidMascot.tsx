import React from 'react';

interface IntrepidMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animated?: boolean;
  withGlow?: boolean;
  showHoloRing?: boolean;
}

export const IntrepidMascot: React.FC<IntrepidMascotProps> = ({
  className = '',
  size = 'md',
  animated = true,
  withGlow = true,
  showHoloRing = false
}) => {
  // Dimension map
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48 sm:w-64 sm:h-64',
    full: 'w-full h-auto max-w-sm sm:max-w-md'
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      
      {/* Optional Holographic Tech Glow / Rings */}
      {showHoloRing && (
        <div className="absolute inset-0 -m-4 sm:-m-8 rounded-full border border-emerald-500/20 animate-[spin_25s_linear_infinite] pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
      )}

      {withGlow && (
        <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full -z-10" />
      )}

      {/* SVG Vector of the Official Intrepid Media Giant Mascot */}
      <svg
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
      >
        <defs>
          <linearGradient id="metal-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a5568" />
            <stop offset="50%" stopColor="#2d3748" />
            <stop offset="100%" stopColor="#1a202c" />
          </linearGradient>

          <linearGradient id="bronze-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e28743" />
            <stop offset="60%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="green-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <linearGradient id="cassette-orange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          <linearGradient id="cassette-pink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>

          <linearGradient id="cassette-teal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>

          <filter id="emerald-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- ROBOT HEAD --- */}
        {/* Antenna */}
        <path d="M150 25 L150 10" stroke="#718096" strokeWidth="4" strokeLinecap="round" />
        <circle cx="150" cy="8" r="4" fill="#10b981" filter="url(#emerald-glow)" />

        {/* Head Shell */}
        <rect x="120" y="24" width="60" height="42" rx="6" fill="url(#metal-grad)" stroke="#1a202c" strokeWidth="2.5" />
        <rect x="124" y="28" width="52" height="34" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />

        {/* Ear dial dials */}
        <circle cx="116" cy="45" r="5" fill="#e28743" stroke="#1a202c" strokeWidth="1.5" />
        <circle cx="184" cy="45" r="5" fill="#e28743" stroke="#1a202c" strokeWidth="1.5" />

        {/* Eyes: Dual Cinema Lenses / Tape Reels */}
        <circle cx="137" cy="44" r="10" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
        <circle cx="163" cy="44" r="10" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
        
        {/* Glowing Emerald Iris */}
        <circle cx="137" cy="44" r="5" fill="#10b981" filter="url(#emerald-glow)" />
        <circle cx="163" cy="44" r="5" fill="#10b981" filter="url(#emerald-glow)" />
        <circle cx="135" cy="42" r="1.5" fill="#ffffff" />
        <circle cx="161" cy="42" r="1.5" fill="#ffffff" />

        {/* Mouth Audio Level / Grill */}
        <rect x="133" y="56" width="34" height="4" rx="2" fill="#022c22" stroke="#10b981" strokeWidth="0.8" />
        <line x1="139" y1="56" x2="139" y2="60" stroke="#10b981" strokeWidth="0.8" />
        <line x1="145" y1="56" x2="145" y2="60" stroke="#10b981" strokeWidth="0.8" />
        <line x1="151" y1="56" x2="151" y2="60" stroke="#10b981" strokeWidth="0.8" />
        <line x1="157" y1="56" x2="157" y2="60" stroke="#10b981" strokeWidth="0.8" />
        <line x1="163" y1="56" x2="163" y2="60" stroke="#10b981" strokeWidth="0.8" />

        {/* Neck Hydraulic Ring */}
        <rect x="138" y="66" width="24" height="10" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="144" y1="66" x2="144" y2="76" stroke="#10b981" strokeWidth="1" />
        <line x1="156" y1="66" x2="156" y2="76" stroke="#10b981" strokeWidth="1" />

        {/* --- MOUNTED GEAR ON SHOULDERS --- */}
        {/* Right Shoulder: Shotgun Microphone */}
        <g transform="rotate(-25 105 50)">
          <rect x="90" y="32" width="38" height="12" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="94" y1="38" x2="124" y2="38" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="127" cy="38" r="3" fill="#10b981" />
        </g>

        {/* Left Shoulder: Vocal Studio Mic on Gooseneck */}
        <g transform="rotate(20 195 50)">
          <path d="M190 62 Q198 46 208 38" stroke="#64748b" strokeWidth="3" fill="none" />
          <ellipse cx="212" cy="34" rx="7" ry="10" fill="#e28743" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="208" y1="34" x2="216" y2="34" stroke="#0f172a" strokeWidth="1" />
        </g>

        {/* --- TORSO (CASSETTE TAPES & CAMCORDERS & BOOMBOX SPEAKERS) --- */}
        {/* Main Torso Frame */}
        <rect x="95" y="76" width="110" height="120" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />

        {/* Top-Right Camcorder Unit with Lens */}
        <rect x="76" y="80" width="36" height="28" rx="4" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        {/* Camera Lens Cylinder */}
        <rect x="70" y="84" width="8" height="20" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <ellipse cx="70" cy="94" rx="3" ry="8" fill="#10b981" opacity="0.8" />

        {/* Top Center: Pink Cassette Deck */}
        <rect x="114" y="80" width="42" height="28" rx="3" fill="url(#cassette-pink)" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="122" y="86" width="26" height="14" rx="2" fill="#fdf2f8" opacity="0.9" />
        <circle cx="128" cy="93" r="3" fill="#831843" />
        <circle cx="142" cy="93" r="3" fill="#831843" />

        {/* Top Left: Teal Cassette */}
        <rect x="158" y="80" width="42" height="28" rx="3" fill="url(#cassette-teal)" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="166" y="86" width="26" height="14" rx="2" fill="#ccfbf1" opacity="0.9" />
        <circle cx="172" cy="93" r="3" fill="#115e59" />
        <circle cx="186" cy="93" r="3" fill="#115e59" />

        {/* Mid Torso: Prominent Orange Cassette Tape */}
        <rect x="106" y="112" width="88" height="34" rx="4" fill="url(#cassette-orange)" stroke="#0f172a" strokeWidth="2" />
        <rect x="116" y="118" width="68" height="20" rx="3" fill="#ffedd5" />
        {/* Cassette Reels with Spindles */}
        <circle cx="132" cy="128" r="6" fill="#9a3412" />
        <circle cx="132" cy="128" r="2.5" fill="#ffffff" />
        <circle cx="168" cy="128" r="6" fill="#9a3412" />
        <circle cx="168" cy="128" r="2.5" fill="#ffffff" />
        <line x1="138" y1="128" x2="162" y2="128" stroke="#9a3412" strokeWidth="1.5" />
        {/* Cassette Label Text Line */}
        <line x1="120" y1="122" x2="180" y2="122" stroke="#ea580c" strokeWidth="1" />

        {/* Lower Torso: Dual Stereo Boombox Speakers */}
        <rect x="98" y="150" width="104" height="42" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        
        {/* Left Speaker Woofer */}
        <circle cx="122" cy="170" r="16" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <circle cx="122" cy="170" r="11" fill="#022c22" stroke="#10b981" strokeWidth="1" />
        <circle cx="122" cy="170" r="5" fill="#10b981" filter="url(#emerald-glow)" opacity={animated ? "0.9" : "0.7"} />

        {/* Right Speaker Woofer */}
        <circle cx="178" cy="170" r="16" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <circle cx="178" cy="170" r="11" fill="#022c22" stroke="#10b981" strokeWidth="1" />
        <circle cx="178" cy="170" r="5" fill="#10b981" filter="url(#emerald-glow)" opacity={animated ? "0.9" : "0.7"} />

        {/* Center Control Knobs & Eject Deck */}
        <rect x="144" y="156" width="12" height="6" rx="1" fill="#334155" stroke="#10b981" strokeWidth="0.8" />
        <circle cx="150" cy="174" r="3" fill="#e28743" />
        <circle cx="150" cy="183" r="2.5" fill="#e28743" />

        {/* --- ROBOT ARMS --- */}
        {/* Right Arm: Mechanical Shoulder Joint */}
        <circle cx="85" cy="115" r="9" fill="#e28743" stroke="#0f172a" strokeWidth="2" />
        {/* Upper Arm Piston */}
        <line x1="85" y1="124" x2="72" y2="160" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        <line x1="85" y1="124" x2="72" y2="160" stroke="#0f172a" strokeWidth="1.5" />
        {/* Elbow Joint */}
        <circle cx="72" cy="164" r="7" fill="#334155" stroke="#0f172a" strokeWidth="2" />
        {/* Forearm (Red/Orange Armor Gauntlet) */}
        <rect x="62" y="170" width="14" height="34" rx="3" fill="#c2410c" stroke="#0f172a" strokeWidth="1.5" />
        {/* Right Claw Hand */}
        <path d="M64 204 L60 218 M70 204 L70 222 M76 204 L80 218" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

        {/* Left Arm: Mechanical Shoulder Joint */}
        <circle cx="215" cy="115" r="9" fill="#e28743" stroke="#0f172a" strokeWidth="2" />
        {/* Upper Arm Piston */}
        <line x1="215" y1="124" x2="228" y2="160" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        <line x1="215" y1="124" x2="228" y2="160" stroke="#0f172a" strokeWidth="1.5" />
        {/* Elbow Joint */}
        <circle cx="228" cy="164" r="7" fill="#334155" stroke="#0f172a" strokeWidth="2" />
        {/* Forearm (Red/Orange Armor Gauntlet) */}
        <rect x="224" y="170" width="14" height="34" rx="3" fill="#c2410c" stroke="#0f172a" strokeWidth="1.5" />
        {/* Left Claw Hand */}
        <path d="M226 204 L222 218 M232 204 L232 222 M238 204 L242 218" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

        {/* --- WAIST / PELVIS --- */}
        {/* Spine Pistons */}
        <rect x="136" y="198" width="28" height="22" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <line x1="143" y1="200" x2="143" y2="218" stroke="#e28743" strokeWidth="3" />
        <line x1="157" y1="200" x2="157" y2="218" stroke="#e28743" strokeWidth="3" />

        {/* Pelvic Hub */}
        <rect x="122" y="220" width="56" height="14" rx="4" fill="url(#metal-grad)" stroke="#0f172a" strokeWidth="2" />
        <circle cx="132" cy="227" r="4" fill="#10b981" />
        <circle cx="168" cy="227" r="4" fill="#10b981" />

        {/* --- LEGS & FEET --- */}
        {/* Right Leg (Viewer's Left) */}
        {/* Hip Joint */}
        <circle cx="132" cy="236" r="6" fill="#e28743" stroke="#0f172a" strokeWidth="1.5" />
        {/* Thigh (Bronze / Copper Hydraulics) */}
        <rect x="126" y="240" width="12" height="42" rx="2" fill="url(#bronze-grad)" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="132" y1="242" x2="132" y2="280" stroke="#fed7aa" strokeWidth="2" />
        {/* Knee Armor */}
        <circle cx="132" cy="286" r="7" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="132" cy="286" r="3" fill="#10b981" />
        {/* Shin Piston */}
        <rect x="128" y="292" width="9" height="48" rx="2" fill="#64748b" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="126" y1="300" x2="126" y2="330" stroke="#e28743" strokeWidth="2" />

        {/* Left Leg (Viewer's Right) */}
        {/* Hip Joint */}
        <circle cx="168" cy="236" r="6" fill="#e28743" stroke="#0f172a" strokeWidth="1.5" />
        {/* Thigh (Bronze / Copper Hydraulics) */}
        <rect x="162" y="240" width="12" height="42" rx="2" fill="url(#bronze-grad)" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="168" y1="242" x2="168" y2="280" stroke="#fed7aa" strokeWidth="2" />
        {/* Knee Armor */}
        <circle cx="168" cy="286" r="7" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="168" cy="286" r="3" fill="#10b981" />
        {/* Shin Piston */}
        <rect x="163" y="292" width="9" height="48" rx="2" fill="#64748b" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="174" y1="300" x2="174" y2="330" stroke="#e28743" strokeWidth="2" />

        {/* Right Boot (Teal/Slate Heavy Duty Speaker Foot) */}
        <g>
          <path d="M116 340 L144 340 L144 366 L112 366 Z" fill="#0f766e" stroke="#0f172a" strokeWidth="2" />
          {/* Sole Cushion / Speaker Grille */}
          <rect x="110" y="366" width="36" height="8" rx="2" fill="#022c22" stroke="#10b981" strokeWidth="1" />
          <line x1="114" y1="370" x2="142" y2="370" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Left Boot (Teal/Slate Heavy Duty Speaker Foot) */}
        <g>
          <path d="M156 340 L184 340 L188 366 L156 366 Z" fill="#0f766e" stroke="#0f172a" strokeWidth="2" />
          {/* Sole Cushion / Speaker Grille */}
          <rect x="154" y="366" width="36" height="8" rx="2" fill="#022c22" stroke="#10b981" strokeWidth="1" />
          <line x1="158" y1="370" x2="186" y2="370" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Futuristic Laser Scanner Line Overlay (Animated if requested) */}
        {animated && (
          <line 
            x1="80" 
            y1="180" 
            x2="220" 
            y2="180" 
            stroke="#10b981" 
            strokeWidth="1.5" 
            opacity="0.6"
            className="animate-pulse"
          />
        )}
      </svg>

    </div>
  );
};
