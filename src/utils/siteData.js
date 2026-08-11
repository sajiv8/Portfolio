import aboutPortrait from '../assets/about-portrait.jpeg'
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
    { label: 'Projects', value: 5, suffix: '+' },
    { label: 'Technologies', value: 10, suffix: '+' },
    { label: 'Years Learning', value: 2, suffix: '+' },
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
      title: 'Multi-Tenant Resource Sharing Platform ',
      status: 'Ongoing',
      description:
        'Developing a microservices-based resource sharing platform for university communities that enables secure authentication, multi-tenant resource management, real-time booking and notifications, and a points-based borrowing system through a responsive web applicationA premium commerce dashboard concept with analytics, order operations, and a refined content hierarchy for decision makers.',
      tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'OAuth 2.0', 'WebSockets','Swagger/OpenAPI'],
      live: '#contact',
      github: 'https://github.comhttps://github.com/sajiv8/P_G20/',
      image: project1,
    },
    {
      title: 'Uni-Find – University Lost & Found Resource Sharing Platform',
      status: 'Ongoing',
      description: 
        'Developing a full-stack web application for university communities that enables users to report lost and ound items, securely authenticate using JWT, search and manage listings, and facilitate communication between owners and finders through a responsive and scalable architecture..',
      tech: ['React.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT Authentication', 'Docker', 'Swagger/OpenAPI'],
      live: '#contact',
      github: 'https://github.com/sajiv8/Uni_Find',
      image: project2,
    },
    {
      title: 'Industrial Predictive Maintenance System',
      status: 'Completed',
      description:
        'Developed a scalable IoT-based predictive maintenance system that collects industrial sensor data, performs edge processing, streams real-time data, predicts machine failures, and visualizes insights through a web dashboard.',
      tech: ['Python', 'SciPy', 'Apache Kafka', 'Next.js', 'Chart.js', 'Docker', 'Kubernetes', 'MLflow', 'Grafana', 'ELK Stack', 'Raspberry Pi/ESP32'],
      live: '#contact',
      github: 'https://github.com/PredictiveOps',
      image: project3,
    },
  ],
  contributions: [
    'Frontend architecture reviews',
    'Accessibility and motion refinements',
    'UI polish for open source dashboards',
    'Documentation and onboarding Improvements',
  ],
  heroPortrait,
  aboutPortrait,
}
