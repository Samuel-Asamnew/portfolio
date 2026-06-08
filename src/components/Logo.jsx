import React from 'react';

export default function Logo({ size = 32 }) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brand logo"
    >
      <rect x="4" y="4" width="40" height="40" rx="9" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.12" />
      <path d="M14 34c6-10 14-10 20 0" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="16" r="4.5" fill="var(--accent)" />
    </svg>
  );
}
