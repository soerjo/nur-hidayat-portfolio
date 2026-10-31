'use client';

import { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Link2,
  Download,
  ExternalLink,
  CheckCircle,
  Code2,
  Server,
  Database,
  Layers,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Star,
  MessageSquare,
  Send,
  Menu,
  X,
  Globe,
  Activity,
  Shield,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  { value: '4+', label: 'Years Exp.' },
  { value: '6', label: 'Enterprise Roles' },
  { value: '90%+', label: 'Test Coverage' },
  { value: '10+', label: 'Production Apps' },
];

const EXPERIENCES = [
  {
    id: 'siloam',
    company: 'Siloam Hospitals Group',
    role: 'Frontend Developer / Fullstack Contributor',
    period: 'June 2024 – Present',
    location: 'Tangerang, Indonesia',
    type: 'Full-time',
    highlights: [
      'Conducted thorough code reviews ensuring high-quality deployments to dev & staging environments.',
      'Implemented and configured message brokers across all Inpatient Department services for My Siloam, enhancing communication & reliability.',
      'Led redevelopment of the My Siloam Inpatient Department application using Next.js (frontend) and Node.js (backend) for enhanced performance & UX.',
      'Resolved critical bugs in frontend services, especially print transaction sales orders.',
      'Achieved >90% SonarLint unit-test coverage on every task.',
    ],
    stack: ['Next.js', 'Node.js', 'TypeScript', 'Message Brokers', 'Jest', 'SonarLint', 'PostgreSQL'],
    accent: 'cyan',
  },
  {
    id: 'kawanlama',
    company: 'PT Kawan Lama Sejahtera',
    role: 'Frontend Developer',
    period: 'January 2023 – June 2024',
    location: 'Jakarta Barat, Indonesia',
    type: 'Full-time',
    highlights: [
      'Built service ticket dashboard with daily, weekly, monthly, and yearly analytics.',
      'Designed field ticket workflow & status state machine for field engineers.',
      'Implemented check-in / check-out employee performance monitoring feature.',
      'Developed ERC (Estimated Repair Cost) calculation module.',
      'Integrated Google Chat for problematic item telemetry & alerts.',
    ],
    stack: ['Vue.js 3', 'TypeScript', 'Vuex', 'Google Chat API', 'REST APIs', 'Tailwind CSS'],
    accent: 'emerald',
  },
  {
    id: 'folkatech',
    company: 'PT Folkatech',
    role: 'Frontend Developer',
    period: 'June 2022 – January 2023',
    location: 'Bandung, Indonesia',
    type: 'Full-time',
    highlights: [
      'TOMPS.ID: Built CMS project details management, analytics reporting (weekly/monthly/yearly), executive dashboards, and master data modules.',
      'INDODAX: Developed Social Feeds CMS and internal system telemetry monitoring dashboard.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'REST APIs', 'Chart.js'],
    accent: 'violet',
  },
  {
    id: 'dinaskehutanan',
    company: 'Dinas Kehutanan Pemprov Jabar',
    role: 'Web Developer',
    period: 'June 2020 – June 2022',
    location: 'Bandung, Indonesia',
    type: 'Contract',
    highlights: [
      'Built the West Java Tree Planting & Maintaining Movement platform (Pergub 522.4/17/Rek).',
      'Created a public tree seed monitoring portal with interactive maps using LeafletJS.',
      'Developed seed stock and plantation metrics dashboard integrated with Google Analytics.',
    ],
    stack: ['Laravel', 'Vue.js', 'CodeIgniter', 'LeafletJS', 'PostgreSQL', 'Google Analytics'],
    accent: 'lime',
  },
  {
    id: 'jaskipin',
    company: 'PT Jaskipin Express',
    role: 'Fullstack Developer',
    period: 'January 2020 – June 2022',
    location: 'Cirebon, Indonesia',
    type: 'Full-time',
    highlights: [
      'Architected the logistics web platform and led Nuxt.js implementation.',
      'Integrated external services: Midtrans payment gateway, logistics tracking, shipping APIs.',
      'Delivered performance optimization and responsive web app.',
    ],
    stack: ['Nuxt.js', 'Node.js', 'Vue.js', 'MongoDB', 'PostgreSQL', 'Midtrans'],
    accent: 'amber',
  },
  {
    id: 'myshope',
    company: 'My Shope Agency',
    role: 'Junior Web Designer / Slicer',
    period: 'October 2019 – December 2019',
    location: 'Cirebon, Indonesia',
    type: 'Contract',
    highlights: [
      'Design slicing & responsive Shopify storefront implementation.',
      'Converted high-fidelity Figma designs into pixel-perfect HTML/CSS layouts.',
    ],
    stack: ['HTML', 'CSS', 'Shopify', 'JavaScript'],
    accent: 'orange',
  },
];

const PROJECTS = [
  {
    title: 'My Siloam Inpatient Dept. App',
    description:
      'Full redevelopment of the hospital inpatient module with Next.js frontend, Node.js backend, and message broker architecture — delivering >90% SonarLint test coverage.',
    stack: ['Next.js', 'Node.js', 'Message Brokers', 'TypeScript', 'Jest'],
    icon: Activity,
    accent: 'cyan',
    metrics: ['>90% test coverage', 'Real-time broker events', 'Multi-service architecture'],
  },
  {
    title: 'Kawan Lama Service & Field Ticketing',
    description:
      'Enterprise service ticket dashboard with field workflow state machine, employee check-in/out, ERC module, and automated Google Chat alerts.',
    stack: ['Vue.js 3', 'TypeScript', 'Google Chat API', 'REST APIs'],
    icon: Shield,
    accent: 'emerald',
    metrics: ['Daily/weekly/yearly analytics', 'Google Chat bot integration', 'State machine workflow'],
  },
  {
    title: 'TOMPS.ID Enterprise Project CMS',
    description:
      'CMS and executive dashboard for project details management, multi-period analytics reporting, and master data administration for a large enterprise platform.',
    stack: ['Vue.js', 'Laravel', 'PostgreSQL', 'Chart.js'],
    icon: Layers,
    accent: 'violet',
    metrics: ['Executive dashboards', 'Multi-period reporting', 'Master data mgmt'],
  },
  {
    title: 'INDODAX Internal Monitoring',
    description:
      "Social Feeds CMS and internal system telemetry monitoring dashboard for one of Southeast Asia's largest crypto exchanges.",
    stack: ['Vue.js', 'TypeScript', 'REST APIs'],
    icon: Zap,
    accent: 'amber',
    metrics: ['Real-time telemetry', 'Social feeds CMS', 'Internal dashboard'],
  },
  {
    title: 'West Java Forestry GIS Platform',
    description:
      'Government platform for West Java tree planting & seed monitoring with interactive maps (LeafletJS), public portals, and analytics dashboards per Pergub 522.4/17/Rek.',
    stack: ['Laravel', 'CodeIgniter', 'LeafletJS', 'PostgreSQL', 'Google Analytics'],
    icon: Globe,
    accent: 'lime',
    metrics: ['Interactive GIS maps', 'Public & admin portals', 'Government regulation compliant'],
  },
  {
    title: 'Jaskipin Express Logistics Portal',
    description:
      'Full-stack logistics platform with Midtrans payment gateway, shipping API integrations, and responsive Nuxt.js frontend.',
    stack: ['Nuxt.js', 'Node.js', 'MongoDB', 'Midtrans', 'PostgreSQL'],
    icon: Server,
    accent: 'orange',
    metrics: ['Midtrans payment gateway', 'Logistics API integrations', 'Responsive PWA'],
  },
];

const SKILL_CATEGORIES = [
  {
    label: 'Frontend Mastery',
    icon: Code2,
    accent: 'cyan',
    skills: [
      { name: 'Next.js (App Router)', level: 95 },
      { name: 'Vue.js 2 & 3 / Nuxt.js', level: 92 },
      { name: 'React / TypeScript', level: 90 },
      { name: 'Tailwind CSS / Bootstrap', level: 90 },
      { name: 'HTML5 / CSS3 / Sass', level: 95 },
    ],
  },
  {
    label: 'Backend & Microservices',
    icon: Server,
    accent: 'emerald',
    skills: [
      { name: 'Node.js / Express / NestJS', level: 80 },
      { name: 'Laravel / CodeIgniter', level: 78 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'Message Brokers', level: 75 },
    ],
  },
  {
    label: 'Database & DevOps',
    icon: Database,
    accent: 'violet',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 82 },
      { name: 'MongoDB', level: 75 },
      { name: 'Git / Docker', level: 85 },
      { name: 'LeafletJS / Midtrans', level: 78 },
    ],
  },
  {
    label: 'Architecture & Testing',
    icon: Layers,
    accent: 'lime',
    skills: [
      { name: 'Jest / Vitest / SonarLint', level: 88 },
      { name: 'Agile / Scrum / SDLC', level: 90 },
      { name: 'Trello / Asana', level: 85 },
      { name: 'Resource Planning', level: 80 },
    ],
  },
];

// accent → tailwind color map (static so tree-shaking works)
const ACCENT_CLASSES: Record<string, { badge: string; bar: string; border: string; glow: string; text: string }> = {
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    bar: 'bg-cyan-400',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/10',
    text: 'text-cyan-400',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    bar: 'bg-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/10',
    text: 'text-emerald-400',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    bar: 'bg-violet-400',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/10',
    text: 'text-violet-400',
  },
  lime: {
    badge: 'bg-lime-500/10 text-lime-400 border-lime-500/20',
    bar: 'bg-lime-400',
    border: 'border-lime-500/30',
    glow: 'shadow-lime-500/10',
    text: 'text-lime-400',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    bar: 'bg-amber-400',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/10',
    text: 'text-amber-400',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    bar: 'bg-orange-400',
    border: 'border-orange-500/30',
    glow: 'shadow-orange-500/10',
    text: 'text-orange-400',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function StackPill({ label, accent }: { label: string; accent: string }) {
  const a = ACCENT_CLASSES[accent] ?? ACCENT_CLASSES.cyan;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${a.badge}`}>
      {label}
    </span>
  );
}

function SkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  const a = ACCENT_CLASSES[accent] ?? ACCENT_CLASSES.cyan;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className={`font-medium ${a.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div className={`h-full rounded-full ${a.bar} transition-all duration-700`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: (typeof EXPERIENCES)[number] }) {
  const [open, setOpen] = useState(false);
  const a = ACCENT_CLASSES[exp.accent] ?? ACCENT_CLASSES.cyan;
  return (
    <article
      className={`rounded-2xl border bg-white/3 backdrop-blur-sm p-6 transition-shadow hover:shadow-xl ${a.border} ${a.glow}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>{exp.type}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 text-xs">{exp.period}</span>
          </div>
          <h3 className="text-lg font-bold text-white leading-snug">{exp.company}</h3>
          <p className={`text-sm font-medium ${a.text}`}>{exp.role}</p>
          <div className="flex items-center gap-1 mt-1 text-slate-400 text-xs">
            <MapPin className="w-3 h-3" />
            {exp.location}
          </div>
        </div>
        <button
          aria-expanded={open}
          aria-label={open ? 'Collapse details' : 'Expand details'}
          className={`flex-shrink-0 p-2 rounded-xl border transition-colors ${a.border} hover:bg-white/5`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>
      </div>

      {/* Stack pills always visible */}
      <div className="flex flex-wrap gap-2 mt-4">
        {exp.stack.map((s) => (
          <StackPill key={s} accent={exp.accent} label={s} />
        ))}
      </div>

      {/* Collapsible highlights */}
      {open && (
        <ul className="mt-4 space-y-2">
          {exp.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-slate-300">
              <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${a.text}`} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const a = ACCENT_CLASSES[project.accent] ?? ACCENT_CLASSES.cyan;
  const Icon = project.icon;
  return (
    <article
      className={`rounded-2xl border bg-white/3 backdrop-blur-sm p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow ${a.border} ${a.glow}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.badge}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-white leading-snug mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
      </div>
      <ul className="space-y-1">
        {project.metrics.map((m) => (
          <li key={m} className="flex items-center gap-2 text-xs text-slate-300">
            <Star className={`w-3 h-3 flex-shrink-0 ${a.text}`} />
            {m}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((s) => (
          <StackPill key={s} accent={project.accent} label={s} />
        ))}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact form state type
// ─────────────────────────────────────────────────────────────────────────────

type FormState = { name: string; email: string; message: string };

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setSending(true);
    const { promise, resolve } = Promise.withResolvers<void>();
    setTimeout(resolve, 900);
    await promise;
    setSending(false);
    toast.success("Message sent! I'll get back to you shortly.");
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30">
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
        >
          {/* brand */}
          <a
            className="font-bold text-white tracking-tight flex items-center gap-2 text-sm sm:text-base"
            href="#hero"
            onClick={handleNavClick}
          >
            <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-black text-xs">
              NH
            </span>
            Nur Hidayat
          </a>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  href={href}
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
              download
              href="/cv-nur-hidayat.pdf"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            <button
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0b0f19]/95 backdrop-blur-xl px-4 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                href={href}
                onClick={handleNavClick}
              >
                {label}
              </a>
            ))}
            <a
              className="mt-2 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium"
              download
              href="/cv-nur-hidayat.pdf"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20" id="hero">
          {/* status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for high-impact roles
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6"
            id="hero-heading"
          >
            Senior Frontend Developer
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              building high-performance
            </span>
            <span className="block">web systems.</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
            Frontend developer with <strong className="text-white">4+ years of experience</strong> delivering enterprise
            products, innovative startups, and award-winning agency work — both remote and on-site.
          </p>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-10">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Cirebon, Jawa Barat · Remote Worldwide
          </div>

          {/* quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-emerald-400">
                  {value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-[#0b0f19] font-bold hover:bg-cyan-400 transition-colors text-sm"
              href="#experience"
              onClick={handleNavClick}
            >
              <Briefcase className="w-4 h-4" />
              View Experience
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
              download
              href="/cv-nur-hidayat.pdf"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-colors text-sm"
              href="https://wa.me/6289622814512"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 font-semibold hover:bg-white/10 transition-colors text-sm"
              href="mailto:hidayatnur1502@gmail.com"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="about-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="about"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="about-heading">
            About & Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Nur Hidayat</strong>, a Senior Frontend Developer based in
                Cirebon, Jawa Barat. Over 4+ years I&apos;ve shipped production-grade systems across hospital tech,
                e-commerce platforms, government GIS portals, fintech exchanges, and logistics.
              </p>
              <p>
                I take ownership end-to-end — from architecture decisions and API contracts to pixel-perfect UI and CI
                coverage. Comfortable pairing with backend teams, leading frontend guilds, and delivering faster than
                expected in both Agile sprints and fast-moving startup cycles.
              </p>
              <p>
                My stack is Next.js / Vue.js + TypeScript first, with solid Node.js, Laravel, and database skills to
                close the gap whenever needed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, label: 'Frontend-first', sub: 'Next.js · Vue · React', accent: 'cyan' },
                { icon: Server, label: 'Backend-capable', sub: 'Node.js · Laravel · NestJS', accent: 'emerald' },
                { icon: Shield, label: '>90% Test Coverage', sub: 'Jest · Vitest · SonarLint', accent: 'violet' },
                { icon: Globe, label: 'Remote-ready', sub: 'Agile · Async · Scrum', accent: 'lime' },
              ].map(({ icon: Icon, label, sub, accent: ac }) => {
                const a = ACCENT_CLASSES[ac] ?? ACCENT_CLASSES.cyan;
                return (
                  <div key={label} className={`rounded-xl border bg-white/3 p-4 space-y-2 ${a.border}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${a.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-semibold text-white">{label}</div>
                    <div className="text-xs text-slate-400">{sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
        <section
          aria-labelledby="experience-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="experience"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="experience-heading">
            Work Experience
          </h2>
          <p className="text-2xl font-bold text-white mb-8">6 Roles · 4+ Years · Enterprise to Startup</p>
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="projects-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="projects"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="projects-heading">
            Featured Projects & Systems
          </h2>
          <p className="text-2xl font-bold text-white mb-8">Key production systems I&apos;ve built or led.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="skills-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="skills"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="skills-heading">
            Technical Skills
          </h2>
          <p className="text-2xl font-bold text-white mb-8">Skills Matrix</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => {
              const a = ACCENT_CLASSES[cat.accent] ?? ACCENT_CLASSES.cyan;
              const Icon = cat.icon;
              return (
                <div key={cat.label} className={`rounded-2xl border bg-white/3 p-6 space-y-5 ${a.border}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${a.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`font-bold text-sm ${a.text}`}>{cat.label}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((sk) => (
                      <SkillBar key={sk.name} accent={cat.accent} level={sk.level} name={sk.name} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="education-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="education"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="education-heading">
            Education
          </h2>
          <article className="rounded-2xl border border-violet-500/30 bg-white/3 p-6 flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">STMIK IKMI Cirebon</h3>
              <p className="text-violet-400 font-medium text-sm">Bachelor of Engineering · Computer Science</p>
              <p className="text-slate-400 text-sm mt-1">2015 – 2019 · Cirebon, Jawa Barat, Indonesia</p>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
                Studied core Computer Science fundamentals: algorithms, data structures, software engineering, database
                systems, and web application development. Final project focused on web-based information systems.
              </p>
            </div>
          </article>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="contact-heading"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
          id="contact"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3" id="contact-heading">
            Contact & Hire Me
          </h2>
          <p className="text-2xl font-bold text-white mb-2">Let&apos;s build something great.</p>
          <p className="text-slate-400 mb-10 max-w-lg">
            Open to senior frontend, fullstack, or tech-lead roles. Available remotely worldwide and on-site in Cirebon
            / Jakarta area.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* direct links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Direct Links</h3>
              {[
                {
                  icon: Phone,
                  label: 'WhatsApp',
                  value: '+62 896 2281 4512',
                  href: 'https://wa.me/6289622814512',
                  accent: 'emerald',
                  external: true,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hidayatnur1502@gmail.com',
                  href: 'mailto:hidayatnur1502@gmail.com',
                  accent: 'cyan',
                  external: false,
                },
                {
                  icon: Link2,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/nur-hidayat-0bb4a6164',
                  href: 'https://www.linkedin.com/in/nur-hidayat-0bb4a6164',
                  accent: 'violet',
                  external: true,
                },
              ].map(({ icon: Icon, label, value, href, accent: ac, external }) => {
                const a = ACCENT_CLASSES[ac] ?? ACCENT_CLASSES.cyan;
                return (
                  <a
                    key={label}
                    className={`flex items-center gap-4 p-4 rounded-xl border bg-white/3 hover:bg-white/6 transition-colors group ${a.border}`}
                    href={href}
                    rel={external ? 'noopener noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.badge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
                      <div className="text-sm text-white font-medium truncate">{value}</div>
                    </div>
                    <ExternalLink
                      className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${a.text}`}
                    />
                  </a>
                );
              })}
            </div>

            {/* inquiry form */}
            <form aria-label="Quick inquiry form" className="space-y-4" onSubmit={handleSubmit}>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Quick Inquiry</h3>
              <div className="space-y-3">
                <input
                  aria-label="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  disabled={sending}
                  placeholder="Your name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
                <input
                  aria-label="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  disabled={sending}
                  placeholder="Your email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
                <textarea
                  aria-label="Your message"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                  disabled={sending}
                  placeholder="Your message or project brief..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-[#0b0f19] font-bold hover:bg-cyan-400 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sending}
                type="submit"
              >
                {sending ? (
                  <>
                    <MessageSquare className="w-4 h-4 animate-pulse" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/5 bg-white/2 px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">Nur Hidayat</div>
            <div className="text-xs text-slate-500 mt-0.5">Senior Frontend Developer · Cirebon, Indonesia</div>
          </div>
          <div className="flex gap-4 text-xs text-slate-500">
            {NAV_LINKS.map(({ label, href }) => (
              <a className="hover:text-slate-300 transition-colors" href={href} key={href} onClick={handleNavClick}>
                {label}
              </a>
            ))}
          </div>
          <div className="text-xs text-slate-600 text-center">
            <div>© {new Date().getFullYear()} Nur Hidayat. All rights reserved.</div>
            <div className="mt-0.5">Built with Next.js 16, Tailwind CSS & TypeScript</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
