import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { ArrowUpRight, FileText, PlayCircle, HardDrive, ArrowUp } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export const Footer: React.FC = () => {
  const activeResources = PROJECT_DATA.resources.filter(
    (res) => res.isAvailable && res.url && res.url !== "#"
  );

  return (
    <footer id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1D] text-white border-t border-cyan-500/25 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Official Logo Display */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo-light.png"
            alt="Team SHAZAM Logo"
            className="h-11 sm:h-13 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
          Engineering Autonomous <br />
          <span className="text-[#06B6D4]">Warehouse Coordination.</span>
        </h2>

        {/* Project Attribution Text */}
        <div className="space-y-1.5 mb-8 font-mono text-xs sm:text-sm text-slate-300">
          <p className="font-bold text-white tracking-wider">{PROJECT_DATA.teamName}</p>
          <p className="text-cyan-200/90 max-w-2xl mx-auto font-medium">
            {PROJECT_DATA.projectTitle}
          </p>
          <p className="text-[#06B6D4] font-semibold">{PROJECT_DATA.eventName}</p>
        </div>

        {/* Resource Action Buttons */}
        {activeResources.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {activeResources.map((res) => (
              <a
                key={res.label}
                href={res.url}
                target={res.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-mono text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-white border border-cyan-500/35 hover:border-cyan-400 shadow-sm hover:shadow-[0_0_18px_rgba(6,182,212,0.3)] transition-all"
              >
                {res.type === "github" && <GithubIcon className="w-4 h-4 text-cyan-400" />}
                {res.type === "docs" && <FileText className="w-4 h-4 text-cyan-400" />}
                {res.type === "simulation" && <HardDrive className="w-4 h-4 text-cyan-400" />}
                <span>{res.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
              </a>
            ))}
          </div>
        )}

        {/* Minimal Footer Attribution Line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <img src="/logo-light.png" alt="SHAZAM Logo" className="h-5 w-auto object-contain" />
            <span>© {PROJECT_DATA.eventYear} {PROJECT_DATA.teamName}</span>
            <span className="text-cyan-500">•</span>
            <span>SIH26123</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#hero" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
            <a href={`mailto:${PROJECT_DATA.contact.email}`} className="hover:text-cyan-300 transition-colors">
              {PROJECT_DATA.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
