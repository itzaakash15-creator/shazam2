import React from "react";
import { Cpu, Network, RefreshCw, Eye, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      id: "distributed-coord",
      title: "Distributed Coordination",
      badge: "DECENTRALIZED",
      icon: Network,
      desc: "AMRs establish peer-to-peer communication graphs over Fast DDS, eliminating reliance on a centralized single point of failure.",
    },
    {
      id: "edge-intelligence",
      title: "Edge Intelligence",
      badge: "ON-DEVICE LOGIC",
      icon: Cpu,
      desc: "Each robot processes its own sensory telemetry and right-of-way arbitration directly on its local processing node.",
    },
    {
      id: "dynamic-replanning",
      title: "Dynamic Replanning",
      badge: "D* LITE ENGINE",
      icon: RefreshCw,
      desc: "When dynamic obstacles or temporary aisle blockages occur, paths recalculate incrementally without full-graph recalculation overhead.",
    },
    {
      id: "multi-robot-awareness",
      title: "Multi-Robot Awareness",
      badge: "STATE SHARING",
      icon: Eye,
      desc: "Robots broadcast compact intent messages containing position, target waypoint, and task urgency to nearby fleet peers.",
    },
    {
      id: "conflict-handling",
      title: "Conflict Handling",
      badge: "COLLISION FREE",
      icon: ShieldCheck,
      desc: "Cooperative yield rules and spatial reservation bubbles prevent intersecting paths from turning into gridlocks or deadlocks.",
    },
  ];

  return (
    <section id="solution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>OUR ARCHITECTURAL APPROACH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Coordination at the Edge
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            A distributed fleet coordination architecture where autonomous mobile robots share coordination information and make local decisions closer to the point of action.
          </p>
        </div>

        {/* 5 Solution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`shazam-card group p-6 sm:p-8 flex flex-col justify-between ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] border border-[#0284C7]/20 text-[#0284C7] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-3 group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#0284C7]">
                  <span>SHAZAM CORE // 0{index + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}

          {/* Quick Recap Card */}
          <div className="shazam-card p-6 sm:p-8 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white flex flex-col justify-between border-cyan-500/30">
            <div>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block mb-3 font-semibold">
                SYSTEM SUMMARY
              </span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Decentralized Autonomy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By distributing path evaluation and negotiation to individual AMR edge nodes, the fleet coordinates naturally—adapting seamlessly in simulation with 5 AMRs.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300">5-ROBOT FLEET SIMULATION</span>
              <a href="#how-it-works" className="text-xs font-mono text-white hover:text-cyan-300 flex items-center gap-1">
                <span>View Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
