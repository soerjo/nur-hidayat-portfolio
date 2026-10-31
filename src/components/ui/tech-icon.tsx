import type { SVGProps } from 'react';

export type TechName =
  | 'Next.js'
  | 'React'
  | 'TypeScript'
  | 'JavaScript'
  | 'Zustand'
  | 'Redux'
  | 'Tailwind'
  | 'shadcn/ui'
  | 'Radix'
  | 'Vue'
  | 'Nuxt'
  | 'Astro'
  | 'Node'
  | 'Bun'
  | 'Workers'
  | 'Postgres'
  | 'MongoDB'
  | 'Redis'
  | 'Supabase'
  | 'Fastify'
  | 'Hono'
  | 'Vite'
  | 'Turborepo'
  | 'Docker'
  | 'Git'
  | 'GitHub'
  | 'Payload'
  | 'Sanity'
  | 'ChatGPT'
  | 'AG Grid'
  | 'Mapbox'
  | 'Figma'
  | 'Jest'
  | 'SonarLint'
  | 'Leaflet'
  | 'Laravel'
  | 'NestJS'
  | 'Bootstrap'
  | 'CodeIgniter'
  | 'Shopify'
  | 'Midtrans';

interface TechIconProps extends SVGProps<SVGSVGElement> {
  name: TechName | string;
  size?: number;
}

export function TechIcon({ name, size = 16, className = '', ...props }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // Next.js
  if (norm.includes('next')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 180 180" width={size} {...props}>
        <circle cx="90" cy="90" fill="currentColor" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.761a90.304 90.304 0 009.509-7.625z"
          fill="#fff"
        />
        <path d="M115 54h12v45.5h-12z" fill="#fff" />
      </svg>
    );
  }

  // React
  if (norm === 'react' || norm.includes('react')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height={size}
        viewBox="-11.5 -10.23174 23 20.46348"
        width={size}
        {...props}
      >
        <circle cx="0" cy="0" fill="#61dafb" r="2.05" />
        <g stroke="#61dafb" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 256 256" width={size} {...props}>
        <rect fill="#3178c6" height="256" rx="32" width="256" />
        <path
          d="M150.9 146.5c-4.4-2.8-10.2-5-17.4-5-8.4 0-14.7 4.1-14.7 11.6 0 7.8 7.2 11.2 18.7 15.9 19.4 7.8 28.1 17.5 28.1 33.1 0 20.3-16.2 33.8-40.9 33.8-13.8 0-25.3-3.4-32.8-7.8l6.3-17.5c6.6 4.1 16.2 7.2 26.2 7.2 10.3 0 17.5-5 17.5-12.8 0-8.8-7.8-12.2-20.6-17.5-17.5-7.2-26.2-16.9-26.2-31.9 0-19.1 15-32.8 38.8-32.8 11.9 0 21.6 2.8 28.1 6.2l-6.2 17.5h.2v.1zm-84-4.7H96v93.8H70.9v-93.8H44v-18.7h48.9v18.7h-26z"
          fill="#fff"
        />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 256 256" width={size} {...props}>
        <rect fill="#f7df1e" height="256" rx="32" width="256" />
        <path
          d="M67 197.5c7.3 4.2 16.4 7 26.4 7 13.9 0 22.8-6.7 22.8-21.7v-76.3H90.8v76.1c0 6.4-3.3 9.4-8.8 9.4-5.2 0-9.7-2.1-13.3-5.2l-1.7 10.7zm86.7-1.3c9.1 5.2 21.2 8.5 33.9 8.5 19.4 0 31.5-9.7 31.5-26.7 0-15.2-9.1-23.6-26.7-31.2-12.1-5.2-18.2-9.4-18.2-16.1 0-5.8 4.8-10.3 13.3-10.3 7.9 0 14.8 2.7 19.7 5.8l4.2-11.8c-5.8-3.3-14.8-5.8-24.8-5.8-18.5 0-29.7 10.3-29.7 25.5 0 14.5 9.1 23 25.5 30 13 5.5 19.4 9.7 19.4 17 0 6.7-5.5 11.5-15.2 11.5-9.7 0-18.5-3.6-24.8-7.6l-8.1 11.2z"
          fill="#000"
        />
      </svg>
    );
  }

  // Zustand
  if (norm.includes('zustand')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <circle cx="12" cy="12" fill="#583c27" r="10" />
        <circle cx="8" cy="11" fill="#fff" r="2.5" />
        <circle cx="16" cy="11" fill="#fff" r="2.5" />
        <circle cx="8" cy="11" fill="#000" r="1.2" />
        <circle cx="16" cy="11" fill="#000" r="1.2" />
        <ellipse cx="12" cy="15" fill="#f8b090" rx="3" ry="2" />
        <polygon fill="#000" points="11,14.5 13,14.5 12,15.5" />
      </svg>
    );
  }

  // Redux
  if (norm.includes('redux')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="#764abc"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        {...props}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 12.88c-.62.62-1.44.97-2.32.97-.88 0-1.7-.35-2.32-.97-.62-.62-.97-1.44-.97-2.32 0-.88.35-1.7.97-2.32.62-.62 1.44-.97 2.32-.97.88 0 1.7.35 2.32.97.62.62.97 1.44.97 2.32 0 .88-.35 1.7-.97 2.32z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38bdf8"
        />
      </svg>
    );
  }

  // shadcn/ui
  if (norm.includes('shadcn')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height={size}
        viewBox="0 0 256 256"
        width={size}
        {...props}
      >
        <path
          d="M208 128l-80 80M192 40L40 192"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
      </svg>
    );
  }

  // Radix UI
  if (norm.includes('radix')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        height={size}
        viewBox="0 0 25 25"
        width={size}
        {...props}
      >
        <path
          d="M12 25C18.6274 25 24 19.6274 24 13C24 6.37258 18.6274 1 12 1C5.37258 1 0 6.37258 0 13C0 19.6274 5.37258 25 12 25Z"
          fill="#111"
        />
        <path
          d="M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19Z"
          fill="#fff"
        />
      </svg>
    );
  }

  // Vue.js
  if (norm === 'vue' || norm.includes('vue')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 261.76 226.69" width={size} {...props}>
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.246l78.626 136.181L209.479.001z" fill="#34495e" />
      </svg>
    );
  }

  // Nuxt.js
  if (norm.includes('nuxt')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        {...props}
      >
        <path d="M10.5 17.5l-6-10.5h4.2l3.9 6.8 3.9-6.8h4.2l-6 10.5h-4.2z" fill="#00dc82" />
        <path d="M15 17.5l-4-7h3l2.5 4.4 2.5-4.4h3l-4 7h-3z" fill="#10b981" />
      </svg>
    );
  }

  // Astro
  if (norm.includes('astro')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M8.5 3.5l-5 13.5h3.2l1.3-3.8h5.9l1.3 3.8h3.3l-5-13.5h-5zm1.2 7l1.7-5.2 1.7 5.2H9.7z" fill="#ff5d01" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" fill="#5fa04e" />
      </svg>
    );
  }

  // Bun
  if (norm.includes('bun')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12 3c-4.97 0-9 4.03-9 9 0 3.86 2.44 7.15 5.86 8.39.5.09.68-.22.68-.48v-1.69c-2.4.52-2.9-1.16-2.9-1.16-.39-.99-.96-1.25-.96-1.25-.78-.54.06-.52.06-.52.87.06 1.32.89 1.32.89.77 1.32 2.02.94 2.51.72.08-.56.3-.94.55-1.16-1.92-.22-3.94-.96-3.94-4.27 0-.94.34-1.71.89-2.31-.09-.22-.39-1.1.08-2.28 0 0 .73-.23 2.38.89.69-.19 1.43-.29 2.17-.29.74 0 1.48.1 2.17.29 1.65-1.12 2.38-.89 2.38-.89.47 1.18.17 2.06.08 2.28.56.6 1 1.37 1 2.31 0 3.32-2.03 4.05-3.96 4.26.31.27.59.8.59 1.61v2.39c0 .27.18.58.69.48A9.006 9.006 0 0021 12c0-4.97-4.03-9-9-9z"
          fill="#fbf0df"
        />
      </svg>
    );
  }

  // Cloudflare Workers
  if (norm.includes('worker') || norm.includes('cloudflare')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M12 2l7.5 4.3v8.7L12 19.3l-7.5-4.3V6.3L12 2zm0 3.3L6.8 8v6l5.2 3 5.2-3V8L12 5.3z" fill="#f38020" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres') || norm.includes('sql')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3l-2.5 1.5L7 13.5 11 11V8.5h2V11l4 2.5-1.5 1.5-2.5-1.5v3h-2z"
          fill="#336791"
        />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12 2C11.5 3.5 6 9.5 6 15c0 3.31 2.69 6 6 6s6-2.69 6-6c0-5.5-5.5-11.5-6-13zm0 17.5c-2.48 0-4.5-2.02-4.5-4.5 0-3.32 3.12-7.5 4.5-9.15 1.38 1.65 4.5 5.83 4.5 9.15 0 2.48-2.02 4.5-4.5 4.5z"
          fill="#13aa52"
        />
      </svg>
    );
  }

  // Redis
  if (norm.includes('redis')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12 2l9 4.5-9 4.5-9-4.5L12 2zm0 6.5l6-3-6-3-6 3 6 3zm9 3l-9 4.5-9-4.5v3l9 4.5 9-4.5v-3zm0 5l-9 4.5-9-4.5v3l9 4.5 9-4.5v-3z"
          fill="#dc382d"
        />
      </svg>
    );
  }

  // Supabase
  if (norm.includes('supabase')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M13.5 2L3 14.5h8L10.5 22 21 9.5h-8z" fill="#3ecf8e" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M22.5 10.5c-.3-2-2.1-2.5-2.1-2.5-.6.5-.9 1.3-1.1 1.9-.9-.6-2.1-.7-3.1-.2V8h-2.5V5.5h-5V8H6.3v2.5H3.8V13H2c-.5 2 .5 4 2.5 5.5C8 21 16 21 20 17.5c2.5-2 2.8-5.5 2.5-7z"
          fill="#2496ed"
        />
      </svg>
    );
  }

  // Git / GitHub
  if (norm === 'github') {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        {...props}
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  if (norm.includes('git')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M21.6 10.9L13.1 2.4c-.5-.5-1.4-.5-1.9 0L9.4 4.2l2.4 2.4c.4-.1.9 0 1.2.3.4.4.5.9.3 1.3l2.3 2.3c.4-.2.9-.1 1.3.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-.9-.3-1.3l-2.2-2.2v4.4c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1.1V8.6c-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1L8.1 4.2 2.4 9.9c-.5.5-.5 1.4 0 1.9l8.5 8.5c.5.5 1.4.5 1.9 0l8.8-8.8c.5-.6.5-1.5 0-2.1z"
          fill="#f05032"
        />
      </svg>
    );
  }

  // Vite
  if (norm.includes('vite')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M12 2l9 3.5-9 16.5L3 5.5 12 2zm1 3.5l-6 2.3 5 11.2V5.5zm2 0v11.2l5-11.2-5 0z" fill="#646cff" />
      </svg>
    );
  }

  // Turborepo
  if (norm.includes('turbo')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <circle cx="12" cy="12" fill="none" r="9" stroke="#ef4444" strokeWidth="2.5" />
        <circle cx="12" cy="12" fill="#3b82f6" r="4.5" />
      </svg>
    );
  }

  // Figma
  if (norm.includes('figma')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M7.5 2a3.5 3.5 0 000 7H11V2H7.5z" fill="#f24e1e" />
        <path d="M12.5 2H16a3.5 3.5 0 010 7h-3.5V2z" fill="#ff7262" />
        <path d="M7.5 9a3.5 3.5 0 000 7H11V9H7.5z" fill="#a259ff" />
        <path d="M12.5 9H16a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5h-3.5V9z" fill="#1abcfe" />
        <path d="M7.5 16a3.5 3.5 0 000 7 3.5 3.5 0 003.5-3.5V16H7.5z" fill="#0acf83" />
      </svg>
    );
  }

  // ChatGPT
  if (norm.includes('chatgpt') || norm.includes('openai')) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        {...props}
      >
        <path d="M20.5 10.3c-.3-1.6-1.5-2.9-3.1-3.3-.4-.9-1.1-1.6-2-2.1-1.9-.9-4.2-.5-5.6 1-1.1-.3-2.3-.1-3.3.5-1.5.9-2.3 2.6-2 4.3-.8.5-1.4 1.3-1.6 2.2-.6 1.8 0 3.7 1.4 4.8.3 1.6 1.5 2.9 3.1 3.3.4.9 1.1 1.6 2 2.1 1.9.9 4.2.5 5.6-1 1.1.3 2.3.1 3.3-.5 1.5-.9 2.3-2.6 2-4.3.8-.5 1.4-1.3 1.6-2.2.7-1.8.1-3.7-1.4-4.8z" />
      </svg>
    );
  }
  // Fastify
  if (norm.includes('fastify')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path d="M19.5 7.5L12 3 4.5 7.5 12 12l7.5-4.5zM4.5 16.5L12 21l7.5-4.5L12 12 4.5 16.5z" fill="currentColor" />
      </svg>
    );
  }

  // Hono
  if (norm.includes('hono')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M12 2.5s-4.5 4.5-4.5 9a4.5 4.5 0 009 0c0-4.5-4.5-9-4.5-9zm0 11a2 2 0 110-4 2 2 0 010 4z"
          fill="#e36002"
        />
      </svg>
    );
  }

  // Payload CMS
  if (norm.includes('payload')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <polygon fill="currentColor" points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        <polygon fill="#fff" points="12,5 19,9.5 19,14.5 12,19 5,14.5 5,9.5" />
      </svg>
    );
  }

  // Sanity
  if (norm.includes('sanity')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <rect fill="#f03e2f" height="20" rx="4" width="20" x="2" y="2" />
        <path
          d="M7 16c0-2 2-3 5-3s5-1 5-3-2-3-5-3c-2 0-3.5.7-4.5 1.8l1.5 1.5C9.6 9.7 10.7 9 12 9c1.7 0 2.5.7 2.5 1.5s-.8 1.5-3.5 1.5c-3 0-5 1.3-5 4 0 2.2 1.8 3.5 5.5 3.5 1.8 0 3.2-.5 4.2-1.5l-1.5-1.5c-.8.8-1.7 1.2-2.7 1.2-2.5 0-3.5-.8-3.5-1.7z"
          fill="#fff"
        />
      </svg>
    );
  }

  // AG Grid
  if (norm.includes('grid')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <rect fill="#0080ff" height="8" rx="2" width="8" x="3" y="3" />
        <rect fill="#ff5a5f" height="8" rx="2" width="8" x="13" y="3" />
        <rect fill="#ffaa00" height="8" rx="2" width="8" x="3" y="13" />
        <rect fill="#00c853" height="8" rx="2" width="8" x="13" y="13" />
      </svg>
    );
  }

  // Mapbox
  if (norm.includes('map')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <circle cx="12" cy="12" fill="#4264fb" r="10" />
        <path d="M12 6l3.5 7.5-3.5-2-3.5 2L12 6z" fill="#fff" />
      </svg>
    );
  }

  // Laravel
  if (norm.includes('laravel')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M3 7.5L12 2l9 5.5v9L12 22l-9-5.5v-9zm9 2l5.5-3.3L12 4.1 6.5 7.2 12 9.5zm-7 2.3v5.2l6 3.7v-5.2l-6-3.7zm14 0l-6 3.7v5.2l6-3.7v-5.2z"
          fill="#ff2d20"
        />
      </svg>
    );
  }

  // Jest / Vitest
  if (norm.includes('jest') || norm.includes('vitest') || norm.includes('test')) {
    return (
      <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size} {...props}>
        <path
          d="M9 3h6v2h-1v4.5l4.5 7.5c.9 1.5-.2 3.5-2 3.5H7.5c-1.8 0-2.9-2-2-3.5L10 9.5V5H9V3zm2 4v3.2l-3.3 5.5c-.3.5 0 1.1.6 1.1h7.4c.6 0 .9-.6.6-1.1L13 10.2V7h-2z"
          fill="#c21325"
        />
      </svg>
    );
  }

  // Default fallback icon
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
