import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Shopwave",
    text: "E-commerce platform with real-time inventory and secure checkout.",
    category: "Web Development",
    href: "/projects/shopwave",
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    title: "FitTrack",
    text: "Workout and nutrition tracking app for iOS and Android.",
    category: "Mobile Application",
    href: "/projects/fittrack",
    mobile: true,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "LogiTrack",
    text: "Cloud system that tracks vehicles and deliveries in real time.",
    category: "Cloud & DevOps",
    href: "/projects/logitrack",
    gradient: "from-slate-700 to-indigo-600",
  },
  {
    title: "HelpBot",
    text: "AI assistant that answers customer questions around the clock.",
    category: "AI & Automation",
    href: "/projects/helpbot",
    gradient: "from-fuchsia-500 to-indigo-500",
  },
];