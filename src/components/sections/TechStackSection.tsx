import React from "react";
import { TECHNOLOGY_STACK, TechItem } from "../../data/technology";
import { Cpu, Terminal, Box, Radio, RefreshCw, Monitor, HardDrive, CheckCircle2 } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ros2: Cpu,
    python: Terminal,
    gazebo: Box,
    "fast-dds": Radio,
    "d-star-lite": RefreshCw,
    react: Monitor,
    "raspberry-pi": HardDrive,
  };

  return (
    <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[#168AAD]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>CONFIRMED ENGINEERING STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Technology Stack
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52606D] font-light leading-relaxed">
            The core frameworks and algorithms powering Team SHAZAM's autonomous warehouse fleet simulation and edge architecture direction.
          </p>
        </div>

        {/* 7 Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TECHNOLOGY_STACK.map((tech) => {
            const Icon = iconMap[tech.id] || Cpu;
            const isTargetHardware = tech.id === "raspberry-pi";

            return (
              <div
                key={tech.id}
                className={`shazam-card p-6 sm:p-7 flex flex-col justify-between group rounded-2xl border transition-all ${
                  isTargetHardware
                    ? "border-[#F2A93B]/60 bg-[#F2A93B]/5 hover:border-[#F2A93B]"
                    : "bg-white border-[#E8EDF0] hover:border-[#168AAD]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isTargetHardware
                          ? "bg-[#F2A93B]/15 text-[#B45309]"
                          : "bg-[#168AAD]/10 text-[#168AAD] group-hover:bg-[#168AAD] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        isTargetHardware
                          ? "bg-[#F2A93B]/15 text-[#92400E] border-[#F2A93B]/40"
                          : "bg-[#3FA66B]/10 text-[#3FA66B] border-[#3FA66B]/30"
                      }`}
                    >
                      {tech.stage}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase mb-1">
                    {tech.badge}
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#17242B] mb-2 group-hover:text-[#168AAD] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-sm font-medium text-[#168AAD] mb-3">
                    {tech.description}
                  </p>

                  <p className="text-xs text-[#52606D] leading-relaxed mb-6">
                    {tech.role}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#E8EDF0] space-y-1.5">
                    {tech.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-mono text-[#52606D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3FA66B] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance Note */}
        <div className="text-center text-xs font-mono text-[#52606D] bg-white p-4 rounded-xl border border-[#E8EDF0] shadow-xs max-w-3xl mx-auto">
          Notice: Only confirmed project tools are listed above. Target edge hardware (Raspberry Pi) represents the physical roadmap direction.
        </div>
      </div>
    </section>
  );
};
