import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { Play, ExternalLink, Video, Compass, Radio, Clapperboard } from "lucide-react";

/**
 * Configurable YouTube Video URL
 * Currently set to empty string as specified; will be updated when the video is published.
 */
export const YOUTUBE_VIDEO_URL: string = PROJECT_DATA.youtubeVideoUrl || "";

export const ProjectVideoSection: React.FC = () => {
  const hasVideoUrl = Boolean(YOUTUBE_VIDEO_URL && YOUTUBE_VIDEO_URL.trim() !== "");

  return (
    <section id="video" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B2733] text-white relative overflow-hidden border-t border-[#2EC4C9]/20">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#168AAD]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17242B]/80 border border-[#2EC4C9]/40 text-[#2EC4C9] text-xs font-mono uppercase tracking-wider mb-4">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>PROJECT DEMONSTRATION RECORDING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Cinematic Simulation Showcase
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Watch the 5 Autonomous Mobile Robots dynamically negotiate intersections, communicate over Fast DDS, and adapt to blocked warehouse aisles.
          </p>
        </div>

        {/* Video Frame Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2EC4C9]/30 bg-[#17242B] shadow-[0_20px_70px_rgba(11,39,51,0.7)] group">
          <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
            {hasVideoUrl ? (
              <iframe
                src="https://www.youtube.com/embed/lpk_R3frb90?rel=0"
                title="SIH26123 Explanation Video - Team SHAZAM"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              /* Fallback Teaser Graphic */
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-lg">
                <div className="w-20 h-20 rounded-full bg-[#0B2733] border border-[#2EC4C9]/40 text-[#2EC4C9] flex items-center justify-center shadow-[0_0_30px_rgba(46,196,201,0.25)] mb-6">
                  <Video className="w-8 h-8 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-[#0B2733]/90 border border-[#2EC4C9]/30 text-[#2EC4C9] uppercase tracking-widest font-semibold">
                    VIDEO PRESENTATION IN EDITING
                  </span>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Autonomous Fleet Gazebo Simulation Teaser
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    The official project video demonstrating the 5 AMRs coordinating in Gazebo with Fast DDS will be published shortly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Caption & Actions Line */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3FA66B] animate-pulse" />
            <span className="font-semibold text-white">TEAM SHAZAM • SIH26123 EXPLANATION VIDEO</span>
            <span className="text-[#2EC4C9] hidden sm:inline">• 1080P 60FPS</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#168AAD] hover:bg-[#2496D2] text-white font-mono text-xs font-semibold transition-all shadow-md"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
