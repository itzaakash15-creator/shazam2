import React, { useState } from "react";
import { AlertCircle, RefreshCw, Zap, ArrowRight, Play, CheckCircle2, ShieldAlert } from "lucide-react";

export const PathPlanningSection: React.FC = () => {
  const [hasObstacle, setHasObstacle] = useState(true);
  const [animatingStep, setAnimatingStep] = useState(0);

  const toggleObstacle = () => {
    setHasObstacle(!hasObstacle);
    setAnimatingStep(0);
  };

  return (
    <section id="path-planning" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-sky-200/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>INCREMENTAL PATH PLANNING ALGORITHM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Paths That Adapt
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            In dynamic warehouse environments, aisles get blocked by pallets or other robots. D* Lite enables AMRs to efficiently replan collision-free paths in real time without computing the entire route from scratch.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#0284C7]/30">
            <span>Environment changes</span>
            <span>→</span>
            <span>Path recalculates</span>
            <span>→</span>
            <span>Robot adapts</span>
          </div>
        </div>

        {/* Interactive D* Lite Simulation Canvas Card */}
        <div className="shazam-card p-6 sm:p-8 bg-white border border-slate-200 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A]">
                Interactive D* Lite Replanning Sandbox
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                Simulate an unexpected blockage appearing in Corridor-2 and observe the incremental route adaptation.
              </p>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={toggleObstacle}
                className={`shazam-btn-primary text-xs cursor-pointer ${
                  hasObstacle ? "bg-amber-600 hover:bg-amber-700" : ""
                }`}
              >
                {hasObstacle ? (
                  <>
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Clear Dynamic Obstacle</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Inject Aisle Obstacle</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Warehouse Map Grid Visualizer */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl bg-[#0B1528] border border-cyan-500/30 overflow-hidden p-6 flex flex-col justify-between">
            <div className="absolute inset-0 warehouse-grid-dark opacity-35 pointer-events-none" />

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>ALGORITHM: D* LITE (INCREMENTAL GRAPH SEARCH)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">STATE:</span>
                <span className={hasObstacle ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                  {hasObstacle ? "OBSTACLE DETECTED • ROUTE ADAPTED" : "NOMINAL DIRECT PATH"}
                </span>
              </div>
            </div>

            {/* SVG Visualizer */}
            <div className="relative z-10 w-full h-full flex items-center justify-center my-2">
              <svg className="w-full h-full" viewBox="0 0 800 320">
                {/* Racks Background */}
                <rect x="180" y="50" width="80" height="220" fill="#0F213A" stroke="#0284C7" strokeWidth="1" rx="4" />
                <text x="220" y="165" fill="#64748B" fontSize="11" fontFamily="monospace" textAnchor="middle">RACK-A</text>

                <rect x="360" y="50" width="80" height="220" fill="#0F213A" stroke="#0284C7" strokeWidth="1" rx="4" />
                <text x="400" y="165" fill="#64748B" fontSize="11" fontFamily="monospace" textAnchor="middle">RACK-B</text>

                <rect x="540" y="50" width="80" height="220" fill="#0F213A" stroke="#0284C7" strokeWidth="1" rx="4" />
                <text x="580" y="165" fill="#64748B" fontSize="11" fontFamily="monospace" textAnchor="middle">RACK-C</text>

                {/* Origin: Station Inbound */}
                <rect x="50" y="130" width="70" height="60" fill="rgba(2, 132, 199, 0.2)" stroke="#38BDF8" strokeWidth="1.5" rx="6" />
                <text x="85" y="165" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DOCK-1</text>

                {/* Destination: Rack Target */}
                <rect x="680" y="130" width="70" height="60" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" rx="6" />
                <text x="715" y="165" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DEST-01</text>

                {/* Original Nominal Route (Straight across main central corridor y=160) */}
                {!hasObstacle ? (
                  <g>
                    <line x1="120" y1="160" x2="680" y2="160" stroke="#06B6D4" strokeWidth="3" strokeDasharray="6,4" />
                    {/* Animated Robot on Direct Path */}
                    <circle cx="340" cy="160" r="10" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="340" y="140" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01</text>
                  </g>
                ) : (
                  <g>
                    {/* Invalidated Blocked Section */}
                    <line x1="120" y1="160" x2="310" y2="160" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="310" y1="160" x2="480" y2="160" stroke="#EF4444" strokeWidth="3" strokeDasharray="4,4" opacity="0.8" />

                    {/* Dynamic Obstacle Box */}
                    <rect x="300" y="140" width="40" height="40" fill="#EF4444" stroke="#FCA5A5" strokeWidth="2" rx="4" />
                    <text x="320" y="164" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BLOCKED</text>

                    {/* D* Lite Recalculated Bypass Route */}
                    <polyline
                      points="290,160 290,290 490,290 490,160 680,160"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3.5"
                    />

                    {/* D* Lite Waypoint Nodes */}
                    <circle cx="290" cy="290" r="4" fill="#10B981" />
                    <circle cx="490" cy="290" r="4" fill="#10B981" />

                    {/* Robot Traversing Adapted Route */}
                    <circle cx="390" cy="290" r="10" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="390" y="275" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01 [REPLANNED]</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Status Feed */}
            <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 bg-black/60 px-4 py-2 rounded-xl border border-slate-700/80">
              <span className="flex items-center gap-2">
                <span className="text-[#38BDF8]">D* LITE STATE:</span>
                {hasObstacle ? (
                  <span className="text-emerald-400">
                    Obstacle localized at Corridor-2 • Incremental vertex update applied • Route shifted to Lower Bypass
                  </span>
                ) : (
                  <span className="text-cyan-300">
                    All corridors clear • Nominal direct trajectory engaged
                  </span>
                )}
              </span>

              <span className="text-slate-500">
                Algorithm: Koenig & Likhachev D* Lite
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core D* Lite Principles Explained */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shazam-card p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-mono font-bold mb-4">
                01
              </div>
              <h4 className="text-lg font-heading font-bold text-[#0F172A] mb-2">
                Incremental Search
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                Unlike standard path planners that must re-evaluate the entire grid when a change occurs, D* Lite reuses previous search trees to repair paths locally.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#0284C7]">
              Efficient CPU utilization at the edge
            </div>
          </div>

          <div className="shazam-card p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-mono font-bold mb-4">
                02
              </div>
              <h4 className="text-lg font-heading font-bold text-[#0F172A] mb-2">
                Goal-Directed Backtracking
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                By searching backward from target destinations to current robot positions, cost changes in the robot's immediate vicinity trigger rapid, localized repairs.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#0284C7]">
              Fast response to unexpected obstacles
            </div>
          </div>

          <div className="shazam-card p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-mono font-bold mb-4">
                03
              </div>
              <h4 className="text-lg font-heading font-bold text-[#0F172A] mb-2">
                Multi-Robot Awareness
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                Temporary reservation cells shared by peer AMRs are mapped as temporary high-cost regions, allowing robots to detour smoothly around active units.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#0284C7]">
              Continuous warehouse traffic flow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
