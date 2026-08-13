import { motion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaXTwitter,
} from 'react-icons/fa6'
import { FiArrowUpRight, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import {
  RiArrowRightUpLine,
  RiBracesLine,
  RiCodeSSlashLine,
  RiCloudLine,
  RiDatabase2Line,
  RiGithubLine,
  RiGitBranchLine,
  RiRadarLine,
  RiServerLine,
  RiSparklingLine,
  RiToolsLine,
} from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'
import { cardHover, fadeUp, stagger } from '../animations/variants'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { Reveal } from '../components/Reveal'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { SectionHeading } from '../components/SectionHeading'
import { siteData } from '../utils/siteData'

const skillIcons = {
  code: RiCodeSSlashLine,
  react: FaReact,
  server: RiServerLine,
  database: RiDatabase2Line,
  cloud: RiCloudLine,
  tool: RiToolsLine,
}

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  dribbble: FaDribbble,
}

const experienceIcons = {
  spark: RiSparklingLine,
  arrow: RiArrowRightUpLine,
  globe: TbWorld,
}

function SocialIconLink({ link }) {
  const Icon = socialIcons[link.icon] ?? FaGithub

  return (
    <motion.a
      className="social-link"
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.label}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <Icon />
    </motion.a>
  )
}

function SkillGroup({ group, delay }) {
  const Icon = skillIcons[group.icon] ?? RiBracesLine

  return (
    <Reveal className="skill-card" delay={delay}>
      <div className="skill-card-header">
        <span className="skill-card-icon">
          <Icon />
        </span>
        <h3>{group.category}</h3>
      </div>
      <div className="skill-pill-row">
        {group.items.map((item) => (
          <motion.span
            key={item}
            className="skill-pill"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </Reveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className="project-card-shell" delay={index * 0.08}>
      <motion.article className="project-card" variants={cardHover} initial="rest" whileHover="hover">
        <div className="project-image-wrap">
          <motion.img
            src={project.image}
            alt={project.title}
            className="project-image"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        <div className="project-content">
          <div className="project-meta-row">
            <span className="project-kicker">Selected Work</span>
            <span className="project-year">0{index + 1}</span>
          </div>
          <h3>{project.title} <span className="status">{project.status}</span></h3>
          <p>{project.description}</p>
          <div className="chip-row">
            {project.tech.map((tech) => (
              <span className="project-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
              GitHub <RiGithubLine />
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

function RepoCard({ repo }) {
  return (
    <Reveal className="repo-card">
      <div className="repo-card-top">
        <div>
          <p className="repo-name">{repo.name}</p>
          <p className="repo-meta">{repo.meta}</p>
        </div>
        <RiGitBranchLine className="repo-icon" />
      </div>
      <div className="repo-stats">
        <span>★ {repo.stars}</span>
        <span>⑂ {repo.forks}</span>
      </div>
    </Reveal>
  )
}

function FloatingField({ label, name, type = 'text', multiline = false, value, onChange }) {
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div className="floating-field">
      <Tag
        id={name}
        name={name}
        className="floating-input"
        type={multiline ? undefined : type}
        rows={multiline ? 5 : undefined}
        placeholder=" "
        value={value}
        onChange={onChange}
        aria-label={label}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export function HeroSection({ onDownloadResume, hideScrollIndicator }) {
  return (
    <section id="home" className="page-section hero-section">
      <div className="container hero-grid">
        <Reveal className="hero-copy" delay={0.08}>
          <p className="section-eyebrow">Software engineer portfolio</p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
            I build premium digital products that feel calm, sharp, and effortless.
          </motion.h1>
          <motion.p className="hero-summary" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.08 }}>
            {siteData.summary}
          </motion.p>

          <motion.div className="hero-actions" variants={stagger} initial="hidden" animate="visible">
            <motion.button
              type="button"
              className="primary-button"
              onClick={onDownloadResume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{siteData.resumeLabel}</span>
              <FiArrowUpRight />
            </motion.button>
            <motion.a className="secondary-button" href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              View Projects
            </motion.a>
          </motion.div>

          <div className="social-row" aria-label="Social links">
            {siteData.socialLinks.map((link) => (
              <SocialIconLink key={link.label} link={link} />
            ))}
          </div>

          <div className="hero-inline-stats">
            {siteData.heroStats.map((stat) => (
              <motion.article key={stat.label} className="hero-stat" variants={fadeUp} initial="hidden" animate="visible">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>

      <ScrollIndicator hidden={hideScrollIndicator} />
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="page-section section-alt">
      <div className="container section-grid about-grid">
        <div className="about-image-wrap">
          <Reveal className="about-image-shell">
            <motion.img
              src={siteData.aboutPortrait}
              alt="About illustration"
              className="about-image"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
            />
          </Reveal>
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="About"
            title="I design and ship with an engineering mindset and a product eye."
            description={siteData.about}
          />

          <Reveal className="about-paragraphs">
            <p>
              My work emphasizes clarity, hierarchy, and thoughtful motion. I like interfaces that feel expensive without being loud and systems that are easy to extend.
            </p>
            <p>
              I enjoy bridging design and code, which means I spend as much time on spacing, rhythm, and interaction detail as I do on architecture and performance.
            </p>
          </Reveal>

          <div className="about-stats">
            {siteData.aboutStats.map((stat, index) => (
              <Reveal className="stat-card" key={stat.label} delay={index * 0.06}>
                <span className="stat-label">{stat.label}</span>
                <strong className="stat-value">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </strong>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A modern stack shaped around shipping elegant products quickly."
          description="Each category is curated around the tools I use to build responsive interfaces, product flows, and durable frontend systems."
        />

        <div className="skills-grid">
          {siteData.skills.map((group, index) => (
            <SkillGroup key={group.category} group={group} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="page-section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects presented like product launches."
          description="Each card balances story, visuals, and technical depth with strong motion and clear calls to action."
        />

        <div className="projects-grid">
          {siteData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


export function ContactSection() {
  const formRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      window.location.href = `mailto:${siteData.email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
      )}`
      return
    }

    try {
      setStatus('sending')
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, emailConfig.publicKey)
      setStatus('sent')
      setFormState({ name: '', email: '', message: '' })
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="page-section section-alt">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Contact"
            title="A conversation about product, design, or engineering starts here."
            description="The form is wired for EmailJS, with a graceful mailto fallback if env keys are not configured."
          />

          <div className="contact-details">
            <Reveal className="contact-detail-card">
              <FiMail />
              <span>{siteData.email}</span>
            </Reveal>
            <Reveal className="contact-detail-card">
              <FiMapPin />
              <span>{siteData.location}</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FooterSection({ onBackToTop }) {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <p>© 2026 {siteData.name}.</p>
        <div className="footer-links">
          <a href="#home">Top</a>
          <button type="button" onClick={onBackToTop} className="back-to-top">
            Back to top <RiArrowRightUpLine />
          </button>
        </div>
      </div>
    </footer>
  )
}
