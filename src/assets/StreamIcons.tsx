import type { JSX } from 'react';

/** 24×24 colored stream icons — landing stream tabs & topic cards only. */
const S = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  xmlns: 'http://www.w3.org/2000/svg',
};

export const STREAM_ICONS: Record<string, JSX.Element> = {
  'computer-science': (
    <svg {...S} aria-hidden>
      <defs>
        <linearGradient id="stream-cs-bg" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#stream-cs-bg)" fillOpacity="0.18" />
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#3B82F6" strokeWidth="1.25" strokeOpacity="0.45" />
      <path
        d="M9 8.5L7 12l2 3.5M15 8.5l2 3.5-2 3.5M13.5 8.5h-3L9 12l1.5 3.5h3L15 12l-1.5-3.5z"
        fill="#2563EB"
        stroke="#1D4ED8"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'mechanical-engineering': (
    <svg {...S} aria-hidden>
      <defs>
        <linearGradient id="stream-mech-g" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB923C" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="8.5" fill="url(#stream-mech-g)" fillOpacity="0.15" />
      <path
        d="M12 5.5v2.2M12 16.3v2.2M5.5 12h2.2M16.3 12h2.2M7.4 7.4l1.55 1.55M15.05 15.05l1.55 1.55M7.4 16.6l1.55-1.55M15.05 8.95l1.55-1.55"
        stroke="#EA580C"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.25" fill="#F97316" stroke="#C2410C" strokeWidth="1.1" />
      <circle cx="12" cy="12" r="1.35" fill="#FFF7ED" fillOpacity="0.9" />
    </svg>
  ),
  'basic-science': (
    <svg {...S} aria-hidden>
      <circle cx="12" cy="12" r="2.75" fill="#10B981" stroke="#059669" strokeWidth="0.75" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#14B8A6" strokeWidth="1.35" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#06B6D4" strokeWidth="1.35" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#22C55E" strokeWidth="1.35" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1" fill="#ECFDF5" />
    </svg>
  ),
  'electrical-engineering': (
    <svg {...S} aria-hidden>
      <defs>
        <linearGradient id="stream-elec-g" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="1" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      <path
        d="M14 3.5L8.5 13h4l-1.5 7.5L17.5 11h-4l1.5-7.5z"
        fill="url(#stream-elec-g)"
        stroke="#CA8A04"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'electronics-communication': (
    <svg {...S} aria-hidden>
      <path d="M12 4.5v3.5" stroke="#7C3AED" strokeWidth="1.65" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.1" fill="#A855F7" />
      <path
        d="M5.5 12c2.8-4.8 5.6-7 6.5-7s3.7 2.2 6.5 7c-2.8 4.8-5.6 7-6.5 7s-3.7-2.2-6.5-7z"
        fill="#A855F7"
        fillOpacity="0.12"
        stroke="#9333EA"
        strokeWidth="1.35"
      />
      <path d="M8 12a4 4 0 018 0" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 12a2.5 2.5 0 015 0" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.15" fill="#6D28D9" />
    </svg>
  ),
  'civil-engineering': (
    <svg {...S} aria-hidden>
      <rect x="3" y="19" width="18" height="2" rx="0.75" fill="#A8A29E" />
      <rect x="5" y="12" width="5" height="7" rx="0.75" fill="#78716C" />
      <rect x="14" y="8" width="5" height="11" rx="0.75" fill="#57534E" />
      <rect x="9" y="5" width="6" height="14" rx="0.75" fill="#44403C" />
      <rect x="10.5" y="7" width="1.5" height="2" rx="0.25" fill="#D6D3D1" />
      <rect x="13" y="7" width="1.5" height="2" rx="0.25" fill="#D6D3D1" />
    </svg>
  ),
  'chemical-engineering': (
    <svg {...S} aria-hidden>
      <path
        d="M9 4h6l-2 11.2c1.35.95 2.2 2.5 2.2 4.3a4 4 0 01-8 0c0-1.8.85-3.35 2.2-4.3L9 4z"
        fill="#4ADE80"
        fillOpacity="0.35"
        stroke="#16A34A"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M10 4h4" stroke="#15803D" strokeWidth="1.35" strokeLinecap="round" />
      <ellipse cx="12" cy="17.2" rx="3" ry="1.4" fill="#22C55E" />
      <path d="M12 8v5" stroke="#15803D" strokeWidth="0.75" strokeOpacity="0.5" />
    </svg>
  ),
  'data-science-ai': (
    <svg {...S} aria-hidden>
      <path
        d="M12 4.5c-3.2 0-5.8 2-5.8 4.8 0 1.6.9 3 2.4 3.8-.7.9-1.1 2-1.2 3.2-.15 1.7 1.3 3 3 2.8.6 1 1.7 1.7 2.9 1.7 1.3 0 2.5-.8 3-2 1.4.35 2.8-.7 2.9-2.2.1-1.1-.1-2.2-.8-3.1 1.6-.85 2.8-2.4 2.8-4.2 0-2.8-2.6-4.8-5.8-4.8z"
        fill="#F472B6"
        fillOpacity="0.22"
        stroke="#DB2777"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5c.8-1.2 2.2-1.2 3 0M13.5 10.5c.8-1.2 2.2-1.2 3 0"
        stroke="#BE185D"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="10" r="0.9" fill="#EC4899" />
      <circle cx="14.5" cy="10" r="0.9" fill="#EC4899" />
    </svg>
  ),
  cybersecurity: (
    <svg {...S} aria-hidden>
      <defs>
        <linearGradient id="stream-sec-g" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path
        d="M12 3L5.5 6v5.2c0 3.8 2.8 6.4 6.5 8.3 3.7-1.9 6.5-4.5 6.5-8.3V6L12 3z"
        fill="url(#stream-sec-g)"
        fillOpacity="0.2"
        stroke="#059669"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5l2 2 4.5-4.5"
        stroke="#047857"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'aptitude-placement': (
    <svg {...S} aria-hidden>
      <path d="M5 10.5h14v2H5v-2z" fill="#1D4ED8" />
      <path d="M12 4.5L5 10.5h14L12 4.5z" fill="#3B82F6" stroke="#2563EB" strokeWidth="0.75" strokeLinejoin="round" />
      <rect x="10" y="12.5" width="4" height="6.5" rx="0.75" fill="#1E40AF" />
      <path d="M12 4.5v2.5" stroke="#FBBF24" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.25" fill="#F59E0B" />
    </svg>
  ),
};
