import React, { useState } from "react";
import { GitFork, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";

export const ConflictSection: React.FC = () => {
  const [scenarioMode, setScenarioMode] = useState<"yield" | "deadlock">("yield");

  return (
    <section id="conflict" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[350px] bg-cyan-100/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <GitFork className="w-3.5 h-3.5" />
            <span>INTERSECTION & DEADLOCK MANAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Conflict Resolution & Deadlock Mitigation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            When multiple autonomous mobile robots converge on narrow intersections, decentralized arbitration rules resolve spatial contention before physical encounters occur.
          </p>

          {/* Scenario Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setScenarioMode("yield")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                scenarioMode === "yield"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Scenario 1: Intersection Conflict & Yielding
            </button>
            <button
              onClick={() => setScenarioMode("deadlock")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                scenarioMode === "deadlock"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Scenario 2: Corridor Deadlock Mitigation
            </button>
          </div>
        </div>

        {/* Visual Interactive Showcase Card */}
        <div className="shazam-card p-6 sm:p-8 bg-white border border-slate-200 shadow-lg mb-12">
          {scenarioMode === "yield" ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A]">
                    Shared Intersection: Robot A (AMR-04) ↔ Robot B (AMR-02)
                  </h3>
                  <p className="text-xs text-[#475569]">
                    Both units approach Intersection IX-04 simultaneously. The distributed edge protocol arbitrates right-of-way.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
                  ARBITRATION: RESOLVED
                </span>
              </div>

              {/* Graphic Intersection Diagram */}
              <div className="relative aspect-[16/8] sm:aspect-[21/8] w-full rounded-2xl bg-[#0B1528] border border-cyan-500/30 overflow-hidden p-6 flex flex-col justify-between mb-6">
                <div className="absolute inset-0 warehouse-grid-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>INTERSECTION IX-04 ARBITRATION ZONE</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    PROTO: PEER RESERVATION WINDOW
                  </span>
                </div>

                {/* SVG Intersection Visual */}
                <div className="relative z-10 w-full h-full flex items-center justify-center my-2">
                  <svg className="w-full h-full" viewBox="0 0 700 240">
                    {/* Warehouse Floor Corridor Roadways */}
                    {/* Horizontal corridor */}
                    <rect x="0" y="80" width="700" height="80" fill="rgba(15, 33, 58, 0.7)" />
                    {/* Vertical corridor */}
                    <rect x="290" y="0" width="120" height="240" fill="rgba(15, 33, 58, 0.7)" />

                    {/* Intersection Conflict Zone Box */}
                    <rect x="290" y="80" width="120" height="80" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4,4" />
                    <text x="350" y="125" fill="#F59E0B" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      INTERSECTION IX-04
                    </text>

                    {/* Corridor dividing centerlines */}
                    <line x1="0" y1="120" x2="290" y2="120" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                    <line x1="410" y1="120" x2="700" y2="120" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                    <line x1="350" y1="0" x2="350" y2="80" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                    <line x1="350" y1="160" x2="350" y2="240" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />

                    {/* Robot A (AMR-04) - Northbound, Higher Priority (Heavy Pallet) */}
                    <g>
                      <circle cx="350" cy="190" r="14" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                      <text x="350" y="194" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-04</text>
                      {/* Priority Arrow */}
                      <line x1="350" y1="170" x2="350" y2="140" stroke="#38BDF8" strokeWidth="2.5" markerEnd="url(#arrow)" />
                      <rect x="375" y="180" width="140" height="22" rx="4" fill="rgba(2, 132, 199, 0.3)" stroke="#0284C7" />
                      <text x="382" y="195" fill="#38BDF8" fontSize="9" fontFamily="monospace">PRIORITY: RIGHT-OF-WAY</text>
                    </g>

                    {/* Robot B (AMR-02) - Westbound, Yielding Before Junction */}
                    <g>
                      <circle cx="560" cy="120" r="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                      <text x="560" y="124" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-02</text>
                      {/* Yield Stop Indicator */}
                      <line x1="460" y1="90" x2="460" y2="150" stroke="#EF4444" strokeWidth="2" strokeDasharray="3,3" />
                      <text x="460" y="80" fill="#EF4444" fontSize="9" fontFamily="monospace" textAnchor="middle">HOLD LINE</text>
                      <rect x="500" y="145" width="125" height="22" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" />
                      <text x="507" y="160" fill="#FCD34D" fontSize="9" fontFamily="monospace">STATUS: YIELDING</text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/60 px-4 py-1.5 rounded-lg border border-slate-700">
                  <span>Edge Decision: AMR-04 maintains speed • AMR-02 decelerates behind hold-line</span>
                  <span className="text-emerald-400">Zero Collision Window</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A]">
                    Corridor Deadlock Avoidance Scenario
                  </h3>
                  <p className="text-xs text-[#475569]">
                    Head-to-head encounter inside a narrow bidirectional aisle: AMR detects deadlock potential early and engages proactive side-bay routing.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-[#0284C7]/30 self-start sm:self-auto">
                  CONCEPTUAL HEURISTIC
                </span>
              </div>

              {/* Graphic Deadlock Diagram */}
              <div className="relative aspect-[16/8] sm:aspect-[21/8] w-full rounded-2xl bg-[#0B1528] border border-cyan-500/30 overflow-hidden p-6 flex flex-col justify-between mb-6">
                <div className="absolute inset-0 warehouse-grid-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-cyan-300">NARROW AISLE DEADLOCK MITIGATION</span>
                  <span className="text-slate-400 text-[11px]">D* LITE POCKET BYPASS</span>
                </div>

                {/* SVG Visual */}
                <div className="relative z-10 w-full h-full flex items-center justify-center my-2">
                  <svg className="w-full h-full" viewBox="0 0 700 240">
                    {/* Narrow Corridor */}
                    <rect x="60" y="80" width="580" height="70" fill="rgba(15, 33, 58, 0.8)" stroke="#0284C7" strokeWidth="1" />
                    {/* Side Pocket / Pull-in Bay */}
                    <rect x="290" y="150" width="120" height="60" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,3" />
                    <text x="350" y="185" fill="#10B981" fontSize="9" fontFamily="monospace" textAnchor="middle">PULL-IN BAY (CLEARANCE)</text>

                    {/* Robot 1 Moving Right */}
                    <circle cx="160" cy="115" r="13" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                    <text x="160" y="119" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01</text>
                    <line x1="180" y1="115" x2="240" y2="115" stroke="#38BDF8" strokeWidth="2" />

                    {/* Robot 2 Approaching from Left and Rerouting into Pocket */}
                    <circle cx="350" cy="180" r="13" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="350" y="184" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-03</text>

                    {/* Adapted D* Lite Path into Pocket */}
                    <path d="M 520 115 L 350 180" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3,3" />
                    <text x="520" y="100" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">ORIGIN PATH (AMR-03)</text>
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/60 px-4 py-1.5 rounded-lg border border-slate-700">
                  <span>AMR-03 engages pull-in bay • Corridor unblocked • AMR-01 proceeds uninterrupted</span>
                  <span className="text-emerald-400">Deadlock Prevented</span>
                </div>
              </div>
            </div>
          )}

          {/* Conceptual Guardrails Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F172A] font-semibold">Honest Engineering Declaration:</strong> The conflict arbitration and deadlock scenarios demonstrated are simulation heuristics designed to evaluate multi-agent coordination principles. Full physical proof-of-concept remains part of the future development scope.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
