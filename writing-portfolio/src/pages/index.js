import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const skills = [
  { name: 'OpenAPI 3.0', icon: '📐' },
  { name: 'Docusaurus', icon: '🦕' },
  { name: 'Markdown / MDX', icon: '✍️' },
  { name: 'Swagger / Scalar', icon: '⚡' },
  { name: 'GitHub & Git', icon: '🐙' },
  { name: 'Ahrefs & SEO', icon: '📈' },
  { name: 'REST API Docs', icon: '🔗' },
  { name: 'YAML / JSON', icon: '🗂️' },
  { name: 'Figma & UI Design', icon: '🎨' },
  { name: 'Postman', icon: '📬' },
  { name: 'React / MDX', icon: '⚛️' },
  { name: 'Confluence / Jira', icon: '📋' },
  { name: 'Developer Experience', icon: '🎯' },
  { name: 'Canva / SnagIt', icon: '🖼️' },
];

const experience = [
  {
    role: 'Analyst / Software Engineer',
    company: 'Capgemini',
    via: '',
    period: 'Dec 2018 – Jul 2021',
    current: false,
  },
  {
    role: 'Technical Writer',
    company: 'Apty',
    via: '',
    period: 'Jul 2021 – Jan 2022',
    current: false,
  },
  {
    role: 'Technical Writer',
    company: 'nFerence',
    via: '',
    period: 'Jan 2022 – Mar 2023',
    current: false,
  },
  {
    role: 'Technical Writer',
    company: 'SumoLogic',
    via: 'via Check-n-Click',
    period: 'Mar 2023 – Present',
    current: true,
  },
];

const portfolio = [
  {
    title: 'ShopFlow API — Interactive Reference',
    description:
      'A complete OpenAPI 3.0 spec for an e-commerce API with 7 endpoints, 4 schemas, and API key authentication. Rendered interactively with Scalar — featuring live Try-it-out, multi-language code samples (Python, Node.js, Ruby, PHP, Shell), and auto-generated client libraries.',
    tags: ['OpenAPI 3.0', 'Scalar', 'Docusaurus', 'YAML'],
    links: [
      { label: '🌌 Interactive (Scalar)', to: '/api' },
      { label: '📄 Reference (Redoc)', to: '/api-reference' },
    ],
    badge: 'Portfolio Piece #1',
    soon: false,
  },
  {
    title: 'DX Audit — Stripe, GitHub, Twilio & SumoLogic',
    description:
      'A structured Developer Experience audit comparing four major API documentation platforms across 6 pillars — Onboarding, Navigation, Code Samples, Error Docs, Consistency, and Trust Signals. Includes actionable improvement proposals for SumoLogic.',
    tags: ['Developer Experience', 'DX Audit', 'API Docs', 'Documentation Engineering'],
    links: [
      { label: '📖 Read Article', to: '/docs/dx-audit' },
    ],
    badge: 'Portfolio Piece #2',
    soon: false,
  },
];

function HeroBanner() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>👋 Hi, I'm Jagadish</p>
          <Heading as="h1" className={styles.heroTitle}>
            Senior Technical Writer
            <span className={styles.heroAccent}> & Documentation Engineer</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            6+ years documenting APIs, developer tools, and SaaS products at companies like{' '}
            <strong>SumoLogic, nFerence, Apty</strong> and <strong>Capgemini</strong>.
            Currently specialising in OpenAPI specs, Docusaurus, and Developer Experience.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/api">
              View ShopFlow API Docs
            </Link>
            <Link className={styles.btnSecondary} to="/docs/intro">
              Browse Portfolio
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard} style={{ animationDelay: '0s' }}>
              <div className={styles.floatCardIcon}>
                <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#49A84C"/>
                  <path d="M8 16.5c0-1.1.4-2 1.1-2.7.7-.7 1.6-1 2.7-1h.8v1.6h-.8c-.7 0-1.2.2-1.6.7-.4.4-.6 1-.6 1.7v.8c0 .9-.3 1.6-.8 2.1-.5.5-1.2.8-2 .9v.1c.8.1 1.5.4 2 .9.5.5.8 1.2.8 2.1v.8c0 .7.2 1.2.6 1.7.4.4.9.7 1.6.7h.8V28h-.8c-1.1 0-2-.4-2.7-1.1C8.4 26.2 8 25.3 8 24.2v-.8c0-.7-.2-1.2-.5-1.6-.3-.4-.8-.6-1.5-.6V19.6c.7 0 1.2-.2 1.5-.6.3-.4.5-.9.5-1.6v-.9zm16 0v.8c0 .7.2 1.2.5 1.6.3.4.8.6 1.5.6v1.6c-.7 0-1.2.2-1.5.6-.3.4-.5.9-.5 1.6v.8c0 1.1-.4 2-1.1 2.7-.7.7-1.6 1.1-2.7 1.1h-.8v-1.6h.8c.7 0 1.2-.2 1.6-.7.4-.4.6-1 .6-1.7v-.8c0-.9.3-1.6.8-2.1.5-.5 1.2-.8 2-.9v-.1c-.8-.1-1.5-.4-2-.9-.5-.5-.8-1.2-.8-2.1v-.8c0-.7-.2-1.2-.6-1.7-.4-.4-.9-.7-1.6-.7h-.8V13h.8c1.1 0 2 .4 2.7 1.1.7.6 1.1 1.5 1.1 2.6z" fill="white"/>
                </svg>
              </div>
              <div className={styles.floatCardContent}>
                <div className={styles.floatCardTitle}>API Documentation</div>
                <div className={styles.floatCardDesc}>OpenAPI 3.0 · Scalar · Redoc</div>
              </div>
            </div>
            <div className={styles.floatCard} style={{ animationDelay: '0.2s' }}>
              <div className={styles.floatCardIcon} style={{ color: '#6366f1' }}>DX</div>
              <div className={styles.floatCardContent}>
                <div className={styles.floatCardTitle}>Developer Experience</div>
                <div className={styles.floatCardDesc}>Audits · Diátaxis · Vale Linting</div>
              </div>
            </div>
            <div className={styles.floatCard} style={{ animationDelay: '0.4s' }}>
              <div className={styles.floatCardIcon} style={{ color: '#10b981' }}>&lt;/&gt;</div>
              <div className={styles.floatCardContent}>
                <div className={styles.floatCardTitle}>Docs as Code</div>
                <div className={styles.floatCardDesc}>CI/CD · GitHub Actions · MDX</div>
              </div>
            </div>
            <div className={styles.floatCard} style={{ animationDelay: '0.6s' }}>
              <div className={styles.floatCardIcon} style={{ color: '#f59e0b' }}>☕</div>
              <div className={styles.floatCardContent}>
                <div className={styles.floatCardTitle}>Java & JavaScript</div>
                <div className={styles.floatCardDesc}>JS for Docs · SDK Docs · Guides</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>Where I've worked</p>
        <Heading as="h2" className={styles.sectionTitle}>Experience</Heading>
        <div className={styles.timeline}>
          {experience.map((exp) => (
            <div
              key={exp.company}
              className={clsx(styles.timelineItem, exp.current && styles.timelineItemCurrent)}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineTop}>
                  <span className={styles.timelineRole}>{exp.role}</span>
                  {exp.current && <span className={styles.currentBadge}>Current</span>}
                </div>
                <span className={styles.timelineCompany}>{exp.company}</span>
                {exp.via && <span className={styles.timelineVia}>{exp.via}</span>}
                <span className={styles.timelinePeriod}>{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.sectionLabel}>What I work with</p>
        <Heading as="h2" className={styles.sectionTitle}>Skills & Tools</Heading>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillChip}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>What I've built</p>
        <Heading as="h2" className={styles.sectionTitle}>Portfolio</Heading>
        <div className={styles.portfolioGrid}>
          {portfolio.map((item) => (
            <div
              key={item.title}
              className={clsx(styles.portfolioCard, item.soon && styles.portfolioCardSoon)}>
              <span
                className={styles.portfolioBadge}
                style={item.soon ? { background: '#334155' } : {}}>
                {item.badge}
              </span>
              <Heading as="h3" className={styles.portfolioTitle}>{item.title}</Heading>
              <p className={styles.portfolioDesc}>{item.description}</p>
              <div className={styles.portfolioTags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              {item.links.length > 0 && (
                <div className={styles.portfolioLinks}>
                  {item.links.map((link) => (
                    <Link key={link.label} className={styles.portfolioLink} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <Heading as="h2" className={styles.contactTitle}>Let's Work Together</Heading>
        <p className={styles.contactSub}>
          Open to Documentation Engineer and Senior Technical Writer roles — remote or hybrid.
        </p>
        <div className={styles.heroButtons}>
          <a
            className={styles.btnPrimary}
            href="https://www.linkedin.com/in/jagadisha-v-8b1848166"
            target="_blank"
            rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
          <a
            className={styles.btnSecondary}
            href="https://github.com/JV1996-Writer"
            target="_blank"
            rel="noopener noreferrer">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Jagadish V | Technical Writer & Documentation Engineer"
      description="Portfolio of Jagadish V — Senior Technical Writer with 6+ years at SumoLogic, nFerence, Apty and Capgemini. Specialising in OpenAPI, Docusaurus, and Developer Experience.">
      <HeroBanner />
      <main>
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </Layout>
  );
}