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
  /** Live URLs — used by the card menu. Never displayed as text; leave '' if not live yet. */
  liveUrl?: string
  androidUrl?: string
  iosUrl?: string
}

/** One link option per store/site a project is live on. */
export type ProjectLink = { key: string; label: string; url: string; icon: IconName }
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
  experience: '1.8+ Years',
  availability: 'Open to new opportunities',
  tagline:
    'I build enterprise web apps, social platforms and mobile apps with React, React Native, TypeScript, Node.js and MongoDB — from clean, responsive UI to secure, scalable APIs.',
  about: [
    'I build fast, reliable and responsive applications — from pixel-perfect interfaces to scalable REST APIs.',
    'Full Stack Developer with 1.8+ years of experience in React, Next.js, React Native (Expo), TypeScript, Node.js, Express.js and MongoDB. I have built enterprise applications, social platforms, authentication systems and scalable REST APIs.',
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
  { icon: 'briefcase', title: '1.8+ Years', subtitle: 'Professional experience' },
  { icon: 'mobile', title: 'Web + Mobile', subtitle: 'React & React Native Expo' },
]

/* ------------------------------------------------------------------
 * THE TECH LIST
 * One source of truth — skills, the hero code window and every
 * project/experience tag use these names, so they never drift apart.
 * ---------------------------------------------------------------- */
export const tech = {
  mongodb: 'MongoDB',
  react: 'React',
  node: 'Node.js',
  express: 'Express.js',
  next: 'Next.js',
  vite: 'React Vite',
  expo: 'React Native (Expo)',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  postgresql: 'PostgreSQL',
} as const

export const codeSnippet: { fileName: string; variable: string; entries: [string, CodeValue][] } = {
  fileName: 'developer.ts',
  variable: 'developer',
  entries: [
    ['name', profile.name],
    ['role', profile.role],
    ['location', 'Jaipur, Rajasthan'],
    ['frontend', [tech.react, tech.next, tech.typescript]],
    ['backend', [tech.node, tech.express, tech.mongodb]],
    ['experience', '1.8+ years'],
    ['openToWork', true],
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'monitor',
    items: [tech.javascript, tech.typescript, tech.react, tech.next, tech.vite, tech.expo],
  },
  { title: 'Backend', icon: 'server', items: [tech.node, tech.express] },
  { title: 'Database', icon: 'database', items: [tech.mongodb, tech.postgresql] },
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
    tags: [tech.vite, tech.typescript, tech.node, tech.express, tech.mongodb, tech.expo],
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
    tech: [tech.vite, tech.typescript, tech.node, tech.express, tech.mongodb],
  },
  {
    title: 'Jain Social Group Online',
    category: 'Social Platform',
    icon: 'users',
    liveUrl: '',
    description:
      'Community platform for a social group with events, memberships and real-time chat. New users require Admin approval before they can log in.',
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
    tech: [tech.vite, tech.typescript, tech.node, tech.express, tech.mongodb],
  },
  {
    title: 'Jain Social Group Mobile App',
    category: 'Mobile App',
    icon: 'mobile',
    androidUrl: '',
    iosUrl: '',
    description:
      'Android and iOS app that gives group members mobile access to the platform, with events, announcements and real-time chat. Built with React Native Expo.',
    features: ['Member Access', 'Events & Announcements', 'Real-Time Chat', 'Push Notifications'],
    tech: [tech.expo],
  },
  {
    title: 'Hotel Management System',
    category: 'Enterprise',
    icon: 'calendar',
    liveUrl: '',
    description:
      'Responsive frontend screens and API integrations for managing hotel bookings, billing operations and customer authentication.',
    features: ['Booking Management', 'Billing Operations', 'Customer Authentication', 'Responsive Screens'],
    tech: [tech.react, tech.node, tech.express, tech.mongodb],
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
    title: 'Stock Management System',
    category: 'Enterprise',
    icon: 'layers',
    liveUrl: '',
    description:
      'Inventory and stock tracking system for managing products, stock movement and suppliers from a single dashboard.',
    features: [
      'Product Management',
      'Stock In / Stock Out',
      'Supplier Management',
      'Low Stock Alerts',
      'Reports & Dashboard',
    ],
    tech: [tech.react, tech.typescript, tech.node, tech.express, tech.mongodb],
  },
  {
    title: 'PDF Edit Tool',
    category: 'Web App',
    icon: 'fileText',
    liveUrl: '',
    description:
      'Browser-based PDF tool for editing and reorganising documents without installing any desktop software.',
    features: ['Merge PDFs', 'Split PDFs', 'Reorder Pages', 'Edit & Annotate', 'Download Output'],
    tech: [tech.react, tech.typescript, tech.node],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    icon: 'cart',
    liveUrl: '',
    description:
      'Online store with product listing, shopping cart, authentication and an admin dashboard, built with modern frontend technologies.',
    features: ['Product Listing', 'Shopping Cart', 'Authentication', 'Admin Dashboard'],
    tech: ['Frontend', 'Authentication', 'Admin Dashboard'],
  },
  {
    title: 'Marriage Certificate Translation App',
    category: 'Mobile App',
    icon: 'fileText',
    androidUrl: '',
    iosUrl: '',
    description:
      'Mobile app for ordering certified marriage certificate translations — upload the document, place an order and track it to delivery. Built with React Native Expo for Android and iOS.',
    features: ['Document Upload', 'Order Placement', 'Order Tracking', 'Notifications'],
    tech: [tech.expo],
  },
  {
    title: 'Business Translation App',
    category: 'Mobile App',
    icon: 'briefcase',
    androidUrl: '',
    iosUrl: '',
    description:
      'Mobile app for business and corporate document translation requests, with order history and delivery updates. Built with React Native Expo for Android and iOS.',
    features: ['Document Upload', 'Service Selection', 'Order History', 'Delivery Updates'],
    tech: [tech.expo],
  },
  {
    title: 'Muscat Assignment Help App',
    category: 'Mobile App',
    icon: 'graduation',
    androidUrl: '',
    iosUrl: '',
    description:
      'Assignment help app for students — submit assignment requirements, track progress and receive completed work on mobile. Built with React Native Expo for Android and iOS.',
    features: ['Assignment Submission', 'Requirement Details', 'Order Tracking', 'Notifications'],
    tech: [tech.expo],
  },
  {
    title: 'Ireland Translation App',
    category: 'Mobile App',
    icon: 'globe',
    androidUrl: '',
    iosUrl: '',
    description:
      'Certified document translation app for Ireland, covering order placement, status tracking and document delivery. Built with React Native Expo for Android and iOS.',
    features: ['Document Upload', 'Certified Translation Orders', 'Status Tracking', 'Notifications'],
    tech: [tech.expo],
  },
  {
    title: 'PDF Edit Tool Mobile App',
    category: 'Mobile App',
    icon: 'fileText',
    androidUrl: '',
    iosUrl: '',
    description:
      'Mobile version of the PDF tool — merge, split and reorganise PDF documents straight from a phone. Built with React Native Expo.',
    features: ['Merge PDFs', 'Split PDFs', 'Reorder Pages', 'Save & Share'],
    tech: [tech.expo],
  },
  {
    title: 'Custom Form Builder',
    category: 'Web App',
    icon: 'clipboard',
    liveUrl: '',
    description:
      'Platform where users build their own forms, publish and share them with a link, and review every submitted response from their dashboard.',
    features: [
      'Custom Form Creation',
      'Publish & Share Link',
      'Response Collection',
      'Response Dashboard',
      'User Authentication',
    ],
    tech: [tech.react, tech.typescript, tech.node, tech.express, tech.mongodb],
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

/** Builds the link options shown in a project's menu and details modal. */
export const getProjectLinks = (project: Project): ProjectLink[] => {
  const links: ProjectLink[] = []
  if (project.liveUrl) links.push({ key: 'live', label: 'Open Project', url: project.liveUrl, icon: 'external' })
  if (project.androidUrl)
    links.push({ key: 'android', label: 'Open on Play Store', url: project.androidUrl, icon: 'mobile' })
  if (project.iosUrl) links.push({ key: 'ios', label: 'Open on App Store', url: project.iosUrl, icon: 'mobile' })
  return links
}

/* Counters are derived from the data above, so they stay in sync. */
export const stats: Stat[] = [
  { value: '1.8+', label: 'Years of experience' },
  { value: `${projects.length}+`, label: 'Major projects' },
  { value: `${experiences.length}`, label: 'Companies' },
  { value: `${skillGroups.reduce((total, group) => total + group.items.length, 0)}+`, label: 'Technologies' },
]
