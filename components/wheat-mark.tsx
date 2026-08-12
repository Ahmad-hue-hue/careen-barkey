export function WheatMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* stem */}
      <path
        d="M16 27V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* left side stalks */}
      <path
        d="M16 12C13.8 11 12 9.6 11.3 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 16.5C13.4 15.4 11.3 13.7 10.5 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 21C13.2 19.8 11 17.9 10.1 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* right side stalks */}
      <path
        d="M16 12C18.2 11 20 9.6 20.7 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 16.5C18.6 15.4 20.7 13.7 21.5 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 21C18.8 19.8 21 17.9 21.9 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* grains */}
      <ellipse cx="10.9" cy="6.4" rx="1.2" ry="1.9" transform="rotate(-34 10.9 6.4)" fill="currentColor" />
      <ellipse cx="21.1" cy="6.4" rx="1.2" ry="1.9" transform="rotate(34 21.1 6.4)" fill="currentColor" />
      <ellipse cx="10.1" cy="10.5" rx="1.15" ry="1.8" transform="rotate(-30 10.1 10.5)" fill="currentColor" />
      <ellipse cx="21.9" cy="10.5" rx="1.15" ry="1.8" transform="rotate(30 21.9 10.5)" fill="currentColor" />
      <ellipse cx="9.7" cy="14.6" rx="1.1" ry="1.7" transform="rotate(-26 9.7 14.6)" fill="currentColor" />
      <ellipse cx="22.3" cy="14.6" rx="1.1" ry="1.7" transform="rotate(26 22.3 14.6)" fill="currentColor" />
      {/* base knot */}
      <path
        d="M13.4 26.2L18.6 24.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
