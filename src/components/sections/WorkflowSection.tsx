import React, { useState, useEffect } from "react";
import { SYSTEM_FLOW_STEPS, SystemFlowStep } from "../../data/technology";
import { Play, Pause, ChevronRight, Activity, Radio, Cpu, RefreshCw, GitMerge, Navigation, RotateCw } from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const stepIcons = [
    Activity,     // 01 SENSE
    Radio,        // 02 SHARE
    Cpu,          // 03 DECIDE
    Navigation,   // 04 PLAN
    GitMerge,     // 05 COORDINATE
    ChevronRight, // 06 MOVE
    RotateCw,     // 07 REPLAN
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % SYSTEM_FLOW_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeStep = SYSTEM_FLOW_STEPS[activeStepIndex];
  const ActiveIcon = stepIcons[activeStepIndex];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] relative overflow-hidden border-t border-slate-200/80">
      {/* Background radial technical accents */}
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[350px] bg-cyan-200/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0284C7]/30 text-[#0284C7] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <RotateCw className="w-3.5 h-3.5" />
            <span>SYSTEM EXECUTION PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            How It Works
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light leading-relaxed">
            The core decentralized execution loop running on every AMR node—from continuous local perception to autonomous D* Lite route recalculation.
          </p>

          {/* Autoplay / Controls Strip */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="flex items-center gap-1.5 text-[#0284C7] hover:text-[#0369A1] font-semibold cursor-pointer"
            >
              {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoPlay ? "PAUSE PIPELINE ANIMATION" : "PLAY PIPELINE ANIMATION"}</span>
            </button>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">CYCLE: 7 CONTINUOUS PHASES</span>
          </div>
        </div>

        {/* 7-Step Navigation Rail (Horizontal Scrollable on mobile, Clean Segmented Rail on Desktop) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] border-b border-slate-200 px-2">
            {SYSTEM_FLOW_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setAutoPlay(false);
                  }}
                  className={`flex flex-col items-center gap-2 py-3 px-3 transition-all relative cursor-pointer group ${
                    isActive ? "text-[#0284C7]" : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      isActive
                        ? "bg-[#0284C7] text-white shadow-[0_0_15px_rgba(2,132,199,0.35)] scale-110"
                        : "bg-white border border-slate-200 text-slate-500 group-hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider">
                    {step.step} {step.title}
                  </span>

                  {isActive && (
                    <div className="absolute bottom-0 inset-x-2 h-[3px] bg-[#0284C7] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Dynamic Active Step Showcase Box */}
        <div className="shazam-card p-6 sm:p-10 bg-white border border-slate-200 shadow-lg relative overflow-hidden mb-12">
          {/* Subtle background step number watermark */}
          <div className="absolute top-2 right-4 text-8xl sm:text-9xl font-mono font-black text-slate-100 select-none pointer-events-none -z-0">
            {activeStep.step}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7]/30">
                  PHASE // {activeStep.step} OF 07
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  {activeStep.badge}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] mb-4">
                {activeStep.step}. {activeStep.title}
              </h3>

              <p className="text-lg font-medium text-[#0284C7] mb-3">
                “{activeStep.summary}”
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {activeStep.detail}
              </p>

              {/* Technical Context Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-400">EDGE PIPELINE:</span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A]">
                  ROS 2 Node Logic
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A]">
                  Fast DDS Peer-to-Peer
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-[#0F172A]">
                  D* Lite Planner
                </span>
              </div>
            </div>

            {/* Right Interactive State Visualizer Column */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white border border-cyan-500/30 shadow-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="w-5 h-5 text-cyan-400" />
                    <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
                      EDGE STATE // {activeStep.title}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Step specific interactive pseudo-code / state machine snippet */}
                <div className="font-mono text-xs space-y-2 text-slate-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-slate-700">
                  {activeStepIndex === 0 && (
                    <>
                      <div className="text-emerald-400">// Phase 1: Local Sensing</div>
                      <div>pose = amr.get_wheel_odometry()</div>
                      <div>scan = lidar.get_clearance_envelope()</div>
                      <div className="text-cyan-300">state = LocalState(x=22.4, y=48.2, v=1.2)</div>
                    </>
                  )}
                  {activeStepIndex === 1 && (
                    <>
                      <div className="text-emerald-400">// Phase 2: Peer State Broadcast</div>
                      <div>payload = serialize(amr.state, planned_wp)</div>
                      <div>fast_dds_mesh.broadcast(TOPIC_FLEET_TELEMETRY)</div>
                      <div className="text-cyan-300">mesh.peers_active = [AMR_01..05]</div>
                    </>
                  )}
                  {activeStepIndex === 2 && (
                    <>
                      <div className="text-emerald-400">// Phase 3: Edge Decision Check</div>
                      <div>conflicts = detect_spatial_overlap(incoming_peers)</div>
                      <div>if conflicts.exists():</div>
                      <div className="text-cyan-300 pl-4">arbitrate_right_of_way(priority)</div>
                    </>
                  )}
                  {activeStepIndex === 3 && (
                    <>
                      <div className="text-emerald-400">// Phase 4: D* Lite Graph Search</div>
                      <div>grid.update_vertex_costs(blocked_edges)</div>
                      <div>path = d_star_lite.compute_shortest_path()</div>
                      <div className="text-cyan-300">trajectory = smooth_waypoints(path)</div>
                    </>
                  )}
                  {activeStepIndex === 4 && (
                    <>
                      <div className="text-emerald-400">// Phase 5: Coordinated Arbitration</div>
                      <div>if amr.should_yield():</div>
                      <div className="pl-4 text-amber-300">amr.set_yield_hold(intersection_ix04)</div>
                      <div className="text-cyan-300">else: amr.reserve_crossing_window()</div>
                    </>
                  )}
                  {activeStepIndex === 5 && (
                    <>
                      <div className="text-emerald-400">// Phase 6: Path Execution</div>
                      <div>twist = diff_drive_controller.track(trajectory)</div>
                      <div>cmd_vel_pub.publish(twist)</div>
                      <div className="text-cyan-300">status = "IN_TRANSIT"</div>
                    </>
                  )}
                  {activeStepIndex === 6 && (
                    <>
                      <div className="text-emerald-400">// Phase 7: Dynamic Replanning</div>
                      <div>if obstacle_detected_ahead():</div>
                      <div className="pl-4 text-amber-300">d_star_lite.update_obstacle(x, y)</div>
                      <div className="text-cyan-300">new_route = d_star_lite.replan()</div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>ROS 2 Humble Node Graph</span>
                  <span className="text-cyan-400">CYCLE TIME: ~50ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Step Full Flow Linear Cards for Quick Scanning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {SYSTEM_FLOW_STEPS.map((s, idx) => (
            <div
              key={s.step}
              onClick={() => {
                setActiveStepIndex(idx);
                setAutoPlay(false);
              }}
              className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? "bg-white border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]"
                  : "bg-white/60 border-slate-200/80 hover:bg-white"
              }`}
            >
              <span className="text-xs font-mono font-bold text-[#0284C7] block mb-1">
                {s.step}
              </span>
              <h4 className="text-xs font-heading font-bold text-[#0F172A] mb-1">
                {s.title}
              </h4>
              <p className="text-[11px] text-[#475569] line-clamp-2">
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
