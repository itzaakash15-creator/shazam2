import React from "react";
import { Compass, HardDrive, Cpu, Users, GitMerge, Building2, Radio } from "lucide-react";

export const FutureScopeSection: React.FC = () => {
  const futureItems = [
    {
      title: "Physical AMR Deployment",
      icon: Compass,
      desc: "Transitioning validated simulation behaviors onto physical differential-drive robotics hardware.",
      phase: "PHASE II",
    },
    {
      title: "Raspberry Pi Edge Deployment",
      icon: HardDrive,
      desc: "Deploying the ROS 2 node pipeline and Fast DDS mesh directly onto onboard Raspberry Pi 4/5 SBCs.",
      phase: "PHASE II",
    },
    {
      title: "Larger Robot Fleets",
      icon: Users,
      desc: "Benchmarking distributed peer mesh coordination scalability beyond 5 AMRs to 20+ concurrent units.",
      phase: "PHASE III",
    },
    {
      title: "Advanced Fleet Optimization",
      icon: GitMerge,
      desc: "Incorporating dynamic energy-aware routing, charging queue negotiation, and predictive maintenance states.",
      phase: "PHASE III",
    },
    {
      title: "Real Warehouse Integration",
      icon: Building2,
      desc: "Interfacing the edge fleet directly with standard Warehouse Management Systems (WMS) via industrial APIs.",
      phase: "PHASE IV",
    },
    {
      title: "Hardware Sensor Integration",
      icon: Radio,
      desc: "Integrating physical 2D LIDAR, ultrasonic safety skirts, and wheel optical encoders for closed-loop navigation.",
      phase: "PHASE IV",
    },
  ];

  return (
    <section id="future-scope" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] border-t border-[#E8EDF0] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#168AAD]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2A93B]/10 border border-[#F2A93B]/30 text-[#B45309] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F2A93B]" />
            <span>ROADMAP & TARGET MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Future Scope
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52606D] font-light leading-relaxed">
            Key developmental directions planned to transition our validated simulation architecture into physical warehouse deployment.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#B45309] bg-[#F2A93B]/10 px-3.5 py-1 rounded-full border border-[#F2A93B]/30">
            <strong>DECLARATION:</strong> These milestones are research roadmaps and are not claimed as currently implemented.
          </div>
        </div>

        {/* 6 Future Scope Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {futureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="shazam-card p-6 bg-white border border-[#E8EDF0] rounded-2xl flex flex-col justify-between group hover:border-[#F2A93B]/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F3F6F8] border border-[#E8EDF0] text-[#168AAD] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#168AAD]/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8EDF0] text-[#52606D] border border-[#E8EDF0]">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#17242B] mb-2 group-hover:text-[#168AAD] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#52606D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8EDF0] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>TARGET HORIZON</span>
                  <span className="text-[#B45309] font-semibold">PLANNED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
