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
            {/* Background Floor-Plan Texture */}
            <div className="absolute inset-0 warehouse-grid-dark opacity-30 pointer-events-none" />

            {/* Video Placeholder / Teaser Graphic */}
            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-lg">
              {/* Play Button or External Link Trigger */}
              {hasVideoUrl ? (
                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-[#168AAD] hover:bg-[#2496D2] text-white flex items-center justify-center shadow-[0_0_35px_rgba(22,138,173,0.6)] hover:scale-110 transition-all cursor-pointer mb-6 group/btn"
                  aria-label="Play Project Demonstration Video on YouTube"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </a>
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#0B2733] border border-[#2EC4C9]/40 text-[#2EC4C9] flex items-center justify-center shadow-[0_0_30px_rgba(46,196,201,0.25)] mb-6">
                  <Video className="w-8 h-8 animate-pulse" />
                </div>
              )}

              <div className="space-y-2">
                <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-[#0B2733]/90 border border-[#2EC4C9]/30 text-[#2EC4C9] uppercase tracking-widest font-semibold">
                  {hasVideoUrl ? "OFFICIAL DEMO VIDEO AVAILABLE" : "VIDEO PRESENTATION IN EDITING"}
                </span>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {hasVideoUrl
                    ? "Watch Full Simulation Walkthrough"
                    : "Autonomous Fleet Gazebo Simulation Teaser"}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {hasVideoUrl
                    ? "Click the play button to open the full project walkthrough on YouTube in a new tab."
                    : "The official project video demonstrating the 5 AMRs coordinating in Gazebo with Fast DDS will be published shortly."}
                </p>
              </div>

              {hasVideoUrl && (
                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white text-[#17242B] hover:bg-[#E8EDF0] transition-all shadow-md"
                >
                  <span>Open Video in YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Top Telemetry Watermark */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2733]/80 border border-[#2EC4C9]/30 text-[10px] font-mono text-[#2EC4C9] backdrop-blur-md">
              <Radio className="w-3 h-3 text-[#2EC4C9] animate-pulse" />
              <span>GAZEBO 3D SIMULATION CAPTURE • 1080P 60FPS</span>
            </div>
          </div>
        </div>

        {/* Video Caption Line */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 px-2">
          <span>TEAM SHAZAM • SIH26123 VIDEO SHOWCASE</span>
          <span className="text-[#2EC4C9]">
            {hasVideoUrl ? `SOURCE: ${YOUTUBE_VIDEO_URL}` : "STATUS: PENDING OFFICIAL UPLOAD"}
          </span>
        </div>
      </div>
    </section>
  );
};
