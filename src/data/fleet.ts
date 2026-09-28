/**
 * Team SHAZAM — SIH26123 Fleet Simulation Data
 * 
 * Defines the 5 Autonomous Mobile Robots (AMRs) operating inside the
 * simulated smart warehouse environment.
 */

export interface RobotInfo {
  id: string;
  name: string;
  code: string;
  battery: number;
  batteryState: "optimal" | "nominal" | "warning";
  status: "In Transit" | "Yielding" | "Navigating" | "Approaching" | "Docked";
  currentTask: string;
  origin: string;
  destination: string;
  currentCoord: { x: number; y: number };
  targetCoord: { x: number; y: number };
  pathWaypoints: { x: number; y: number }[];
  activeRoute: string;
  headingDeg: number;
  speed: string;
  payload: string;
  role: string;
  edgeCore: string;
  conflictState: "clear" | "resolving" | "yielded";
}

export const FLEET_ROBOTS: RobotInfo[] = [
  {
    id: "amr-01",
    name: "AMR-01",
    code: "FLEET // UNIT-01",
    battery: 94,
    batteryState: "optimal",
    status: "In Transit",
    currentTask: "Aisle C4 Pallet Transfer",
    origin: "Inbound Dock 1",
    destination: "Rack Zone C-04",
    currentCoord: { x: 22, y: 30 },
    targetCoord: { x: 22, y: 78 },
    pathWaypoints: [
      { x: 22, y: 30 },
      { x: 22, y: 50 },
      { x: 22, y: 78 },
    ],
    activeRoute: "Dock-1 → Corridor-A → Rack-C04",
    headingDeg: 90,
    speed: "1.2 m/s",
    payload: "Loaded (140 kg)",
    role: "Heavy Pallet Mover",
    edgeCore: "Local Node: ROS2 / FastDDS #1",
    conflictState: "clear",
  },
  {
    id: "amr-02",
    name: "AMR-02",
    code: "FLEET // UNIT-02",
    battery: 88,
    batteryState: "optimal",
    status: "Yielding",
    currentTask: "Zone B Dynamic Rerouting",
    origin: "Storage Bay B-02",
    destination: "Sortation Loop 3",
    currentCoord: { x: 48, y: 46 },
    targetCoord: { x: 80, y: 46 },
    pathWaypoints: [
      { x: 48, y: 46 },
      { x: 48, y: 62 },
      { x: 74, y: 62 },
      { x: 80, y: 46 },
    ],
    activeRoute: "Bay-B2 → Bypass-South → Sortation-3",
    headingDeg: 180,
    speed: "0.0 m/s (Yielded)",
    payload: "Loaded (85 kg)",
    role: "Tote Carrier",
    edgeCore: "Local Node: ROS2 / FastDDS #2",
    conflictState: "yielded",
  },
  {
    id: "amr-03",
    name: "AMR-03",
    code: "FLEET // UNIT-03",
    battery: 76,
    batteryState: "nominal",
    status: "In Transit",
    currentTask: "Aisle D1 Staging Dispatch",
    origin: "Storage Zone D",
    destination: "Outbound Bay 2",
    currentCoord: { x: 72, y: 26 },
    targetCoord: { x: 72, y: 84 },
    pathWaypoints: [
      { x: 72, y: 26 },
      { x: 72, y: 55 },
      { x: 72, y: 84 },
    ],
    activeRoute: "Storage-D → Central Trunk → Outbound-2",
    headingDeg: 90,
    speed: "1.1 m/s",
    payload: "Empty (Available)",
    role: "High-Speed Shuttle",
    edgeCore: "Local Node: ROS2 / FastDDS #3",
    conflictState: "clear",
  },
  {
    id: "amr-04",
    name: "AMR-04",
    code: "FLEET // UNIT-04",
    battery: 82,
    batteryState: "optimal",
    status: "Navigating",
    currentTask: "Cross-Docking Transit",
    origin: "Inbound Dock 2",
    destination: "Staging Zone A",
    currentCoord: { x: 48, y: 34 },
    targetCoord: { x: 48, y: 72 },
    pathWaypoints: [
      { x: 48, y: 34 },
      { x: 48, y: 46 },
      { x: 48, y: 72 },
    ],
    activeRoute: "Dock-2 → Priority Cross IX-04 → Staging-A",
    headingDeg: 90,
    speed: "0.9 m/s",
    payload: "Loaded (210 kg)",
    role: "Heavy Pallet Mover",
    edgeCore: "Local Node: ROS2 / FastDDS #4",
    conflictState: "resolving",
  },
  {
    id: "amr-05",
    name: "AMR-05",
    code: "FLEET // UNIT-05",
    battery: 91,
    batteryState: "optimal",
    status: "Approaching",
    currentTask: "Zone E Inventory Verification",
    origin: "Sortation Hub 1",
    destination: "Rack Zone E-03",
    currentCoord: { x: 62, y: 76 },
    targetCoord: { x: 38, y: 76 },
    pathWaypoints: [
      { x: 62, y: 76 },
      { x: 48, y: 76 },
      { x: 38, y: 76 },
    ],
    activeRoute: "Sort-1 → Aisle-E Crossway → Rack-E03",
    headingDeg: 270,
    speed: "1.3 m/s",
    payload: "Empty (Scanning)",
    role: "Inventory Scanner AMR",
    edgeCore: "Local Node: ROS2 / FastDDS #5",
    conflictState: "clear",
  },
];

export interface SimulationEvent {
  id: string;
  time: string;
  type: "reroute" | "conflict" | "yield" | "dds" | "milestone";
  robotId: string;
  message: string;
  severity: "info" | "warning" | "success";
}

export const SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: "evt-01",
    time: "T+14:02.4",
    type: "reroute",
    robotId: "AMR-02",
    message: "AMR-02 route dynamically updated via D* Lite: avoidance path engaged around obstructed Aisle B-2",
    severity: "info",
  },
  {
    id: "evt-02",
    time: "T+14:01.8",
    type: "conflict",
    robotId: "AMR-02 & AMR-04",
    message: "Path conflict detected at Intersection IX-04 between AMR-02 & AMR-04",
    severity: "warning",
  },
  {
    id: "evt-03",
    time: "T+14:01.1",
    type: "yield",
    robotId: "AMR-02",
    message: "AMR-02 waiting for intersection: yielding right-of-way to higher-priority payload on AMR-04",
    severity: "warning",
  },
  {
    id: "evt-04",
    time: "T+13:59.6",
    type: "dds",
    robotId: "Fleet Mesh",
    message: "Fast DDS peer state exchange synchronized across all 5 active AMR nodes",
    severity: "success",
  },
  {
    id: "evt-05",
    time: "T+13:58.2",
    type: "milestone",
    robotId: "AMR-01",
    message: "AMR-01 cleared Waypoint WP-03 in Corridor-A; continuing along planned trajectory to Rack-C04",
    severity: "info",
  },
];
