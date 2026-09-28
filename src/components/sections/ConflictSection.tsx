import React, { useState } from "react";
import { GitFork, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";

export const ConflictSection: React.FC = () => {
  const [scenarioMode, setScenarioMode] = useState<"yield" | "deadlock">("yield");

  return (
    <section id="conflict" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[350px] bg-[#168AAD]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8EDF0] border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <GitFork className="w-3.5 h-3.5" />
            <span>INTERSECTION & DEADLOCK MANAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Conflict Resolution & Deadlock Mitigation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4B6370] font-light leading-relaxed">
            When multiple autonomous mobile robots converge on narrow intersections, decentralized arbitration rules resolve spatial contention before physical encounters occur.
          </p>

          {/* Scenario Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-[#E8EDF0] shadow-sm">
            <button
              onClick={() => setScenarioMode("yield")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                scenarioMode === "yield"
                  ? "bg-[#168AAD] text-white shadow-xs"
                  : "text-[#4B6370] hover:text-[#17242B]"
              }`}
            >
              Scenario 1: Intersection Conflict & Yielding
            </button>
            <button
              onClick={() => setScenarioMode("deadlock")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer ${
                scenarioMode === "deadlock"
                  ? "bg-[#168AAD] text-white shadow-xs"
                  : "text-[#4B6370] hover:text-[#17242B]"
              }`}
            >
              Scenario 2: Corridor Deadlock Mitigation
            </button>
          </div>
        </div>

        {/* Visual Interactive Showcase Card */}
        <div className="shazam-card p-6 sm:p-8 bg-white border border-[#E8EDF0] shadow-md mb-12">
          {scenarioMode === "yield" ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E8EDF0]">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#17242B]">
                    Shared Intersection: Robot A (AMR-04) ↔ Robot B (AMR-02)
                  </h3>
                  <p className="text-xs text-[#4B6370]">
                    Both units approach Intersection IX-04 simultaneously. The distributed edge protocol arbitrates right-of-way.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#3FA66B] border border-emerald-200 self-start sm:self-auto">
                  ARBITRATION: RESOLVED
                </span>
              </div>

              {/* Graphic Intersection Diagram */}
              <div className="relative aspect-[16/8] sm:aspect-[21/8] w-full rounded-2xl bg-[#F8FAFB] border border-[#CBD5E1] overflow-hidden p-6 flex flex-col justify-between mb-6">
                <div className="absolute inset-0 warehouse-grid-light opacity-50 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#4B6370]">
                  <span className="flex items-center gap-1.5 text-[#168AAD]">
                    <span className="w-2 h-2 rounded-full bg-[#168AAD]" />
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
                    <rect x="0" y="80" width="700" height="80" fill="#E8EDF0" />
                    <rect x="290" y="0" width="120" height="240" fill="#E8EDF0" />

                    {/* Intersection Conflict Zone Box */}
                    <rect x="290" y="80" width="120" height="80" fill="rgba(242, 169, 59, 0.15)" stroke="#F2A93B" strokeWidth="1.5" strokeDasharray="4,4" />
                    <text x="350" y="125" fill="#B45309" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      INTERSECTION IX-04
                    </text>

                    {/* Corridor centerlines */}
                    <line x1="0" y1="120" x2="290" y2="120" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="410" y1="120" x2="700" y2="120" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="350" y1="0" x2="350" y2="80" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="350" y1="160" x2="350" y2="240" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />

                    {/* Robot A (AMR-04) - Northbound, Higher Priority */}
                    <g>
                      <circle cx="350" cy="190" r="14" fill="#FFFFFF" stroke="#3FA66B" strokeWidth="2.5" />
                      <text x="350" y="194" fill="#17242B" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-04</text>
                      <line x1="350" y1="170" x2="350" y2="140" stroke="#3FA66B" strokeWidth="2.5" />
                      <rect x="375" y="180" width="140" height="22" rx="4" fill="#FFFFFF" stroke="#3FA66B" />
                      <text x="382" y="195" fill="#3FA66B" fontSize="9" fontFamily="monospace" fontWeight="bold">PRIORITY: RIGHT-OF-WAY</text>
                    </g>

                    {/* Robot B (AMR-02) - Westbound, Yielding */}
                    <g>
                      <circle cx="560" cy="120" r="14" fill="#FFFFFF" stroke="#F2A93B" strokeWidth="2.5" />
                      <text x="560" y="124" fill="#B45309" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-02</text>
                      {/* Yield Stop Indicator */}
                      <line x1="460" y1="90" x2="460" y2="150" stroke="#E05252" strokeWidth="2" strokeDasharray="3,3" />
                      <text x="460" y="80" fill="#E05252" fontSize="9" fontFamily="monospace" textAnchor="middle">HOLD LINE</text>
                      <rect x="500" y="145" width="125" height="22" rx="4" fill="#FFFBEB" stroke="#F2A93B" />
                      <text x="507" y="160" fill="#B45309" fontSize="9" fontFamily="monospace" fontWeight="bold">STATUS: YIELDING</text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#4B6370] bg-white px-4 py-1.5 rounded-lg border border-[#CBD5E1]">
                  <span>Edge Decision: AMR-04 maintains speed • AMR-02 decelerates behind hold-line</span>
                  <span className="text-[#3FA66B] font-bold">Zero Collision Window</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E8EDF0]">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#17242B]">
                    Corridor Deadlock Avoidance Scenario
                  </h3>
                  <p className="text-xs text-[#475569]">
                    Head-to-head encounter inside a narrow bidirectional aisle: AMR detects deadlock potential early and engages proactive side-bay routing.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#E8EDF0] text-[#168AAD] border border-[#168AAD]/30 self-start sm:self-auto">
                  CONCEPTUAL HEURISTIC
                </span>
              </div>

              {/* Graphic Deadlock Diagram */}
              <div className="relative aspect-[16/8] sm:aspect-[21/8] w-full rounded-2xl bg-[#F8FAFB] border border-[#CBD5E1] overflow-hidden p-6 flex flex-col justify-between mb-6">
                <div className="absolute inset-0 warehouse-grid-light opacity-50 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#4B6370]">
                  <span className="text-[#168AAD] font-bold">NARROW AISLE DEADLOCK MITIGATION</span>
                  <span className="text-slate-400 text-[11px]">D* LITE POCKET BYPASS</span>
                </div>

                {/* SVG Visual */}
                <div className="relative z-10 w-full h-full flex items-center justify-center my-2">
                  <svg className="w-full h-full" viewBox="0 0 700 240">
                    <rect x="60" y="80" width="580" height="70" fill="#E8EDF0" stroke="#CBD5E1" strokeWidth="1" />
                    <rect x="290" y="150" width="120" height="60" fill="rgba(63, 166, 107, 0.15)" stroke="#3FA66B" strokeWidth="1.5" strokeDasharray="3,3" />
                    <text x="350" y="185" fill="#3FA66B" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PULL-IN BAY (CLEARANCE)</text>

                    {/* Robot 1 Moving Right */}
                    <circle cx="160" cy="115" r="13" fill="#FFFFFF" stroke="#3FA66B" strokeWidth="2.5" />
                    <text x="160" y="119" fill="#17242B" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-01</text>
                    <line x1="180" y1="115" x2="240" y2="115" stroke="#3FA66B" strokeWidth="2" />

                    {/* Robot 2 Approaching and Rerouting */}
                    <circle cx="350" cy="180" r="13" fill="#FFFFFF" stroke="#2496D2" strokeWidth="2.5" />
                    <text x="350" y="184" fill="#17242B" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AMR-03</text>

                    <path d="M 520 115 L 350 180" fill="none" stroke="#2496D2" strokeWidth="2" strokeDasharray="3,3" />
                    <text x="520" y="100" fill="#4B6370" fontSize="8" fontFamily="monospace" textAnchor="middle">ORIGIN PATH (AMR-03)</text>
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#4B6370] bg-white px-4 py-1.5 rounded-lg border border-[#CBD5E1]">
                  <span>AMR-03 engages pull-in bay • Corridor unblocked • AMR-01 proceeds uninterrupted</span>
                  <span className="text-[#3FA66B] font-bold">Deadlock Prevented</span>
                </div>
              </div>
            </div>
          )}

          {/* Conceptual Guardrails Note */}
          <div className="p-4 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] text-xs font-mono text-[#4B6370] flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#F2A93B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#17242B] font-semibold">Honest Engineering Declaration:</strong> The conflict arbitration and deadlock scenarios demonstrated are simulation heuristics designed to evaluate multi-agent coordination principles. Full physical proof-of-concept remains part of the future development scope.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
