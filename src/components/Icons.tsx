import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const IconArrowRight = ({ size = 14, ...rest }: IconProps) => (
  <svg {...base(size, rest)} className={'arrow ' + (rest.className ?? '')}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconGithub = ({ size = 18, ...rest }: IconProps) => (
  <svg {...base(size, rest)} fill="currentColor" stroke="none" viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const IconShieldCheck = ({ size = 18, ...rest }: IconProps) => (
  <svg {...base(size, rest)}>
    <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Z" />
    <path d="m8.5 12 2.4 2.4L15.5 10" />
  </svg>
);

export const IconBadgeDollar = ({ size = 18, ...rest }: IconProps) => (
  <svg {...base(size, rest)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9.2c-.5-.7-1.4-1.2-2.5-1.2-1.5 0-2.7.8-2.7 2s1 1.7 2.7 2c1.8.3 2.8.9 2.8 2.1 0 1.3-1.3 2-2.8 2-1.2 0-2.2-.5-2.7-1.3" />
    <path d="M12 6.5v1.6M12 16v1.5" />
  </svg>
);

export const IconShieldAlert = ({ size = 18, ...rest }: IconProps) => (
  <svg {...base(size, rest)}>
    <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Z" />
    <path d="M12 8.5v4" />
    <path d="M12 15.6v.1" />
  </svg>
);

export const IconPlay = ({ size = 22, ...rest }: IconProps) => (
  <svg {...base(size, rest)} fill="currentColor" stroke="none">
    <path d="M8 5.5v13l11-6.5L8 5.5Z" />
  </svg>
);

export const IconStar = ({ size = 12, ...rest }: IconProps) => (
  <svg {...base(size, rest)} fill="currentColor" stroke="none">
    <path d="m12 2.5 2.95 6 6.6.96-4.78 4.66 1.13 6.58L12 17.6l-5.9 3.1 1.13-6.58L2.45 9.46l6.6-.96L12 2.5Z" />
  </svg>
);

export const IconExternal = ({ size = 12, ...rest }: IconProps) => (
  <svg {...base(size, rest)}>
    <path d="M9 5h10v10" />
    <path d="M19 5 9 15" />
    <path d="M15 19H5V9" />
  </svg>
);
