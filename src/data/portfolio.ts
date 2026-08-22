import type {
  Certification,
  EducationItem,
  Project,
  SkillGroup,
  SocialLink,
  TerminalCommand,
} from "@/types/portfolio";

export const profile = {
  name: "Clerin Balakrishnan",
  shortName: "Clerin",
  handle: "clerin-codes",
  role: "Software Engineering Undergraduate",
  location: "Malabe, Colombo, Sri Lanka",
  email: "clerinb15@gmail.com",
  phone: "+94 75 976 7730",
  phoneHref: "tel:+94759767730",
  summary:
    "BSc (Hons) in Information Technology undergraduate at SLIIT, focused on Software Engineering. I build full-stack web and mobile applications with practical, maintainable technologies.",
  introduction:
    "Full-stack and mobile developer working across React, Node.js, Flutter, Firebase, and the systems that connect them.",
  status: "BUILDING FULL-STACK AND MOBILE EXPERIENCES",
  languages: ["English", "Tamil"],
  strengths: [
    "Problem solving",
    "Debugging",
    "Team collaboration",
    "Communication",
    "Documentation",
    "Time management",
    "Project planning",
  ],
  community:
    "SLIIT Tech Club member participating in coding challenges, hackathons, workshops, and events focused on full-stack development and emerging technologies.",
  photo: "/clerin-portrait.png",
  resume: "/cv.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "#home", prefix: "{", suffix: "}" },
  { label: "About", href: "#about", prefix: "<", suffix: "/>" },
  { label: "Skills", href: "#skills", prefix: "[", suffix: "]" },
  { label: "Projects", href: "#projects", prefix: "(", suffix: ")" },
  { label: "Education", href: "#education", prefix: "::", suffix: "::" },
  { label: "Contact", href: "#contact", prefix: "@", suffix: "" },
] as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/clerin-codes", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/clerin-balakrishnan/",
    icon: "linkedin",
  },
  { label: "Instagram", href: "https://www.instagram.com/sheron_clerin/", icon: "instagram" },
  { label: "Facebook", href: "https://web.facebook.com/sheron.clerin", icon: "facebook" },
  { label: "Email", href: "mailto:clerinb15@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    command: "ls ./languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "Dart", "PHP"],
  },
  {
    title: "Frontend",
    command: "ls ./frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend + APIs",
    command: "ls ./backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Mobile",
    command: "ls ./mobile",
    items: ["Flutter", "Kotlin", "Android development"],
  },
  {
    title: "Data + Services",
    command: "ls ./services",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Testing + Dev Tools",
    command: "ls ./toolchain",
    items: ["Git", "GitHub", "Postman", "Selenium", "JUnit", "n8n"],
  },
  {
    title: "Design + Collaboration",
    command: "ls ./collaboration",
    items: ["Figma", "Photoshop", "Canva", "Jira", "Agile/Scrum", "Sprint planning", "Backlog grooming"],
  },
];

export const projects: Project[] = [
  {
    slug: "edulink-lanka",
    name: "EduLink Lanka",
    type: "School Management System",
    dates: "Oct 2025 — Dec 2025",
    category: "Web",
    problem: "School communities need a single workflow for academic, administrative, and payment information across distinct user roles.",
    solution: "A MERN platform with dedicated student, parent, teacher, and administrator dashboards.",
    features: ["Role-based authentication", "Results and timetables", "Notices and profiles", "Stripe payments", "OTP verification"],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "OTP authentication"],
    repository: "https://github.com/clerin-codes/EduLink-Lanka",
  },
  {
    slug: "safe-mother",
    name: "Safe Mother",
    type: "Maternal Health and Safety Mobile Application",
    dates: "Jul 2025 — Oct 2025",
    category: "Mobile",
    problem: "Expectant mothers need clearer, timely support when evaluating food safety and pregnancy-related risks.",
    solution: "A Flutter application combining food-safety scanning, guided information, and secure real-time data handling.",
    features: ["Food-safety scanning", "AI-assisted risk alerts", "Personalized guidance", "Real-time updates", "Secure Firebase data"],
    stack: ["Flutter", "Dart", "Firebase"],
    repository: null,
  },
  {
    slug: "eco-plast",
    name: "Eco-Plast Management System",
    type: "Waste Management Cashback and Reward System",
    dates: "Feb 2025 — May 2025",
    category: "Web",
    problem: "Plastic recycling programs need a transparent way to record submissions and turn participation into useful incentives.",
    solution: "A MERN waste-management platform built around a point-based cashback and rewards model.",
    features: ["Plastic submissions", "Reward calculations", "Cashback points", "User transactions"],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repository: "https://github.com/clerin-codes/PolyMart-EcoPlastMangementSys",
  },
  {
    slug: "cash-track",
    name: "Cash Track",
    type: "Personal Finance Tracker",
    dates: "Apr 2025 — May 2025",
    category: "Mobile",
    problem: "Personal budgets are difficult to manage when spending records and category insights are scattered.",
    solution: "A native Android tracker that keeps budgets, expenses, and visual summaries available offline.",
    features: ["Categorized expenses", "Budget progress", "Pie-chart summaries", "Persistent local storage", "JSON backup and restore"],
    stack: ["Kotlin", "Android", "SharedPreferences", "JSON"],
    repository: "https://github.com/clerin-codes/Personal-FinanceTrackerApp",
  },
  {
    slug: "student-support-desk",
    name: "Online Student Support Desk",
    type: "Student Support and Ticketing Web Application",
    dates: "Feb 2024 — Apr 2024",
    category: "Web",
    problem: "Students need a traceable channel for reporting issues and following responses without fragmented communication.",
    solution: "A responsive PHP/MySQL support platform centered on a clear ticket-management workflow.",
    features: ["Issue submission", "Ticket workflow", "Status tracking", "Responsive interface"],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repository: "https://github.com/clerin-codes/Student-Support-Desk",
  },
];

export const projectFilters = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB" },
  { id: "mobile", label: "MOBILE" },
  { id: "react.js", label: "REACT" },
  { id: "firebase", label: "FIREBASE" },
  { id: "kotlin", label: "KOTLIN" },
] as const;

export const education: EducationItem[] = [
  {
    institution: "SLIIT — Sri Lanka Institute of Information Technology",
    qualification: "BSc (Hons) in Information Technology undergraduate, focused on Software Engineering",
    dates: "2023 — Present",
    location: "Malabe, Sri Lanka",
  },
  {
    institution: "BT/Methodist Central College",
    qualification: "G.C.E. Advanced Level — Commerce Stream",
    dates: "2013 — 2022",
    location: "Batticaloa, Sri Lanka",
  },
];

export const certifications: Certification[] = [
  { name: "Introduction to Artificial Intelligence", issuer: "IBM" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google" },
  { name: "Crash Course on Python", issuer: "Google" },
];

export const terminalCommands: TerminalCommand[] = [
  { command: "help", description: "List available commands" },
  { command: "about", description: "Jump to about", section: "about" },
  { command: "skills", description: "Jump to technical skills", section: "skills" },
  { command: "projects", description: "Jump to featured projects", section: "projects" },
  { command: "education", description: "Jump to education", section: "education" },
  { command: "contact", description: "Jump to contact", section: "contact" },
  { command: "github", description: "Open GitHub profile", url: "https://github.com/clerin-codes" },
  { command: "linkedin", description: "Open LinkedIn profile", url: "https://www.linkedin.com/in/clerin-balakrishnan/" },
  { command: "clear", description: "Clear terminal output" },
];
