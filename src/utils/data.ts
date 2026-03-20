import type { NavItem, StatItem } from "../types";

export const navItems: NavItem[] = [
  {
    label: "Find Jobs",
    href: "#",
    active: true,
  },
  {
    label: "Top Companies",
    href: "#",
  },
  {
    label: "Job Tracker",
    href: "#",
  },
  {
    label: "My Calendar",
    href: "#",
  },
  {
    label: "Documents",
    href: "#",
  },
  {
    label: "Messages",
    href: "#",
  },
  {
    label: "Notifications",
    href: "#",
  },
];

export const stats: StatItem[] = [
  { label: "Profile Visitors", value: 140, color: "text-blue-600" },
  { label: "Resume Viewers", value: 20, color: "text-blue-600" },
  { label: "My Jobs", value: 88, color: "text-blue-600" },
];

export const locationOptions = [
  { label: "New York", value: "newyork" },
  { label: "Seattle", value: "seattle" },
  { label: "Remote", value: "remote" },
];

export const JobTypeData = [
  { label: "Part-Time", value: "part-time" },
  { label: "Full-Time", value: "full-time" },
  { label: "Contract", value: "contract" },
];
