'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Star,
  Send,
  Menu,
  X,
  Sun,
  Moon,
  Globe2,
  Activity,
  Shield,
  Zap,
  Sparkles,
  Building2,
  Award,
  ShoppingBag,
  Trees,
  FileText,
  ArrowRight,
  Eye,
  Check,
  Clock,
  Copy,
  ArrowUpRight,
  User,
  MessageSquare,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { TechIcon } from '@/components/ui';
import { useIsMounted } from '@/hooks';

const TECH_ECOSYSTEM_ROWS = [
  [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Zustand',
    'Redux',
    'Tailwind',
    'shadcn/ui',
    'Radix',
    'Vue',
    'Nuxt',
    'Astro',
    'Node',
    'Bun',
    'Workers',
    'Postgres',
    'MongoDB',
    'Redis',
    'Supabase',
    'Fastify',
    'Hono',
    'Vite',
    'Docker',
    'Git',
    'GitHub',
    'Sanity',
    'ChatGPT',
    'Mapbox',
    'Figma',
  ],
];

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
  detail: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  stack: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  category: string;
  group: 'Healthcare & Enterprise' | 'GovTech & GIS' | 'Logistics & Fintech' | 'Retail & Social';
  stack: string[];
  icon: typeof Activity;
  metrics: string[];
  image?: string;
  link?: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const STATS: StatItem[] = [
  { value: '4+', label: 'Years Exp.', detail: 'Enterprise & startup environments' },
  { value: '6', label: 'Enterprise Roles', detail: 'Healthcare, GIS, fintech & logistics' },
  { value: '100%', label: 'Code Quality', detail: 'Clean architecture & strict TypeScript' },
  { value: '10+', label: 'Production Apps', detail: 'Mission-critical web platforms' },
];

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'siloam',
    company: 'Siloam Hospitals Group',
    role: 'Frontend Developer / Fullstack Contributor',
    period: 'June 2024 – Present',
    location: 'Tangerang, Indonesia · Hybrid',
    type: 'Full-time',
    highlights: [
      'Conducted thorough code reviews ensuring high-quality deployments to dev & staging environments.',
      'Implemented and configured message brokers across all Inpatient Department services for My Siloam, enhancing communication & reliability.',
      'Led redevelopment of the My Siloam Inpatient Department application using Next.js (frontend) and Node.js (backend) for enhanced performance & UX.',
      'Resolved critical bugs in frontend services, especially print transaction sales orders and medical billing records.',
      'Maintained strict code quality, zero-defect release standards, and thorough PR reviews across all sprints.',
    ],
    stack: ['Next.js', 'Node.js', 'TypeScript', 'Message Brokers', 'PostgreSQL'],
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
      'Developed ERC (Estimated Repair Cost) calculation module for equipment maintenance.',
      'Integrated Google Chat for problematic item telemetry & automated ticket alerts.',
    ],
    stack: ['Vue.js 3', 'TypeScript', 'Vuex', 'Google Chat API', 'REST APIs', 'Tailwind CSS'],
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
      'Constructed responsive high-density data visualizations with Chart.js and tabular reporting.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'REST APIs', 'Chart.js'],
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
      'Delivered mobile performance optimization and responsive progressive web application.',
    ],
    stack: ['Nuxt.js', 'Node.js', 'Vue.js', 'MongoDB', 'PostgreSQL', 'Midtrans'],
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
      'Ensured strict layout fidelity, cross-browser compatibility, and accessible navigation.',
    ],
    stack: ['HTML5', 'CSS3', 'Shopify', 'JavaScript'],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    title: 'My Siloam Inpatient Dept. App',
    category: 'Healthcare · Enterprise Platform',
    group: 'Healthcare & Enterprise',
    description:
      'Full redevelopment of the hospital inpatient module with Next.js frontend, Node.js backend, and message broker architecture for enhanced throughput and reliability.',
    stack: ['Next.js', 'Node.js', 'Message Brokers', 'TypeScript', 'PostgreSQL'],
    icon: Activity,
    metrics: ['Real-time broker events', 'Multi-service architecture', 'Optimized clinical workflow'],
    image: '/portfolio/siloam.png',
  },
  {
    title: 'Kawan Lama Service & Field Ticketing',
    category: 'Field Operations · Enterprise Dashboard',
    group: 'Healthcare & Enterprise',
    description:
      'Enterprise service ticket dashboard with field workflow state machine, employee check-in/out, ERC module, and automated Google Chat alerts.',
    stack: ['Vue.js 3', 'TypeScript', 'Google Chat API', 'REST APIs', 'Tailwind CSS'],
    icon: Shield,
    metrics: ['Daily/weekly/yearly analytics', 'Google Chat bot integration', 'State machine workflow'],
    image: '/portfolio/kawan-lama.png',
  },
  {
    title: 'TOMPS.ID Enterprise Project CMS',
    category: 'Enterprise SaaS · Governance & Reporting',
    group: 'Healthcare & Enterprise',
    description:
      'CMS and executive dashboard for project details management, multi-period analytics reporting, and master data administration for a large enterprise platform.',
    stack: ['Vue.js', 'Laravel', 'PostgreSQL', 'Chart.js', 'REST APIs'],
    icon: Layers,
    metrics: ['Executive dashboards', 'Multi-period reporting', 'Master data mgmt'],
    image: '/portfolio/tomps.png',
  },
  {
    title: 'INDODAX Internal Monitoring',
    category: 'Fintech & Crypto · Telemetry Platform',
    group: 'Logistics & Fintech',
    description:
      "Social Feeds CMS and internal system telemetry monitoring dashboard for one of Southeast Asia's largest crypto exchanges.",
    stack: ['Vue.js', 'TypeScript', 'REST APIs', 'WebSockets'],
    icon: Zap,
    metrics: ['Real-time telemetry', 'Social feeds CMS', 'Internal dashboard'],
  },
  {
    title: 'West Java Forestry GIS Platform',
    category: 'GovTech · Spatial GIS Infrastructure',
    group: 'GovTech & GIS',
    description:
      'Government platform for West Java tree planting & seed monitoring with interactive maps (LeafletJS), public portals, and analytics dashboards per Pergub 522.4/17/Rek.',
    stack: ['Laravel', 'CodeIgniter', 'LeafletJS', 'PostgreSQL', 'Google Analytics'],
    icon: Globe2,
    metrics: ['Interactive GIS maps', 'Public & admin portals', 'Government regulation compliant'],
    image: '/portfolio/simantribibit.png',
  },
  {
    title: 'Jaskipin Express Logistics Portal',
    category: 'Logistics & E-Commerce · Core Engine',
    group: 'Logistics & Fintech',
    description:
      'Full-stack logistics platform with Midtrans payment gateway, shipping API integrations, and responsive Nuxt.js frontend.',
    stack: ['Nuxt.js', 'Node.js', 'MongoDB', 'Midtrans', 'PostgreSQL'],
    icon: Server,
    metrics: ['Midtrans payment gateway', 'Logistics API integrations', 'Responsive PWA'],
    image: '/portfolio/jaskipin.png',
  },
  {
    title: 'Sistem Persediaan Barang - Pemprov Jabar',
    category: 'GovTech · Asset & Inventory Management',
    group: 'GovTech & GIS',
    description:
      'Sistem manajemen persediaan barang dan inventaris aset daerah terintegrasi untuk seluruh Organisasi Perangkat Daerah (OPD) Badan Pengelola Keuangan dan Aset Daerah (BPKAD) Provinsi Jawa Barat.',
    stack: ['Vue.js 3', 'Element Plus', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    icon: Building2,
    metrics: ['Provincial inventory governance', 'High-density tabular reporting', 'Role-based OPD access'],
    image: '/portfolio/e-persediaan.png',
  },
  {
    title: 'Asset Award 2024 (BPKAD Jabar)',
    category: 'GovTech · Evaluation Platform',
    group: 'GovTech & GIS',
    description:
      'Platform pendaftaran, verifikasi multi-tahap, dan penilaian penganugerahan pengelolaan aset daerah se-Jawa Barat oleh BPKAD Provinsi Jawa Barat.',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Golang', 'PostgreSQL'],
    icon: Award,
    metrics: ['Automated scoring engine', 'Multi-tenant verification workflow', 'shadcn/ui design system'],
    image: '/portfolio/award.png',
  },
  {
    title: 'Baznas Kab Cirebon',
    category: 'Public Sector & NGO · Zakat Management',
    group: 'Retail & Social',
    description:
      'Aplikasi internal pengelolaan, penerimaan, pendistribusian, dan audit pelaporan zakat, infaq, dan sedekah Badan Amil Zakat Nasional (BAZNAS) Kabupaten Cirebon.',
    stack: ['Next.js', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    icon: FileText,
    metrics: ['Mustahiq distribution tracking', 'Donation reconciliation', 'Real-time audit reporting'],
    image: '/portfolio/baznas.png',
  },
  {
    title: 'Rosecellular POS System',
    category: 'Retail & Commerce · Point of Sale',
    group: 'Retail & Social',
    description:
      'Aplikasi Point of Sale (POS) dan kasir penjualan handphone mencakup transaksi kasir cepat, barcode scanner, manajemen stok multi-varian, dan laporan keuangan.',
    stack: ['HTML5', 'jQuery', 'Bootstrap', 'CodeIgniter', 'MySQL'],
    icon: ShoppingBag,
    metrics: ['Real-time barcode POS checkout', 'Multi-warehouse stock control', 'Cash register reconciliation'],
    image: '/portfolio/rosecellular.png',
  },
  {
    title: 'TanamAja Dulu',
    category: 'GovTech & Eco · Tree Adoption',
    group: 'GovTech & GIS',
    description:
      'Platform adopsi dan penanaman pohon berbasis komunitas dengan pelacakan geospatial pertumbuhan bibit secara berkala oleh rimbawan dan relawan.',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Laravel', 'PostgreSQL'],
    icon: Trees,
    metrics: ['Interactive tree adoption workflow', 'Community planting metrics', 'Multilingual support'],
    link: 'https://tanamajadulu.skma.org/en',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function TechBadge({ label }: { readonly label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] leading-tight px-2.5 py-1 rounded-md border border-border/70 bg-muted/40 text-foreground/90 transition-colors hover:border-foreground/30 hover:bg-muted/70">
      <TechIcon className="shrink-0" name={label} size={13} />
      <span>{label}</span>
    </span>
  );
}

function ExperienceCard({ exp, index = 0 }: { readonly exp: ExperienceItem; readonly index?: number }) {
  const [open, setOpen] = useState(false);
  const isCurrent = index === 0;

  return (
    <div className="group relative">
      {/* Stepper Node Marker on the vertical rail */}
      <div className="absolute -left-6 sm:-left-10 top-1.5 flex items-center justify-center">
        {isCurrent ? (
          <div className="relative flex size-6 sm:size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold ring-4 ring-primary/20 shadow-xs">
            <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-emerald-500" />
            01
          </div>
        ) : (
          <div className="flex size-6 sm:size-8 items-center justify-center rounded-full border-2 border-border/80 bg-card text-muted-foreground font-mono text-xs font-semibold transition-all group-hover:border-primary group-hover:text-primary group-hover:shadow-xs">
            {String(index + 1).padStart(2, '0')}
          </div>
        )}
      </div>

      {/* Stepper Content Card */}
      <article className="rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 hover:shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">{exp.type}</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="font-mono text-xs text-muted-foreground font-medium">{exp.period}</span>
              {isCurrent && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-foreground tracking-tight leading-snug">{exp.company}</h3>
            <p className="text-sm font-semibold text-primary/90 mt-0.5">{exp.role}</p>
            <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground font-mono text-xs">
              <MapPin className="size-3 text-primary shrink-0" />
              <span>{exp.location}</span>
            </div>
          </div>

          <button
            aria-expanded={open}
            aria-label={open ? 'Collapse details' : 'Expand details'}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/80 bg-background text-xs font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span>{open ? 'Hide details' : 'Show details'}</span>
            {open ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
        </div>

        {/* Tech stack pills with icons */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/40">
          {exp.stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        {/* Collapsible highlights */}
        {open && (
          <ul className="mt-4 space-y-2 pt-3 border-t border-border/30">
            {exp.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

function ProjectCard({
  project,
  onOpenDetails,
}: {
  readonly project: ProjectItem;
  readonly onOpenDetails: (project: ProjectItem) => void;
}) {
  const Icon = project.icon;

  return (
    <article
      className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card p-4 sm:p-5 transition-all duration-200 hover:border-foreground/30 hover:shadow-xs cursor-pointer"
      onClick={() => onOpenDetails(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(project);
        }
      }}
      tabIndex={0}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg border border-border/80 bg-muted/60 text-primary shrink-0">
            <Icon className="size-4" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground text-right truncate max-w-[140px]">
            {project.category.split('·')[0].trim()}
          </span>
        </div>

        <h3 className="text-sm font-bold text-foreground tracking-tight leading-snug line-clamp-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>

        {/* Compact stack preview */}
        <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-border/40">
          {project.stack.slice(0, 3).map((item) => (
            <TechBadge key={item} label={item} />
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted/40 border border-border/50">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-border/30 flex items-center justify-between text-xs">
        <button
          aria-label={`View Details for ${project.title}`}
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline cursor-pointer"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(project);
          }}
        >
          <span>View Details</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </button>
        {project.image && (
          <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
            <Eye className="size-3" />
            <span>Preview</span>
          </span>
        )}
      </div>
    </article>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  readonly project: ProjectItem | null;
  readonly onClose: () => void;
}) {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-border/90 bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        role="document"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border/80 bg-card px-5 py-3.5 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex size-7 items-center justify-center rounded-lg border border-border/80 bg-muted/60 text-primary shrink-0">
              <Icon className="size-4" />
            </div>
            <div className="font-mono text-xs text-muted-foreground truncate">{project.category}</div>
          </div>
          <button
            aria-label="Close modal"
            className="flex size-7 items-center justify-center rounded-lg border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            type="button"
            onClick={onClose}
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {project.image && (
            <div className="w-full h-52 sm:h-64 overflow-hidden rounded-xl border border-border/60 bg-muted/30 relative">
              <Image
                alt={project.title}
                className="size-full object-cover object-top"
                height={260}
                src={project.image}
                width={640}
              />
            </div>
          )}

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-2 rounded-xl border border-border/70 bg-muted/20 p-4">
            <div className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
              Key Engineering Highlights & Metrics
            </div>
            <ul className="space-y-1.5 pt-1">
              {project.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2 text-xs text-foreground/90 font-mono">
                  <Star className="size-3.5 text-primary shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-2">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border/80 bg-muted/20 px-5 py-3 shrink-0">
          <button
            className="px-3.5 py-1.5 rounded-lg border border-border/80 bg-card text-xs font-medium text-foreground hover:bg-muted transition-colors"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
          {project.link && (
            <a
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-xs hover:bg-primary/90 transition-colors"
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string>('Full-time Senior Role');

  const INQUIRY_TOPICS = [
    'Full-time Senior Role',
    'Contract / Freelance',
    'Architecture Advisory',
    'General Inquiry',
  ] as const;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hidayatnur1502@gmail.com');
      setCopiedEmail(true);
      toast.success('Email copied to clipboard: hidayatnur1502@gmail.com');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.info('Email: hidayatnur1502@gmail.com');
    }
  };
  const PROJECT_CATEGORIES = [
    'All',
    'Healthcare & Enterprise',
    'GovTech & GIS',
    'Logistics & Fintech',
    'Retail & Social',
  ] as const;

  const displayedProjects =
    selectedCategory === 'All' ? PROJECTS : PROJECTS.filter((p) => p.group === selectedCategory);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const isDark = resolvedTheme === 'dark';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    const recipient = 'hidayatnur1502@gmail.com';
    const subject = encodeURIComponent(`[${inquiryTopic}] Inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Nur Hidayat,\n\nTopic: ${inquiryTopic}\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}\n\nSent from Portfolio Quick Inquiry Form`,
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSending(true);
    try {
      const { promise, resolve } = Promise.withResolvers<void>();
      setTimeout(resolve, 900);
      await promise;

      if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.rel = 'noopener noreferrer';
        link.click();
      }

      toast.success("Message sent! I'll get back to you shortly.");
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please contact via email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
        >
          {/* Brand mark */}
          <a
            className="flex items-center font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 text-sm sm:text-base"
            href="#hero"
            onClick={handleNavClick}
          >
            <span className="flex size-7 items-center justify-center font-mono text-lg font-bold text-primary">
              {'//'}
            </span>
            <h3>NH</h3>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  href={href}
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions: Theme Toggle, Resume & Hamburger */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle visual theme"
              className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              type="button"
              onClick={handleThemeToggle}
            >
              {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <a
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
              download
              href="/cv-nur-hidayat.pdf"
            >
              <Download className="size-3.5 text-muted-foreground" />
              <span>Resume</span>
            </a>

            <button
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card text-foreground transition-colors hover:bg-muted md:hidden"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-border/80 bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
            <ul className="space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    href={href}
                    onClick={handleNavClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  className="flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-card px-3 py-2 text-xs font-medium text-foreground"
                  download
                  href="/cv-nur-hidayat.pdf"
                >
                  <Download className="size-4 text-muted-foreground" />
                  <span>Download Resume PDF</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="pt-16 pb-14 sm:pt-24 sm:pb-20" id="hero">
          {/* status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3.5 py-1 font-mono text-xs text-foreground/90">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for high-impact roles
          </div>

          <h1
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]"
            id="hero-heading"
          >
            Senior Frontend Developer
            <span className="block mt-2 text-xl font-medium tracking-tight text-muted-foreground sm:text-3xl lg:text-4xl">
              building high-performance web systems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            Frontend developer with <strong className="text-foreground font-semibold">4+ years of experience</strong>{' '}
            delivering enterprise products, innovative startups, and mission-critical systems — both remote and on-site.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary" />
              Cirebon, Jawa Barat · Remote Worldwide
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-primary" />
              Active Contributor @ Siloam Inpatient
            </span>
          </div>

          {/* quick stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map(({ value, label, detail }) => (
              <div
                key={label}
                className="rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <div className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs font-semibold text-foreground tracking-tight">{label}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{detail}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
              href="#experience"
              onClick={handleNavClick}
            >
              <Briefcase className="size-4" />
              <span>View Experience</span>
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
              download
              href="/cv-nur-hidayat.pdf"
            >
              <Download className="size-4 text-muted-foreground" />
              <span>Download CV</span>
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
              href="https://wa.me/6289622814512"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Phone className="size-4 text-muted-foreground" />
              <span>WhatsApp</span>
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
              href="mailto:hidayatnur1502@gmail.com"
            >
              <Mail className="size-4 text-muted-foreground" />
              <span>Email</span>
            </a>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section aria-labelledby="about-heading" className="border-t border-border/80 py-16" id="about">
          <div className="flex flex-col gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Background & Principles
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" id="about-heading">
              About & Summary
            </h2>
          </div>

          <div className="w-full space-y-2 text-sm text-muted-foreground leading-relaxed">
            <span>
              Hey, I&apos;m <span className="font-bold text-lg">Nur Hidayat</span>
            </span>
            <p>
              Frontend Developer with 4+ years of experience building web applications with Vue.js, Next.js, and
              TypeScript, with working knowledge of Node.js and Laravel for API integration and backend work. Currently
              rebuilding the My Siloam Inpatient Department platform at Siloam Hospital Group. Has delivered products
              across enterprise, startup, and government environments, with experience in code reviews, scalable
              architecture, message brokers, and third-party integrations (payment, logistics, chat). Takes ownership of
              delivery and works effectively in both remote and in-office teams.
            </p>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
        <section aria-labelledby="experience-heading" className="border-t border-border/80 py-16" id="experience">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Career Trajectory
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" id="experience-heading">
                Work Experience
              </h2>
              <span className="font-mono text-xs text-muted-foreground">
                6 Roles · 4+ Years · Enterprise to Startup
              </span>
            </div>
          </div>
          {/* Vertical Hierarchy Stepper */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border/80 before:to-border/30">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </section>
        {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
        <section aria-labelledby="projects-heading" className="border-t border-border/80 py-16" id="projects">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Key Case Studies
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" id="projects-heading">
                  Featured Projects & Systems
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  11 Production Systems · Healthcare, GovTech, Logistics & Fintech
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {PROJECT_CATEGORIES.map((cat) => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.group === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-colors border ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                      : 'bg-card text-muted-foreground border-border/80 hover:text-foreground hover:bg-muted'
                  }`}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} onOpenDetails={setSelectedProject} />
            ))}
          </div>

          {/* Project Details Modal */}
          <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <section aria-labelledby="skills-heading" className="border-t border-border/80 py-16" id="skills">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Technical Competencies
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" id="skills-heading">
                Technical Skills
              </h2>
              <span className="font-mono text-xs text-muted-foreground">Skills Matrix</span>
            </div>
          </div>
          {/* Tech Stack & Toolchain Ecosystem (Directly matching Image #1 in rows) */}
          <div className="rounded-xl bg-card mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Production-grade tools and frameworks used across enterprise systems
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {TECH_ECOSYSTEM_ROWS.map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
                  {row.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-background/90 hover:bg-muted hover:border-foreground/30 transition-all text-xs font-medium text-foreground shadow-2xs cursor-default"
                    >
                      <TechIcon className="shrink-0" name={tech} size={16} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── EDUCATION ────────────────────────────────────────────────────── */}
        <section aria-labelledby="education-heading" className="border-t border-border/80 py-16" id="education">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Academic Foundation
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" id="education-heading">
              Education
            </h2>
          </div>

          <article className="rounded-xl border border-border/70 bg-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/80 bg-muted/60 text-primary shrink-0">
                <GraduationCap className="size-6" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-foreground">STMIK IKMI Cirebon</h3>
                  <span className="font-mono text-xs text-muted-foreground">2015 – 2019</span>
                </div>
                <p className="text-sm font-medium text-foreground/90">
                  Bachelor of Engineering · Computer Science / Teknik Informatika
                </p>
                <div className="text-xs text-muted-foreground flex items-center gap-1 pt-0.5 font-mono">
                  <MapPin className="size-3 text-primary" />
                  <span>Cirebon, Jawa Barat, Indonesia</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed pt-3 border-t border-border/40 max-w-2xl">
                  Studied core Computer Science fundamentals: algorithms, data structures, software engineering,
                  database systems, and web application development. Final project focused on web-based information
                  systems.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section aria-labelledby="contact-heading" className="border-t border-border/80 py-16 sm:py-20" id="contact">
          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-10">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              {'// Direct Engagement'}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl" id="contact-heading">
                Contact & Hire Me
              </h2>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q4/Q1 Opportunities</span>
              </div>
            </div>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed mt-1">
              Open to senior frontend engineering, tech lead, or fullstack contributor roles. Ready for high-ownership
              challenges across distributed remote teams or on-site in Jakarta / Cirebon.
            </p>
          </div>

          {/* ── TOP BENTO ROW: DIRECT COMMUNICATION TILES ────────────────────── */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {/* Email Card */}
            <div className="group relative rounded-2xl border border-border/80 bg-card p-5 transition-all duration-200 hover:border-foreground/30 hover:shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-primary/10 text-primary shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    Primary Channel
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">Direct Email</div>
                <div className="font-mono text-sm font-bold text-foreground truncate mt-1">
                  hidayatnur1502@gmail.com
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                <button
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/70 bg-background text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                  type="button"
                  onClick={() => void handleCopyEmail()}
                >
                  {copiedEmail ? (
                    <Check className="size-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="size-3.5 text-muted-foreground" />
                  )}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
                <a
                  aria-label="Send email"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  href="mailto:hidayatnur1502@gmail.com"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative rounded-2xl border border-border/80 bg-card p-5 transition-all duration-200 hover:border-emerald-500/40 hover:shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Phone className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    &lt; 15m Response
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">WhatsApp (Fastest)</div>
                <div className="font-mono text-sm font-bold text-foreground truncate mt-1">+62 896 2281 4512</div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Direct Chat</span>
                <a
                  aria-label="Open WhatsApp"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  href="https://wa.me/6289622814512"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative rounded-2xl border border-border/80 bg-card p-5 transition-all duration-200 hover:border-blue-500/40 hover:shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-blue-500/10 text-blue-500 shrink-0">
                    <Globe2 className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30">
                    Professional Network
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">LinkedIn Profile</div>
                <div className="font-mono text-sm font-bold text-foreground truncate mt-1">
                  linkedin.com/in/nur-hidayat-0bb4a6164
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Career & Endorsements</span>
                <a
                  aria-label="Open LinkedIn"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  href="https://www.linkedin.com/in/nur-hidayat-0bb4a6164"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── BOTTOM BENTO: AVAILABILITY WIDGET & INQUIRY CONSOLE ──────────── */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 4 cols: Engineer Availability & Working Mode */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  <Clock className="size-3.5" />
                  <span>Working Conditions & Hub</span>
                </div>

                <div className="space-y-3.5 border-t border-border/40 pt-4">
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted-foreground uppercase">Base Location</div>
                    <div className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary shrink-0" />
                      <span>Cirebon & Jakarta, ID</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted-foreground uppercase">Standard Timezone</div>
                    <div className="text-sm font-semibold text-foreground">WIB · UTC+7 (Western Indonesia)</div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted-foreground uppercase">Collaboration Mode</div>
                    <div className="text-sm font-semibold text-foreground">
                      100% Remote · Hybrid Ready · Async Friendly
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted-foreground uppercase">Response Guarantee</div>
                    <div className="text-sm font-semibold text-foreground">Within 24 Hours Guaranteed</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted hover:border-foreground/30 transition-colors shadow-2xs"
                  download
                  href="/cv-nur-hidayat.pdf"
                >
                  <Download className="size-3.5 text-muted-foreground" />
                  <span>Download Official CV / Resume</span>
                </a>
              </div>
            </div>

            {/* Right 8 cols: Fluid Interactive Inquiry Console */}
            <div className="lg:col-span-8">
              <form
                aria-label="Quick inquiry form"
                className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-5 shadow-xs"
                onSubmit={(e) => void handleSubmit(e)}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-foreground tracking-tight flex items-center gap-2">
                      <MessageSquare className="size-4 text-primary" />
                      <span>Start a Conversation</span>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Select your project scope below; submission compiles your draft and launches your email composer.
                    </p>
                  </div>
                </div>

                {/* Inquiry Topic / Scope Chips */}
                <div>
                  <div className="block font-mono text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Scope of Inquiry:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TOPICS.map((topic) => {
                      const isSelected = inquiryTopic === topic;
                      return (
                        <button
                          key={topic}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-primary text-primary-foreground border-primary shadow-xs font-semibold'
                              : 'bg-muted/40 text-muted-foreground border-border/70 hover:bg-muted hover:text-foreground'
                          }`}
                          type="button"
                          onClick={() => setInquiryTopic(topic)}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Two-Column Responsive Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5" htmlFor="contact-form-name">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        aria-label="Your name"
                        className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        disabled={sending}
                        id="contact-form-name"
                        placeholder="e.g. Alex Johnson"
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      />
                      <User className="absolute left-3 top-3 size-4 text-muted-foreground/60 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5" htmlFor="contact-form-email">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        aria-label="Your email"
                        className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        disabled={sending}
                        id="contact-form-email"
                        placeholder="alex@company.com"
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      />
                      <Mail className="absolute left-3 top-3 size-4 text-muted-foreground/60 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5" htmlFor="contact-form-message">
                    Project Scope or Role Brief
                  </label>
                  <textarea
                    aria-label="Your message"
                    className="w-full rounded-xl border border-border/80 bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    disabled={sending}
                    id="contact-form-message"
                    placeholder="Tell me about your technical goals, stack expectations, and timeline..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <div className="pt-1">
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    disabled={sending}
                    type="submit"
                  >
                    <Send className="size-4" />
                    <span>{sending ? 'Composing Draft…' : 'Send Message'}</span>
                  </button>
                  <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
                    ⚡ Direct mailto trigger · Opens pre-addressed draft to hidayatnur1502@gmail.com
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border/80 bg-muted/20 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <div className="text-sm font-semibold text-foreground">Nur Hidayat</div>
            <div className="font-mono text-xs text-muted-foreground mt-0.5">
              Senior Frontend Developer · Cirebon, Indonesia
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-muted-foreground">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} className="transition-colors hover:text-foreground" href={href} onClick={handleNavClick}>
                {label}
              </a>
            ))}
          </div>

          <div className="font-mono text-[11px] text-muted-foreground">
            <div>© {new Date().getFullYear()} Nur Hidayat. All rights reserved.</div>
            <div className="text-muted-foreground/70 mt-0.5">Built with Next.js 16, Tailwind CSS & TypeScript</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
