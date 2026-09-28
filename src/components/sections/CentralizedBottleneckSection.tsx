import React, { useState } from "react";
import { Server, Cpu, Wifi, WifiOff, AlertOctagon, ArrowRight, CheckCircle2, ShieldAlert, Zap } from "lucide-react";

export const CentralizedBottleneckSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"centralized" | "distributed">("centralized");

  return (
    <section id="bottleneck" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] relative overflow-hidden border-t border-slate-200/80">
      {/* Background soft glow */}
      <div className="absolute top-10 right-1/3 w-[500px] h-[350px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Server className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            The Centralized Bottleneck
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            Centralized servers must process every robot trajectory, intersection reservation, and collision check in one place. As fleet size expands, this central nexus can introduce critical operational vulnerabilities.
          </p>

          {/* Architecture Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("centralized")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                activeTab === "centralized"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Centralized Dispatch Model
            </button>
            <button
              onClick={() => setActiveTab("distributed")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                activeTab === "distributed"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Distributed Edge-AI Architecture
            </button>
          </div>
        </div>

        {/* Side-by-Side Visual Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Centralized Architecture */}
          <div
            className={`shazam-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeTab === "centralized"
                ? "border-amber-400/80 shadow-[0_8px_30px_rgba(245,158,11,0.12)] ring-1 ring-amber-400/40"
                : "opacity-85"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold uppercase tracking-wider">
                  TRADITIONAL PARADIGM
                </span>
                <span className="text-xs font-mono text-[#64748B]">CENTRALIZED</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-3">
                Central Server Dispatch
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Every AMR must stream raw telemetry up to a centralized server. The server computes all global trajectories and dispatches sequential execution commands back to each robot.
              </p>

              {/* Centralized Flow Diagram */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 font-mono text-xs text-[#0F172A]">
                <div className="flex items-center justify-around text-center py-2 text-slate-700">
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs font-semibold">AMR 1</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs font-semibold">AMR 2</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs font-semibold">AMR 3</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs font-semibold">AMR 4</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs font-semibold">AMR 5</span>
                </div>
                <div className="text-center my-1 text-slate-400">
                  <span>↓ Telemetry Influx (Upstream RF)</span>
                </div>
                <div className="p-3 bg-amber-50/70 border border-amber-300 rounded-lg text-center font-bold text-amber-900 shadow-xs">
                  CENTRAL CONTROLLER / DISPATCH SERVER
                </div>
                <div className="text-center my-1 text-slate-400">
                  <span>↓ Central Path Decisions & Steering Directives</span>
                </div>
                <div className="flex items-center justify-around text-center py-2 text-slate-700">
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs">Action</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs">Action</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs">Action</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs">Action</span>
                  <span className="px-2 py-1 bg-white rounded border border-slate-200 shadow-2xs">Action</span>
                </div>
              </div>

              {/* Identified Potential Limitations */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-200/70 text-xs">
                  <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block font-semibold">Single Point of Failure:</strong>
                    <span className="text-amber-800/80">If the central server or base station Wi-Fi drops, the entire AMR fleet is forced to halt.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-200/70 text-xs">
                  <WifiOff className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block font-semibold">Network Latency & Stalls:</strong>
                    <span className="text-amber-800/80">Round-trip latency over busy wireless bands delays evasive maneuvers during unexpected obstructions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-200/70 text-xs">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block font-semibold">Compute Scalability Ceilings:</strong>
                    <span className="text-amber-800/80">Calculating synchronous N-robot multi-agent pathfinding exponentially increases server CPU overhead.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              *Note: Centralized systems have proven utility, but communication dependency and scaling friction motivate our exploration of distributed alternatives.
            </div>
          </div>

          {/* Card 2: Distributed Edge Architecture */}
          <div
            className={`shazam-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeTab === "distributed"
                ? "border-[#0284C7] shadow-[0_8px_30px_rgba(2,132,199,0.18)] ring-1 ring-[#0284C7]/40"
                : "opacity-85"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-[#0284C7]/30 font-bold uppercase tracking-wider">
                  SHAZAM ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-[#0284C7] font-semibold">EDGE-AI BASED</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-3">
                Distributed Edge Coordination
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Robots make local coordination decisions right at the edge while sharing compact state information directly with nearby fleet units via peer-to-peer middleware.
              </p>

              {/* Distributed Peer Mesh Diagram */}
              <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#0284C7]/30 mb-6 font-mono text-xs text-[#0F172A]">
                <div className="text-center font-bold text-[#0284C7] mb-3">
                  PEER-TO-PEER FAST DDS COORDINATION MESH
                </div>
                <div className="grid grid-cols-3 gap-2 text-center py-1">
                  <div className="p-2 bg-white rounded border border-[#0284C7]/30 shadow-2xs font-semibold text-[#0F172A]">
                    AMR-01 ↔ AMR-02
                  </div>
                  <div className="p-2 bg-white rounded border border-[#0284C7]/30 shadow-2xs font-semibold text-[#0F172A]">
                    AMR-03 ↔ AMR-04
                  </div>
                  <div className="p-2 bg-white rounded border border-[#0284C7]/30 shadow-2xs font-semibold text-[#0F172A]">
                    AMR-05 (Mesh)
                  </div>
                </div>
                <div className="text-center my-2 text-[#0284C7] font-semibold text-[11px]">
                  <span>Local Edge Decision Logic + D* Lite Dynamic Replanning</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-[#0284C7]/40 text-center font-semibold text-xs text-[#0369A1]">
                  Decentralized Decision-Making Close to Action Points
                </div>
              </div>

              {/* Verified Advantages */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-sky-50/60 border border-sky-200 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sky-950 block font-semibold">Resilience to Partial Outages:</strong>
                    <span className="text-slate-600">No single point of failure; robots continue localized collision avoidance even if remote connectivity is intermittent.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-sky-50/60 border border-sky-200 text-xs">
                  <Zap className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sky-950 block font-semibold">Ultra-Low Local Reaction Time:</strong>
                    <span className="text-slate-600">Local compute on each AMR detects nearby intersecting units and initiates immediate path arbitration.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-sky-50/60 border border-sky-200 text-xs">
                  <Cpu className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sky-950 block font-semibold">D* Lite On-the-Fly Replanning:</strong>
                    <span className="text-slate-600">Path costs adapt incrementally when an aisle is occupied, avoiding full graph recalculations.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 italic bg-sky-50/40 p-2.5 rounded-lg border border-sky-200/60">
              *Honest Architecture Principle: Distributed coordination does not eliminate communication; it distributes state updates efficiently across peer edge nodes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
