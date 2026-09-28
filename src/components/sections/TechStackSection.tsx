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
    <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-sky-200/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>CONFIRMED ENGINEERING STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Technology Stack
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
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
                className={`shazam-card p-6 sm:p-7 flex flex-col justify-between group ${
                  isTargetHardware ? "border-amber-300/80 bg-amber-50/20" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isTargetHardware
                          ? "bg-amber-100 text-amber-800"
                          : "bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        isTargetHardware
                          ? "bg-amber-100 text-amber-900 border-amber-300"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      {tech.stage}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase mb-1">
                    {tech.badge}
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-2 group-hover:text-[#0284C7] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-sm font-medium text-[#0284C7] mb-3">
                    {tech.description}
                  </p>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {tech.role}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    {tech.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
        <div className="text-center text-xs font-mono text-slate-500 bg-white p-4 rounded-xl border border-slate-200 shadow-xs max-w-3xl mx-auto">
          Notice: Only confirmed project tools are listed above. Target edge hardware (Raspberry Pi) represents the physical roadmap direction.
        </div>
      </div>
    </section>
  );
};
