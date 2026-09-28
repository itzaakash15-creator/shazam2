/**
 * Team SHAZAM — SIH26123 Technology Stack & Architecture Data
 * 
 * Strict stack adherence:
 * - ROS 2
 * - Python
 * - Gazebo
 * - Fast DDS
 * - D* Lite
 * - React
 * - Raspberry Pi
 */

export interface TechItem {
  id: string;
  name: string;
  badge: string;
  category: "Middleware" | "Core Logic" | "Simulation" | "Protocol" | "Algorithm" | "Interface" | "Target Hardware";
  description: string;
  role: string;
  stage: "Implemented (Simulation)" | "Target Edge Direction";
  specs: string[];
}

export const TECHNOLOGY_STACK: TechItem[] = [
  {
    id: "ros2",
    name: "ROS 2",
    badge: "ROBOT MIDDLEWARE",
    category: "Middleware",
    description: "Robot middleware and communication framework.",
    role: "Provides peer-to-peer node architecture, lifecycle management, and hardware abstraction for each AMR in the fleet.",
    stage: "Implemented (Simulation)",
    specs: ["Humble / Iron Compatible", "Decentralized Node Graphs", "Standardized Odometry & Twist"],
  },
  {
    id: "python",
    name: "Python",
    badge: "CORE ENGINE",
    category: "Core Logic",
    description: "Core development and coordination logic.",
    role: "Drives distributed decision logic, state machines, conflict arbitration heuristics, and edge coordination nodes.",
    stage: "Implemented (Simulation)",
    specs: ["rclpy ROS2 Client Library", "Asynchronous Event Dispatch", "Modular State Machines"],
  },
  {
    id: "gazebo",
    name: "Gazebo",
    badge: "SIMULATION ENVIRONMENT",
    category: "Simulation",
    description: "Simulation environment for the AMR fleet.",
    role: "Simulates physics, kinematics, simulated sensors, and multi-robot navigation within a realistic smart warehouse facility.",
    stage: "Implemented (Simulation)",
    specs: ["Multi-Robot Warehouse World", "Differential Drive Kinematics", "Simulated Collision Dynamics"],
  },
  {
    id: "fast-dds",
    name: "Fast DDS",
    badge: "DDS MIDDLEWARE",
    category: "Protocol",
    description: "Communication middleware supporting ROS 2 communication.",
    role: "Facilitates peer-to-peer data distribution and lightweight message discovery between robots without a central server bottleneck.",
    stage: "Implemented (Simulation)",
    specs: ["Decentralized Discovery", "Configurable QoS Profiles", "Low-Overhead UDP Multicast/Unicast"],
  },
  {
    id: "d-star-lite",
    name: "D* Lite",
    badge: "PATH PLANNING ALGORITHM",
    category: "Algorithm",
    description: "Dynamic path planning and replanning.",
    role: "Incrementally recalculates optimal obstacle-free trajectories from current robot positions when unexpected obstacles or congestion occur.",
    stage: "Implemented (Simulation)",
    specs: ["Incremental Graph Search", "Dynamic Cost Updates", "No Complete Graph Recomputation"],
  },
  {
    id: "react",
    name: "React",
    badge: "MONITORING UI",
    category: "Interface",
    description: "Web-based monitoring/dashboard interface.",
    role: "Provides warehouse supervisors with real-time fleet telemetry, active routes, conflict alerts, and simulation health diagnostics.",
    stage: "Implemented (Simulation)",
    specs: ["Component Architecture", "Real-Time Telemetry State", "Industrial High-Contrast Layout"],
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    badge: "TARGET EDGE PLATFORM",
    category: "Target Hardware",
    description: "Target edge-computing platform for the physical deployment direction.",
    role: "Planned on-robot SBC compute node hosting local ROS 2 instances, peer Fast DDS messaging, and local path execution.",
    stage: "Target Edge Direction",
    specs: ["Quad-Core ARM Edge Compute", "Planned Physical Deployment", "Decentralized On-Board Processing"],
  },
];

export interface SystemFlowStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
  badge: string;
}

export const SYSTEM_FLOW_STEPS: SystemFlowStep[] = [
  {
    step: "01",
    title: "SENSE",
    summary: "Robot observes its local environment and state.",
    detail: "Onboard simulated sensors gather proximity data, current coordinate position, wheel odometry, and immediate aisle clearance.",
    badge: "LOCAL PERCEPTION",
  },
  {
    step: "02",
    title: "SHARE",
    summary: "Relevant position/task/navigation information is communicated across the fleet.",
    detail: "AMRs broadcast lightweight state packets (position, heading, planned corridor waypoint, task urgency) to neighbor robots via Fast DDS.",
    badge: "PEER BROADCAST",
  },
  {
    step: "03",
    title: "DECIDE",
    summary: "Local coordination logic evaluates the current situation.",
    detail: "Each robot’s edge node compares incoming neighbor trajectories against its own path to identify spatial or temporal intersection overlaps.",
    badge: "EDGE ARBITRATION",
  },
  {
    step: "04",
    title: "PLAN",
    summary: "D* Lite supports dynamic path replanning.",
    detail: "Dynamic graph costs are assigned to congested or reserved warehouse intersections, enabling D* Lite to calculate efficient alternate trajectories.",
    badge: "GRAPH TRAJECTORY",
  },
  {
    step: "05",
    title: "COORDINATE",
    summary: "Robots adapt their movement based on fleet conditions.",
    detail: "Coordinated priority rules determine right-of-way (e.g. loaded AMR maintains speed while empty transit AMR yields before intersection IX).",
    badge: "FLEET HARMONY",
  },
  {
    step: "06",
    title: "MOVE",
    summary: "The robot executes the selected path.",
    detail: "Velocity commands (Twist) are sent to simulated wheel actuators, advancing along the coordinated collision-free corridor.",
    badge: "ACTUATION",
  },
  {
    step: "07",
    title: "REPLAN",
    summary: "When conditions change, the system can recalculate an appropriate route.",
    detail: "If an aisle becomes temporarily blocked by another unit or human operator, D* Lite incrementally replans without recalculating from scratch.",
    badge: "DYNAMIC ADAPTATION",
  },
];
