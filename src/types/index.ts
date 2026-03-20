export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  hasDropdown?: boolean;
}
export interface JobCardProps {
  title?: string;
  company?: string;
  location?: string;
  type?: string;
  postedAgo?: string;
  applicants?: number;
  logo?: string;
  isPromoted?: boolean;
  isSaved?: boolean;
  seeAllLabel?: string;
}

export interface StatItem {
  label: string;
  value: number;
  color: string;
}

