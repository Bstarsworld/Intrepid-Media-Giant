import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2, Video, Sliders, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onBookThisStyle: (project: Project) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  project,
  onBookThisStyle
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [resolution, setResolution] = useState('6K RAW');
  const [showFramingGuides, setShowFramingGuides] = useState(false);

  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const youtubeId = project ? getYouTubeId(project.videoUrl) : null;

  useEffect(() => {
    if (isOpen && videoRef.current && !youtubeId) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may require mute
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
      setIsPlaying(true);
    }
  }, [isOpen, project, youtubeId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && isOpen && !youtubeId) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying, youtubeId]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    sound.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    sound.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTimecode = (seconds: number) => {
    if (isNaN(seconds)) return "00:00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
  };

  return (
    <div 
      id="cinema-video-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl max-h-[95vh] flex flex-col glass-panel rounded-2xl overflow-hidden border border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.25)]">
        
        {/* HUD Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#050b07]/95 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CINEMA MASTER
            </span>
            <span className="font-display text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
            <span className="hidden md:inline font-mono text-xs text-neutral-400">
              // {project.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Aspect guide toggle */}
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setShowFramingGuides(!showFramingGuides);
              }}
              title="Toggle 2.39:1 Anamorphic Framing Guides"
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                showFramingGuides 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400' 
                  : 'text-neutral-400 border-white/[0.08] hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>2.39:1 MASK</span>
            </button>

            {/* Resolution Selector */}
            <select
              value={resolution}
              onChange={(e) => {
                sound.playClick();
                setResolution(e.target.value);
              }}
              className="bg-[#09140d] border border-white/[0.1] text-emerald-300 font-mono text-xs rounded-md px-2 py-1 focus:outline-none focus:border-emerald-500"
            >
              <option value="6K RAW">6K DCI RAW</option>
              <option value="4K HDR">4K HDR ProRES</option>
              <option value="1080P">1080P HQ</option>
            </select>

            {/* Close Button */}
            <button
              id="close-video-modal-btn"
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close cinema modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas Area */}
        <div className="relative bg-black flex-1 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px] md:min-h-[480px]">
          
          {youtubeId ? (
            <div className="w-full h-full min-h-[320px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={project.title}
                className="w-full h-full min-h-[320px] sm:min-h-[450px] md:min-h-[500px] border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnailUrl}
                className="w-full h-full max-h-[62vh] object-contain cursor-pointer"
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                playsInline
                loop
              />

              {/* Play/Pause Overlay Indicator on hover */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/90 text-black shadow-[0_0_40px_rgba(16,185,129,0.8)] hover:scale-105 transition-transform"
                >
                  <Play className="w-8 h-8 fill-black translate-x-0.5" />
                </button>
              )}
            </>
          )}

          {/* Anamorphic Framing Guides Overlay */}
          {showFramingGuides && (
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
              <div className="h-10 sm:h-16 bg-black/85 border-b border-emerald-500/40 flex items-center justify-between px-4 text-[10px] font-mono text-emerald-400">
                <span>TOP MASK 2.39:1 DCI</span>
                <span>SAFE ACTION 90%</span>
              </div>
              <div className="h-10 sm:h-16 bg-black/85 border-t border-emerald-500/40 flex items-center justify-between px-4 text-[10px] font-mono text-emerald-400">
                <span>INTREPID CINEMA HUD</span>
                <span>BOTTOM MASK</span>
              </div>
            </div>
          )}

          {/* Watermark/Metadata Pill (when not obscuring player) */}
          {!youtubeId && (
            <div className="absolute top-4 left-4 pointer-events-none px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/[0.08] text-neutral-300 font-mono text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{project.aspectRatio}</span>
              <span className="text-neutral-600">|</span>
              <span className="text-emerald-300">{resolution}</span>
              <span className="text-neutral-600">|</span>
              <span>24.00 FPS</span>
            </div>
          )}

          {/* Timecode Overlay */}
          {!youtubeId && (
            <div className="absolute bottom-4 right-4 pointer-events-none px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/[0.08] font-mono text-xs text-white">
              <span className="text-neutral-400">TC: </span>
              <span className="text-emerald-400 font-bold">{formatTimecode(currentTime)}</span>
              <span className="text-neutral-500"> / {formatTimecode(duration || 90)}</span>
            </div>
          )}
        </div>

        {/* Video Player Scrubber & Controls */}
        {youtubeId ? (
          <div className="px-4 sm:px-6 py-2.5 bg-[#050b07] border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECTOR'S SIZZLE REEL • 6K MASTER STREAM</span>
            </div>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/[0.06] hover:bg-emerald-500/20 text-neutral-300 hover:text-emerald-300 border border-white/[0.1] hover:border-emerald-500/40 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="px-4 sm:px-6 py-3 bg-[#050b07] border-t border-white/[0.08]">
            <div className="flex items-center gap-3 mb-2.5">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-emerald-500 hover:text-black text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              {/* Scrub bar */}
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
              />

              <span className="font-mono text-xs text-neutral-400 min-w-[70px] text-right">
                {Math.floor(currentTime)}s / {Math.floor(duration || 90)}s
              </span>
            </div>
          </div>
        )}

        {/* Project Intelligence & Booking Drawer */}
        <div className="px-4 sm:px-6 py-4 bg-[#08120d] border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                {project.tag}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300">
                Gear: {project.gear}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-semibold">
                Impact: {project.metrics} {project.metricLabel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2">
              {project.description}
            </p>
          </div>

          <button
            id="book-this-style-btn"
            type="button"
            onClick={() => {
              sound.playClick();
              onBookThisStyle(project);
            }}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 text-black font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] flex items-center justify-center gap-2 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission This Style</span>
          </button>
        </div>

      </div>
    </div>
  );
};
