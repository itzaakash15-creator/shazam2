import React, { useState } from "react";
import { AlertCircle, RefreshCw, Zap, ArrowRight, Play, CheckCircle2, ShieldAlert } from "lucide-react";

export const PathPlanningSection: React.FC = () => {
  const [hasObstacle, setHasObstacle] = useState(true);

  const toggleObstacle = () => {
    setHasObstacle(!hasObstacle);
  };

  return (
    <section id="path-planning" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#E8EDF0]/60 relative overflow-hidden border-t border-[#E8EDF0]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#168AAD]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>INCREMENTAL PATH PLANNING ALGORITHM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Paths That Adapt
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4B6370] font-light leading-relaxed">
            In dynamic warehouse environments, aisles get blocked by pallets or other robots. D* Lite enables AMRs to efficiently replan collision-free paths in real time without computing the entire route from scratch.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#168AAD] bg-white px-4 py-1.5 rounded-full border border-[#E8EDF0] shadow-xs">
            <span>Environment changes</span>
            <span>→</span>
            <span>Path recalculates</span>
            <span>→</span>
            <span>Robot adapts</span>
          </div>
        </div>

        {/* Interactive D* Lite Simulation Canvas Card */}
        <div className="shazam-card p-6 sm:p-8 bg-white border border-[#E8EDF0] shadow-md mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8EDF0]">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#17242B]">
                Interactive D* Lite Replanning Sandbox
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6370]">
                Simulate an unexpected blockage appearing in Corridor-2 and observe the incremental route adaptation.
              </p>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={toggleObstacle}
                className={`shazam-btn-primary text-xs cursor-pointer ${
                  hasObstacle ? "bg-[#17242B] hover:bg-[#0B2733]" : ""
                }`}
              >
                {hasObstacle ? (
                  <>
                    <ShieldAlert className="w-3.5 h-3.5 text-[#F2A93B]" />
                    <span>Clear Dynamic Obstacle</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-[#E05252]" />
                    <span>Inject Aisle Obstacle</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Warehouse Map Grid Visualizer (Light Floor Plan Balance) */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl bg-[#F8FAFB] border border-[#CBD5E1] overflow-hidden p-6 flex flex-col justify-between">
            <div className="absolute inset-0 warehouse-grid-light opacity-50 pointer-events-none" />

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#4B6370]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#168AAD] animate-pulse" />
                <span className="text-[#17242B] font-bold">ALGORITHM: D* LITE (INCREMENTAL GRAPH SEARCH)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4B6370]">STATE:</span>
                <span className={hasObstacle ? "text-[#F2A93B] font-bold" : "text-[#3FA66B] font-bold"}>
                  {hasObstacle ? "OBSTACLE DETECTED • ROUTE ADAPTED" : "NOMINAL DIRECT PATH"}
                </span>
              </div>
            </div>

            {/* SVG Visualizer */}
            <div className="relative z-10 w-full h-full flex items-center justify-center my-2">
              <svg className="w-full h-full" viewBox="0 0 800 320">
                {/* Racks Background */}
                <rect x="180" y="50" width="80" height="220" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" rx="4" />
                <text x="220" y="165" fill="#4B6370" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RACK-A</text>

                <rect x="360" y="50" width="80" height="220" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" rx="4" />
                <text x="400" y="165" fill="#4B6370" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RACK-B</text>

                <rect x="540" y="50" width="80" height="220" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" rx="4" />
                <text x="580" y="165" fill="#4B6370" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RACK-C</text>

                {/* Origin: Station Inbound */}
                <rect x="50" y="130" width="70" height="60" fill="#E8EDF0" stroke="#168AAD" strokeWidth="1.5" rx="4" />
                <text x="85" y="165" fill="#168AAD" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DOCK-01</text>

                {/* Destination: Rack Target */}
                <rect x="680" y="130" width="70" height="60" fill="#E8EDF0" stroke="#3FA66B" strokeWidth="1.5" rx="4" />
                <text x="715" y="165" fill="#3FA66B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DEST-01</text>

                {/* Original Nominal Route */}
                {!hasObstacle ? (
                  <g>
                    <line x1="120" y1="160" x2="680" y2="160" stroke="#2496D2" strokeWidth="3" />
                    {/* Animated Robot on Direct Path */}
                    <circle cx="340" cy="160" r="12" fill="#FFFFFF" stroke="#3FA66B" strokeWidth="2.5" />
                    <text x="340" y="140" fill="#17242B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01</text>
                  </g>
                ) : (
                  <g>
                    {/* Invalidated Blocked Section */}
                    <line x1="120" y1="160" x2="310" y2="160" stroke="#2496D2" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="310" y1="160" x2="480" y2="160" stroke="#E05252" strokeWidth="3" strokeDasharray="4,4" opacity="0.8" />

                    {/* Dynamic Obstacle Box */}
                    <rect x="300" y="140" width="45" height="40" fill="#17242B" stroke="#E05252" strokeWidth="1.5" rx="4" />
                    <text x="322" y="164" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BLOCKED</text>

                    {/* D* Lite Recalculated Bypass Route */}
                    <polyline
                      points="290,160 290,290 490,290 490,160 680,160"
                      fill="none"
                      stroke="#2EC4C9"
                      strokeWidth="3.5"
                    />

                    {/* D* Lite Waypoint Nodes */}
                    <circle cx="290" cy="290" r="4" fill="#168AAD" />
                    <circle cx="490" cy="290" r="4" fill="#168AAD" />

                    {/* Robot Traversing Adapted Route */}
                    <circle cx="390" cy="290" r="12" fill="#FFFFFF" stroke="#3FA66B" strokeWidth="2.5" />
                    <text x="390" y="275" fill="#17242B" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01 [REPLANNED]</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Status Feed */}
            <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#4B6370] bg-white px-4 py-2 rounded-xl border border-[#CBD5E1]">
              <span className="flex items-center gap-2">
                <span className="text-[#168AAD] font-bold">D* LITE STATE:</span>
                {hasObstacle ? (
                  <span className="text-[#17242B]">
                    Obstacle localized at Corridor-2 • Incremental vertex update applied • Route shifted to Lower Bypass
                  </span>
                ) : (
                  <span className="text-[#3FA66B]">
                    All corridors clear • Nominal direct trajectory engaged
                  </span>
                )}
              </span>

              <span className="text-slate-400">
                Algorithm: Koenig & Likhachev D* Lite
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core D* Lite Principles Explained */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shazam-card p-6 bg-white flex flex-col justify-between border border-[#E8EDF0]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8EDF0] text-[#168AAD] flex items-center justify-center font-mono font-bold mb-4">
                01
              </div>
              <h4 className="text-lg font-heading font-bold text-[#17242B] mb-2">
                Incremental Search
              </h4>
              <p className="text-sm text-[#4B6370] leading-relaxed">
                Unlike standard path planners that must re-evaluate the entire grid when a change occurs, D* Lite reuses previous search trees to repair paths locally.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#168AAD]">
              Efficient CPU utilization at the edge
            </div>
          </div>

          <div className="shazam-card p-6 bg-white flex flex-col justify-between border border-[#E8EDF0]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8EDF0] text-[#168AAD] flex items-center justify-center font-mono font-bold mb-4">
                02
              </div>
              <h4 className="text-lg font-heading font-bold text-[#17242B] mb-2">
                Goal-Directed Backtracking
              </h4>
              <p className="text-sm text-[#4B6370] leading-relaxed">
                By searching backward from target destinations to current robot positions, cost changes in the robot's immediate vicinity trigger rapid, localized repairs.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#168AAD]">
              Fast response to unexpected obstacles
            </div>
          </div>

          <div className="shazam-card p-6 bg-white flex flex-col justify-between border border-[#E8EDF0]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8EDF0] text-[#168AAD] flex items-center justify-center font-mono font-bold mb-4">
                03
              </div>
              <h4 className="text-lg font-heading font-bold text-[#17242B] mb-2">
                Multi-Robot Awareness
              </h4>
              <p className="text-sm text-[#4B6370] leading-relaxed">
                Temporary reservation cells shared by peer AMRs are mapped as temporary high-cost regions, allowing robots to detour smoothly around active units.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-mono text-[#168AAD]">
              Continuous warehouse traffic flow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
