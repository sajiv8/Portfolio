import aboutPortrait from '../assets/about-portrait.svg'
import certificate1 from '../assets/certificate-1.svg'
import certificate2 from '../assets/certificate-2.svg'
import certificate3 from '../assets/certificate-3.svg'
import certificate4 from '../assets/certificate-4.svg'
import heroPortrait from '../assets/hero-portrait.svg'
import project1 from '../assets/project-1.svg'
import project2 from '../assets/project-2.svg'
import project3 from '../assets/project-3.svg'

export const siteData = {
  name: 'Sajiv Rajh',
  title: 'Software Developer',
  location: 'Batticaloa, Sri Lanka',
  email: 'sajiv.23@cse.mrt.ac.lk',
  phone: '+94 77 072 9545',
  summary:
    'I build polished web products with strong systems thinking, clean interaction design, and a focus on performance, clarity, and long-term maintainability.',
  about:
    'I am a Computer Science Engineering student @University of Moratuwa who enjoys turning complex product ideas into simple, premium interfaces. My work blends design sensitivity, engineering discipline, and a strong bias toward smooth user experience.',
  resumeLabel: 'Download Resume',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/sajiv8', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sajivrajh/', icon: 'linkedin' },
  ],
  heroStats: [
    { label: 'Focus', value: 'Frontend systems' },
    { label: 'Delivery', value: 'Fast, thoughtful shipping' },
    { label: 'Approach', value: 'Minimal, premium interfaces' },
  ],
  aboutStats: [
    { label: 'Projects', value: 12, suffix: '+' },
    { label: 'Technologies', value: 18, suffix: '+' },
    { label: 'Years Learning', value: 4, suffix: '+' },
    { label: 'Open Source Contributions', value: 24, suffix: '+' },
  ],
  skills: [
    {
      category: 'Languages',
      icon: 'code',
      items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    },
    {
      category: 'Frontend',
      icon: 'react',
      items: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: 'server',
      items: ['Node.js', 'Express', 'REST APIs', 'Auth flows', 'Firebase'],
    },
    {
      category: 'Database',
      icon: 'database',
      items: ['PostgreSQL', 'Supabase', 'Redis',],
    },
    {
      category: 'Cloud',
      icon: 'cloud',
      items: ['Vercel', 'Cloudflare', 'AWS', 'Docker'],
    },
    {
      category: 'Tools',
      icon: 'tool',
      items: ['Git', 'Figma',  'Lenis','VsCode'],
    },
  ],
  projects: [
    {
      title: 'Northstar Commerce',
      description:
        'A premium commerce dashboard concept with analytics, order operations, and a refined content hierarchy for decision makers.',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Stripe'],
      live: '#contact',
      github: 'https://github.com/',
      image: project1,
    },
    {
      title: 'Linear Focus OS',
      description:
        'A productivity workspace prototype shaped around task clarity, zero-friction interactions, and motion that guides attention.',
      tech: ['Vite', 'TypeScript', 'GSAP', 'Firebase'],
      live: '#contact',
      github: 'https://github.com/',
      image: project2,
    },
    {
      title: 'Cloudcraft Portfolio',
      description:
        'An editorial developer portfolio system with scalable content sections, open source highlights, and a custom email workflow.',
      tech: ['React', 'Three.js', 'EmailJS', 'Lenis'],
      live: '#contact',
      github: 'https://github.com/',
      image: project3,
    },
  ],
  contributions: [
    'Frontend architecture reviews',
    'Accessibility and motion refinements',
    'UI polish for open source dashboards',
    'Documentation and onboarding Improvements',
  ],
  certificates: [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      image: certificate1,
    },
    {
      title: 'Frontend Performance',
      issuer: 'Web.dev',
      year: '2025',
      image: certificate2,
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      year: '2025',
      image: certificate3,
    },
    {
      title: 'Cloud Foundations',
      issuer: 'AWS Academy',
      year: '2025',
      image: certificate4,
    },
  ],
  heroPortrait,
  aboutPortrait,
}
