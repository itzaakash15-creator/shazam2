/**
 * Team SHAZAM — SIH26123 Smart Warehouse Fleet Simulation Data
 * 
 * Strict Warehouse Theme:
 * - 5 AMRs (AMR-01 to AMR-05)
 * - Exact KPI Simulation Values (Active Robots: 5, Active Tasks: 8, Robots Moving: 3, Conflicts: 1, Status: ONLINE)
 * - Specific Tasks, Batteries, and Coordination Events
 */

export interface RobotInfo {
  id: string;
  name: string;
  code: string;
  battery: number;
  status: "Moving" | "Waiting" | "Replanning" | "Charging" | "Task Assigned";
  statusColor: string;
  currentTask: string;
  taskType: "Pick" | "Deliver" | "Charge" | "Inspect";
  source: string;
  destination: string;
  currentCoord: { x: number; y: number };
  targetCoord: { x: number; y: number };
  pathWaypoints: { x: number; y: number }[];
  alternativeWaypoints?: { x: number; y: number }[];
  replannedWaypoints?: { x: number; y: number }[];
  headingDeg: number;
  speed: string;
  edgeNodeId: string;
  conflictState: "nominal" | "conflict_detected" | "waiting";
}

export const FLEET_KPI = {
  activeRobots: 5,
  activeTasks: 8,
  robotsMoving: 3,
  conflicts: 1,
  systemStatus: "ONLINE",
  simNote: "SIMULATED TELEMETRY VALUES",
};

export const FLEET_ROBOTS: RobotInfo[] = [
  {
    id: "amr-01",
    name: "AMR-01",
    code: "AMR-01",
    battery: 82,
    status: "Moving",
    statusColor: "#3FA66B", // Green
    currentTask: "Pick A-14",
    taskType: "Pick",
    source: "A-14",
    destination: "Dock-02",
    currentCoord: { x: 26, y: 35 },
    targetCoord: { x: 26, y: 80 },
    pathWaypoints: [
      { x: 26, y: 35 },
      { x: 26, y: 55 },
      { x: 26, y: 80 },
    ],
    headingDeg: 90,
    speed: "1.2 m/s",
    edgeNodeId: "EDGE-NODE-01",
    conflictState: "nominal",
  },
  {
    id: "amr-02",
    name: "AMR-02",
    code: "AMR-02",
    battery: 67,
    status: "Waiting",
    statusColor: "#F2A93B", // Amber
    currentTask: "Pick B-07",
    taskType: "Pick",
    source: "B-07",
    destination: "Sort-01",
    currentCoord: { x: 50, y: 48 },
    targetCoord: { x: 82, y: 48 },
    pathWaypoints: [
      { x: 50, y: 48 },
      { x: 50, y: 64 },
      { x: 75, y: 64 },
      { x: 82, y: 48 },
    ],
    alternativeWaypoints: [
      { x: 50, y: 48 },
      { x: 50, y: 32 },
      { x: 82, y: 32 },
    ],
    headingDeg: 180,
    speed: "0.0 m/s (Yielding)",
    edgeNodeId: "EDGE-NODE-02",
    conflictState: "conflict_detected",
  },
  {
    id: "amr-03",
    name: "AMR-03",
    code: "AMR-03",
    battery: 91,
    status: "Replanning",
    statusColor: "#2496D2", // Path Blue / Cyan
    currentTask: "Deliver C-21",
    taskType: "Deliver",
    source: "C-21",
    destination: "Dock-01",
    currentCoord: { x: 74, y: 30 },
    targetCoord: { x: 74, y: 82 },
    pathWaypoints: [
      { x: 74, y: 30 },
      { x: 74, y: 55 },
      { x: 74, y: 82 },
    ],
    replannedWaypoints: [
      { x: 74, y: 30 },
      { x: 62, y: 30 },
      { x: 62, y: 70 },
      { x: 74, y: 82 },
    ],
    headingDeg: 90,
    speed: "0.8 m/s",
    edgeNodeId: "EDGE-NODE-03",
    conflictState: "nominal",
  },
  {
    id: "amr-04",
    name: "AMR-04",
    code: "AMR-04",
    battery: 24,
    status: "Charging",
    statusColor: "#F2A93B", // Amber
    currentTask: "Return to Station",
    taskType: "Charge",
    source: "Corridor-4",
    destination: "Station-01",
    currentCoord: { x: 50, y: 22 },
    targetCoord: { x: 50, y: 15 },
    pathWaypoints: [
      { x: 50, y: 22 },
      { x: 50, y: 15 },
    ],
    headingDeg: 270,
    speed: "0.0 m/s (Docked)",
    edgeNodeId: "EDGE-NODE-04",
    conflictState: "nominal",
  },
  {
    id: "amr-05",
    name: "AMR-05",
    code: "AMR-05",
    battery: 76,
    status: "Moving",
    statusColor: "#3FA66B", // Green
    currentTask: "Deliver A-09",
    taskType: "Deliver",
    source: "A-09",
    destination: "Sort-02",
    currentCoord: { x: 65, y: 76 },
    targetCoord: { x: 38, y: 76 },
    pathWaypoints: [
      { x: 65, y: 76 },
      { x: 48, y: 76 },
      { x: 38, y: 76 },
    ],
    headingDeg: 270,
    speed: "1.1 m/s",
    edgeNodeId: "EDGE-NODE-05",
    conflictState: "nominal",
  },
];

export interface WarehouseTask {
  id: string;
  robot: string;
  task: string;
  source: string;
  destination: string;
  status: "In Progress" | "Waiting (Conflict)" | "Replanning" | "Charging" | "Completed";
  statusColor: string;
}

export const ACTIVE_TASKS: WarehouseTask[] = [
  {
    id: "TSK-101",
    robot: "AMR-01",
    task: "Pick",
    source: "A-14",
    destination: "Dock-02",
    status: "In Progress",
    statusColor: "#3FA66B",
  },
  {
    id: "TSK-102",
    robot: "AMR-02",
    task: "Pick",
    source: "B-07",
    destination: "Sort-01",
    status: "Waiting (Conflict)",
    statusColor: "#F2A93B",
  },
  {
    id: "TSK-103",
    robot: "AMR-03",
    task: "Deliver",
    source: "C-21",
    destination: "Dock-01",
    status: "Replanning",
    statusColor: "#2496D2",
  },
  {
    id: "TSK-104",
    robot: "AMR-04",
    task: "Charge",
    source: "Corridor-4",
    destination: "Station-01",
    status: "Charging",
    statusColor: "#F2A93B",
  },
  {
    id: "TSK-105",
    robot: "AMR-05",
    task: "Deliver",
    source: "A-09",
    destination: "Sort-02",
    status: "In Progress",
    statusColor: "#3FA66B",
  },
];

export interface CoordinationEvent {
  id: string;
  timestamp: string;
  text: string;
  robot: string;
  status: "warning" | "info" | "success";
}

export const COORDINATION_EVENTS: CoordinationEvent[] = [
  {
    id: "evt-01",
    timestamp: "10:42:19",
    text: "AMR-02 resumed route.",
    robot: "AMR-02",
    status: "success",
  },
  {
    id: "evt-02",
    timestamp: "10:42:18",
    text: "Intersection cleared.",
    robot: "Intersection IX-04",
    status: "info",
  },
  {
    id: "evt-03",
    timestamp: "10:42:16",
    text: "AMR-02 assigned temporary wait state.",
    robot: "AMR-02",
    status: "warning",
  },
  {
    id: "evt-04",
    timestamp: "10:42:15",
    text: "Potential path conflict detected.",
    robot: "AMR-02 & AMR-01",
    status: "warning",
  },
  {
    id: "evt-05",
    timestamp: "10:42:13",
    text: "AMR-02 approaching shared intersection.",
    robot: "AMR-02",
    status: "info",
  },
];
