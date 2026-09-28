import React from "react";
import { FileText, Target, AlertCircle, Cpu, CheckCircle2 } from "lucide-react";

export const CaseStudySection: React.FC = () => {
  const steps = [
    {
      label: "THE CHALLENGE",
      icon: Target,
      color: "text-[#168AAD]",
      bg: "bg-[#168AAD]/10",
      border: "border-[#168AAD]/30",
      content:
        "Growing warehouse robot fleets require coordination without creating unnecessary dependency on a central decision point.",
      subtext: "Expanding AMR fleets demand scalable coordination methodologies.",
    },
    {
      label: "THE GAP",
      icon: AlertCircle,
      color: "text-[#F2A93B]",
      bg: "bg-[#F2A93B]/10",
      border: "border-[#F2A93B]/30",
      content:
        "Centralized coordination can introduce communication and infrastructure dependencies as fleet complexity grows.",
      subtext: "Single-point-of-failure vulnerabilities and latency bottlenecks.",
    },
    {
      label: "OUR APPROACH",
      icon: Cpu,
      color: "text-[#168AAD]",
      bg: "bg-[#168AAD]/10",
      border: "border-[#168AAD]/30",
      content:
        "Use distributed edge-based coordination combined with dynamic path planning to allow multiple AMRs to adapt to changing warehouse conditions.",
      subtext: "Decentralized ROS 2 + Fast DDS peer mesh with D* Lite dynamic replanning.",
    },
    {
      label: "THE RESULT",
      icon: CheckCircle2,
      color: "text-[#3FA66B]",
      bg: "bg-[#3FA66B]/10",
      border: "border-[#3FA66B]/30",
      content:
        "A simulation demonstrating coordinated movement of five autonomous mobile robots in a smart warehouse environment.",
      subtext: "Validated in high-fidelity Gazebo simulation with active collision avoidance.",
    },
  ];

  return (
    <section id="case-study" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-[#168AAD]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>PROJECT CASE STUDY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Case Study: Scalable AMR Fleet Coordination
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52606D] font-light leading-relaxed">
            A structured breakdown of the smart warehouse coordination challenge, the architectural gap, our distributed edge approach, and the simulation results.
          </p>
        </div>

        {/* 4-Step Linear Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="shazam-card p-6 sm:p-8 flex flex-col justify-between group bg-white border border-[#E8EDF0] rounded-2xl hover:border-[#168AAD]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#E8EDF0] text-[#17242B] border border-[#E8EDF0] uppercase tracking-wider">
                      {step.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP // 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.bg} ${step.border} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>

                    <div>
                      <p className="text-base sm:text-lg font-heading font-semibold text-[#17242B] leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8EDF0] text-xs font-mono text-[#52606D]">
                  {step.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
