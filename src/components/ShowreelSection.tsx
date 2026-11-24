import React, { useState } from 'react';
import { Play, Filter, Sparkles, Film, ArrowUpRight, Camera, Award, Check } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS, SHOWREEL_MAIN_VIDEO } from '../data/agencyData';
import { IntrepidMascot } from './IntrepidMascot';
import { sound } from '../utils/audio';

interface ShowreelSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenMainReel: () => void;
  onBookStyle: (project: Project) => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({
  onSelectProject,
  onOpenMainReel,
  onBookStyle
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Productions', value: 'all' },
    { label: 'Commercials', value: 'commercial' },
    { label: 'Brand Films', value: 'brand_film' },
    { label: 'Growth Ads (ROAS)', value: 'performance_ads' },
    { label: 'Founder Docs', value: 'founder_story' },
    { label: 'Podcast Studio', value: 'podcast_studio' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-24 relative bg-[#040806] border-t border-emerald-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest mb-3">
              <Film className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE ARCHIVE // 2025–2026</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              CINEMATIC ARTIFACTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
                PROVEN FOR REVENUE.
              </span>
            </h2>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Every production is engineered with dual objectives: unforgettable visual prestige and quantifiable commercial lift.
          </p>
        </div>

        {/* Featured Main Showreel Hero Card */}
        <div 
          id="showreel"
          className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.18)] mb-16 group"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img 
              src={SHOWREEL_MAIN_VIDEO.posterUrl} 
              alt={SHOWREEL_MAIN_VIDEO.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-[#040806]/40 to-transparent" />
            
            {/* Center Play Beacon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                id="main-showreel-play-btn"
                onClick={() => {
                  sound.playClick();
                  onOpenMainReel();
                }}
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black shadow-[0_0_50px_rgba(16,185,129,0.8)] group-hover:scale-110 transition-transform duration-300"
                aria-label="Play 2026 Showreel"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-1" />
                <span className="absolute -inset-2 rounded-full border border-emerald-400/50 animate-ping opacity-30" />
              </button>
            </div>

            {/* Top Right Specs */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/[0.1] font-mono text-[11px] text-emerald-300">
                {SHOWREEL_MAIN_VIDEO.resolution}
              </span>
              <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/[0.1] font-mono text-[11px] text-neutral-300">
                {SHOWREEL_MAIN_VIDEO.aspectRatio}
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  FLAGSHIP DIRECTORS CUT
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white">
                  {SHOWREEL_MAIN_VIDEO.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm mt-1">
                  {SHOWREEL_MAIN_VIDEO.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenMainReel();
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors self-start sm:self-auto"
              >
                <span>Launch Cinema Mode</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-${cat.value}`}
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat.value);
              }}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'glass-panel text-neutral-400 hover:text-white border-white/[0.08] hover:border-emerald-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div 
                className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-neutral-950"
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
              >
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040806] via-transparent to-transparent opacity-80" />

                {/* Badges on Thumbnail */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-950/90 backdrop-blur-md text-emerald-300 font-mono text-[10px] border border-emerald-500/40 font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    {project.metrics} {project.metricLabel}
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.8)] transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                </div>

                {/* Duration / Aspect / Resolution Bar */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>{project.duration}</span>
                  <span>{project.resolution}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    {project.client}
                  </div>
                  <h4 
                    onClick={() => {
                      sound.playClick();
                      onSelectProject(project);
                    }}
                    className="font-display text-lg font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 2).map((deliv, i) => (
                      <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 flex items-center gap-1">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                        {deliv}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(project);
                      }}
                      className="font-mono text-xs text-emerald-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Film</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        onBookStyle(project);
                      }}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/30 transition-all flex items-center gap-1"
                    >
                      <span>Book Style</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
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
