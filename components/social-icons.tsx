export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 8.5h2V5.4c-.35-.05-1.55-.15-2.96-.15-2.93 0-4.94 1.79-4.94 5.08v2.67H5.7v3.5h2.9V21h3.62v-4.5h2.78l.44-3.5h-3.22V10.7c0-1.01.28-1.7 1.28-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
