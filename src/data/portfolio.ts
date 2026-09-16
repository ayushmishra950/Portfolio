import type { IconName } from '../components/Icon'

/* ------------------------------------------------------------------
 * PORTFOLIO CONTENT
 * Every section of the site renders from this file.
 * Add, edit or remove items in the arrays below — grids, lists,
 * filters, counters and navigation adapt automatically.
 * ---------------------------------------------------------------- */

export type NavItem = { id: string; label: string }
export type SocialLink = { label: string; url: string; icon: IconName; handle: string }
export type Highlight = { icon: IconName; title: string; subtitle: string }
export type Stat = { value: string; label: string }
export type SkillGroup = { title: string; icon: IconName; items: string[] }
export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  current?: boolean
  points: string[]
  tags?: string[]
}
export type Project = {
  title: string
  category: string
  icon: IconName
  description: string
  features: string[]
  tech: string[]
  status?: string
  /** Live project URL — used by "Open Project". Never displayed; leave '' if not live yet. */
  liveUrl?: string
}
export type Education = {
  degree: string
  institution: string
  period?: string
  description?: string
}
export type CodeValue = string | string[] | boolean | number

export const profile = {
  name: 'Aayush Mishra',
  initials: 'AM',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'React & React Native Developer', 'Node.js API Developer'],
  experience: '1.5+ Years',
  availability: 'Open to new opportunities',
  tagline:
    'I build enterprise web apps, social platforms and mobile apps with React, React Native, TypeScript, Node.js and MongoDB — from clean, responsive UI to secure, scalable APIs.',
  about: [
    'I build fast, reliable and responsive applications — from pixel-perfect interfaces to scalable REST APIs.',
    'Full Stack Developer with 1.5+ years of experience in React.js, React Native (Expo), TypeScript, Node.js, Express.js and MongoDB. I have built enterprise applications, social platforms, authentication systems and scalable REST APIs.',
    'Currently at Infonic Solution Pvt. Ltd., I am building a complete Office Management System and its mobile version with React Native Expo. I enjoy owning features end-to-end — database design, backend APIs, role-based security and responsive UI.',
  ],
  email: 'mishra1234aayush@gmail.com',
  phone: '+91 9509279769',
  location: 'Bindayaka, Jaipur, Rajasthan',
  resumeUrl: '/Aayush_Mishra_Resume.pdf',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/ayushmishra950',
    icon: 'github',
    handle: 'github.com/ayushmishra950',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/ayush-mishra-4u',
    icon: 'linkedin',
    handle: 'linkedin.com/in/ayush-mishra-4u',
  },
  {
    label: 'Email',
    url: `mailto:${profile.email}`,
    icon: 'mail',
    handle: profile.email,
  },
]

export const heroHighlights: Highlight[] = [
  { icon: 'briefcase', title: '1.5+ Years', subtitle: 'Professional experience' },
  { icon: 'mobile', title: 'Web + Mobile', subtitle: 'React & React Native Expo' },
]

export const codeSnippet: { fileName: string; variable: string; entries: [string, CodeValue][] } = {
  fileName: 'developer.ts',
  variable: 'developer',
  entries: [
    ['name', profile.name],
    ['role', profile.role],
    ['location', 'Jaipur, Rajasthan'],
    ['frontend', ['React', 'TypeScript', 'Expo']],
    ['backend', ['Node.js', 'Express', 'MongoDB']],
    ['experience', '1.5+ years'],
    ['openToWork', true],
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'monitor',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'React Vite', 'React Native Expo'],
  },
  { title: 'Backend', icon: 'server', items: ['Node.js', 'Express.js'] },
  { title: 'Database', icon: 'database', items: ['MongoDB', 'MySQL'] },
  {
    title: 'Authentication',
    icon: 'shield',
    items: ['JWT', 'OTP Verification', 'Role Based Access Control'],
  },
  { title: 'APIs & Real-Time', icon: 'bolt', items: ['REST APIs', 'GraphQL APIs', 'Socket.io'] },
  { title: 'Tools', icon: 'tools', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Infonic Solution Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    current: true,
    points: [
      'Developed a complete Office Management System using React Vite, TypeScript, Node.js, Express.js and MongoDB.',
      'Implemented Attendance, Leave, Payroll, Expense and Task Management modules.',
      'Built Admin, Manager and User role management system with JWT authentication.',
      'Developed project assignment and notification workflow between Admins, Managers and Users.',
      'Built responsive UI and scalable backend APIs.',
      'Currently developing the mobile application version using React Native Expo.',
    ],
    tags: ['React Vite', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'React Native Expo'],
  },
  {
    role: 'Full Stack Developer',
    company: 'ATS Global Tech',
    period: 'Jan 2025 – Dec 2025',
    points: [
      'Worked on a Hotel Management System (HMS).',
      'Responsible for frontend design and backend API integration.',
      'Developed booking, billing and customer authentication modules.',
      'Collaborated with development teams to improve usability and performance.',
    ],
    tags: ['Frontend Design', 'API Integration', 'Authentication', 'Booking & Billing'],
  },
]

export const projects: Project[] = [
  {
    title: 'Office Management System',
    category: 'Enterprise',
    icon: 'building',
    liveUrl: '',
    description:
      'Enterprise-grade office management platform that brings attendance, payroll, leave, expenses and task workflows into one role-based system.',
    features: [
      'Attendance Management',
      'Payroll',
      'Leave Management',
      'Expense Tracking',
      'Task Assignment Workflow',
      'Notifications',
      'Role-Based Access Control',
    ],
    tech: ['React Vite', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Club Social Media Platform',
    category: 'Social Platform',
    icon: 'users',
    liveUrl: '',
    description:
      'Community platform for clubs with events, memberships and real-time chat. New users require Admin approval before they can log in.',
    features: [
      'Events',
      'Membership Management',
      'Friend Circle System',
      'Posts & Announcements',
      'Business Directory',
      'Suggestions',
      'Real-Time Chat',
      'Admin Approval Login',
    ],
    tech: ['React Vite', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
  },
  {
    title: 'Club Mobile Application',
    category: 'Mobile App',
    icon: 'mobile',
    liveUrl: '',
    status: 'In Progress',
    description:
      'Android and iOS application that gives club members mobile access to the platform, with real-time communication features.',
    features: ['Android App', 'iOS App', 'Member Access', 'Real-Time Communication'],
    tech: ['React Native Expo', 'Android', 'iOS'],
  },
  {
    title: 'Hotel Management System',
    category: 'Enterprise',
    icon: 'calendar',
    liveUrl: '',
    description:
      'Responsive frontend screens and API integrations for managing hotel bookings, billing operations and customer authentication.',
    features: ['Booking Management', 'Billing Operations', 'Customer Authentication', 'Responsive Screens'],
    tech: ['React.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Social Media Platform',
    category: 'Social Platform',
    icon: 'send',
    liveUrl: '',
    description:
      'Social media application with user authentication, posts, follow / unfollow functionality and real-time chat.',
    features: ['User Authentication', 'Posts', 'Follow / Unfollow', 'Real-Time Chat'],
    tech: ['GraphQL', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'E-Commerce Website',
    category: 'Web App',
    icon: 'cart',
    liveUrl: '',
    description:
      'Online store with product listing, shopping cart, authentication and an admin dashboard, built with modern frontend technologies.',
    features: ['Product Listing', 'Shopping Cart', 'Authentication', 'Admin Dashboard'],
    tech: ['Frontend', 'Authentication', 'Admin Dashboard'],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Karani University, Rajasthan',
  },
  {
    degree: 'Diploma in Full Stack Development',
    institution: 'TMS Computer Classes, Jaipur',
  },
]

export const strengths: string[] = [
  'Problem Solving',
  'Full Stack Development',
  'REST API Development',
  'Database Design',
  'Team Collaboration',
  'Responsive UI Development',
  'Debugging',
]

/* Counters are derived from the data above, so they stay in sync. */
export const stats: Stat[] = [
  { value: '1.5+', label: 'Years of experience' },
  { value: `${projects.length}+`, label: 'Major projects' },
  { value: `${experiences.length}`, label: 'Companies' },
  { value: `${skillGroups.reduce((total, group) => total + group.items.length, 0)}+`, label: 'Technologies' },
]
