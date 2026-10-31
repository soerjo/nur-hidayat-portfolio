import type { ReactNode } from 'react';

import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from 'sonner';

import PortfolioPage from '@/app/(marketing)/page';

// ── Mocks ────────────────────────────────────────────────────────────────────

vi.mock('sonner', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
  Toaster: () => null,
}));

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'dark', setTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

// ── Sections: structural presence ────────────────────────────────────────────

describe('PortfolioPage — sections', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the hero headline', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Senior Frontend Developer/i })).toBeInTheDocument();
  });

  it('renders the availability badge', () => {
    render(<PortfolioPage />);
    expect(screen.getByText(/Available for high-impact roles/i)).toBeInTheDocument();
  });

  it('renders all four quick stats', () => {
    render(<PortfolioPage />);
    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('Years Exp.')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Roles')).toBeInTheDocument();
    expect(screen.getByText('90%+')).toBeInTheDocument();
    expect(screen.getByText('Test Coverage')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Production Apps')).toBeInTheDocument();
  });

  it('renders the About section heading', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /About & Summary/i })).toBeInTheDocument();
  });

  it('renders the Experience section with all 6 companies', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeInTheDocument();
    expect(screen.getByText(/Siloam Hospitals Group/i)).toBeInTheDocument();
    expect(screen.getByText(/PT Kawan Lama Sejahtera/i)).toBeInTheDocument();
    expect(screen.getByText(/PT Folkatech/i)).toBeInTheDocument();
    expect(screen.getByText(/Dinas Kehutanan Pemprov Jabar/i)).toBeInTheDocument();
    expect(screen.getByText(/PT Jaskipin Express/i)).toBeInTheDocument();
    expect(screen.getByText(/My Shope Agency/i)).toBeInTheDocument();
  });

  it('renders the Projects section with key project titles', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /Featured Projects & Systems/i })).toBeInTheDocument();
    expect(screen.getByText(/My Siloam Inpatient Dept\. App/i)).toBeInTheDocument();
    expect(screen.getByText(/Kawan Lama Service & Field Ticketing/i)).toBeInTheDocument();
    expect(screen.getByText(/TOMPS\.ID Enterprise Project CMS/i)).toBeInTheDocument();
    expect(screen.getByText(/INDODAX Internal Monitoring/i)).toBeInTheDocument();
    expect(screen.getByText(/West Java Forestry GIS Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Jaskipin Express Logistics Portal/i)).toBeInTheDocument();
  });

  it('renders the Skills Matrix section with all four categories', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /Technical Skills/i })).toBeInTheDocument();
    expect(screen.getByText('Skills Matrix')).toBeInTheDocument();
    expect(screen.getByText('Frontend Mastery')).toBeInTheDocument();
    expect(screen.getByText('Backend & Microservices')).toBeInTheDocument();
    expect(screen.getByText('Database & DevOps')).toBeInTheDocument();
    expect(screen.getByText('Architecture & Testing')).toBeInTheDocument();
  });

  it('renders the Education section with STMIK IKMI Cirebon', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByText(/STMIK IKMI Cirebon/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Engineering/i)).toBeInTheDocument();
  });

  it('renders the Contact section with WhatsApp, email, and LinkedIn links', () => {
    render(<PortfolioPage />);
    expect(screen.getByRole('heading', { name: /Contact & Hire Me/i })).toBeInTheDocument();
    expect(screen.getByText('hidayatnur1502@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+62 896 2281 4512')).toBeInTheDocument();
    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/nur-hidayat-0bb4a6164');
  });

  it('renders the footer with copyright text', () => {
    render(<PortfolioPage />);
    expect(screen.getByText(/Built with Next\.js 16, Tailwind CSS & TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/© \d{4} Nur Hidayat/i)).toBeInTheDocument();
  });
});

// ── Navbar ────────────────────────────────────────────────────────────────────

describe('PortfolioPage — navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the brand mark with NH initials', () => {
    render(<PortfolioPage />);
    expect(screen.getByText('NH')).toBeInTheDocument();
  });

  it('CV download link points to /cv-nur-hidayat.pdf', () => {
    render(<PortfolioPage />);
    const resumeLinks = screen.getAllByRole('link', { name: /Resume|Download/i });
    expect(resumeLinks.some((l) => l.getAttribute('href') === '/cv-nur-hidayat.pdf')).toBe(true);
  });

  it('mobile menu toggle shows and hides links', async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    const toggle = screen.getByRole('button', { name: /Toggle mobile menu/i });
    await user.click(toggle);
    expect(screen.getByText('Download Resume PDF')).toBeInTheDocument();

    await user.click(toggle);
    expect(screen.queryByText('Download Resume PDF')).not.toBeInTheDocument();
  });
});

// ── Experience cards ──────────────────────────────────────────────────────────

describe('PortfolioPage — experience cards expand/collapse', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('highlights are hidden by default and shown after expand click', async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    expect(screen.queryByText(/Conducted thorough code reviews/i)).not.toBeInTheDocument();

    const expandButtons = screen.getAllByRole('button', { name: /Expand details/i });
    await user.click(expandButtons[0]); // Siloam is first

    expect(screen.getByText(/Conducted thorough code reviews/i)).toBeInTheDocument();
  });

  it('collapses highlights after a second click', async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    const expandButtons = screen.getAllByRole('button', { name: /Expand details/i });
    await user.click(expandButtons[0]);
    expect(screen.getByText(/Conducted thorough code reviews/i)).toBeInTheDocument();

    const collapseButton = screen.getByRole('button', { name: /Collapse details/i });
    await user.click(collapseButton);
    expect(screen.queryByText(/Conducted thorough code reviews/i)).not.toBeInTheDocument();
  });
});

// ── Contact form ──────────────────────────────────────────────────────────────

describe('PortfolioPage — contact form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows a validation toast when fields are empty', async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    await user.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(toast.error).toHaveBeenCalledWith('Please fill in all fields.');
  });

  it('shows a success toast after filling and submitting the form', async () => {
    const user = userEvent.setup();
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(<PortfolioPage />);

    await user.type(screen.getByLabelText(/Your name/i), 'Alice');
    await user.type(screen.getByLabelText(/Your email/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/Your message/i), 'Hello, I want to hire you!');

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    vi.advanceTimersByTime(950);
    await waitFor(() => expect(toast.success).toHaveBeenCalledWith("Message sent! I'll get back to you shortly."));

    vi.useRealTimers();
  });
});
