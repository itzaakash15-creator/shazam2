import React from "react";
import { AlertTriangle, GitFork, Users, Network, ShieldAlert, Lock, ArrowDown } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: "multiple-robots",
      title: "Multiple AMRs",
      badge: "FLEET DENSITY",
      icon: Users,
      desc: "Scaling warehouse operations requires dozens of mobile units moving concurrently through narrow aisles and shared transit docks.",
      metric: "High density operations",
    },
    {
      id: "intersecting-paths",
      title: "Intersecting Paths",
      badge: "SPATIAL OVERLAP",
      icon: GitFork,
      desc: "Independent travel trajectories frequently intersect at high-traffic aisle crossways, creating spatial contention and right-of-way disputes.",
      metric: "Shared junction conflicts",
    },
    {
      id: "congestion",
      title: "Traffic Congestion",
      badge: "BOTTLENECK",
      icon: AlertTriangle,
      desc: "Bottlenecks form rapidly around active pick zones, sortation loops, and charging areas when units lack real-time local awareness.",
      metric: "Throughput deceleration",
    },
    {
      id: "comm-dependency",
      title: "Communication Dependency",
      badge: "NETWORK STRAIN",
      icon: Network,
      desc: "Reliance on constant round-trips to remote dispatch servers introduces packet latency, RF shadow zones, and packet loss vulnerabilities.",
      metric: "RF deadzone risks",
    },
    {
      id: "potential-collision",
      title: "Potential Collisions",
      badge: "SAFETY HAZARD",
      icon: ShieldAlert,
      desc: "Static travel trajectories fail when unforeseen obstacles emerge, turning minor navigation mismatches into near-miss hazards.",
      metric: "Unforeseen obstacle stops",
    },
    {
      id: "deadlock",
      title: "Deadlock States",
      badge: "FLEET FREEZE",
      icon: Lock,
      desc: "Two or more AMRs entering head-to-head or cyclic wait states in narrow corridors, freezing downstream warehouse movement.",
      metric: "Mutual wait lockouts",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>THE CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            When More Robots Create More Complexity
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            As smart warehouses scale from a handful of automated guided vehicles to dense fleets of Autonomous Mobile Robots, uncoordinated movement rapidly introduces operational friction.
          </p>
        </div>

        {/* Visual Problem Diagram: Highlighting the 6 Warehouse Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                className="shazam-card group p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] border border-[#0284C7]/20 text-[#0284C7] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#E0F2FE] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] border border-slate-200 uppercase">
                      {prob.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2 group-hover:text-[#0284C7] transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {prob.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#0284C7]">
                  <span className="text-[#475569]">RISK FACTOR</span>
                  <span className="font-semibold">{prob.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Transition Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] border border-[#0284C7]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#0284C7]/30 flex items-center justify-center text-[#0284C7] shrink-0">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                Why Centralized Systems Struggle at Scale
              </h4>
              <p className="text-xs text-[#475569]">
                Examining the communication delay and single point of failure in centralized dispatchers.
              </p>
            </div>
          </div>

          <a href="#bottleneck" className="shazam-btn-secondary text-xs shrink-0">
            View Centralized Bottleneck
          </a>
        </div>
      </div>
    </section>
  );
};
