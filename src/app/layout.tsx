import type { Metadata } from 'next';

import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';

import { defaultLocale } from '@/i18n/request';
import { Providers } from '@/providers';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nur Hidayat - Senior Frontend Developer',
  description:
    'Portfolio and profile of Nur Hidayat, Frontend Developer with 4+ years of experience building enterprise web systems.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let locale: string = defaultLocale;

  try {
    locale = await getLocale();
  } catch {
    // Fallback during static generation or when outside request context
  }

  return (
    <html suppressHydrationWarning className="h-full antialiased" lang={locale}>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-full flex flex-col font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
