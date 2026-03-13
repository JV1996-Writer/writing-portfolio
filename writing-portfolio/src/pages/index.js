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
    title: 'DX Audit — Stripe, GitHub, Twilio, and SumoLogic',
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
          <div className={styles.codeCard}>
            <div className={styles.codeCardHeader}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.codeCardTitle}>shopflow.yaml</span>
            </div>
            <pre className={styles.codeBlock}>{`openapi: 3.0.0
info:
  title: ShopFlow API
  version: 1.0.0

paths:
  /products:
    get:
      summary: Get all products
      tags: [Products]
      responses:
        '200':
          description: Success ✓`}
            </pre>
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