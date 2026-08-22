export type IconName = "github" | "linkedin" | "instagram" | "facebook" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface SkillGroup {
  title: string;
  command: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  type: string;
  dates: string;
  category: "Web" | "Mobile";
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  repository: string | null;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  dates: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  section?: string;
  url?: string;
}
