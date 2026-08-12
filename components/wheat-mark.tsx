export function WheatMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4v22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {[6, 9.5, 13, 16.5, 20].map((y, i) => (
        <g key={y}>
          <path
            d={`M16 ${y} C 12 ${y - 1.5}, 10 ${y - 4.5}, 10.5 ${y - 7}`}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d={`M16 ${y} C 20 ${y - 1.5}, 22 ${y - 4.5}, 21.5 ${y - 7}`}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx={10.2 + i * 0.05} cy={y - 7.3} r="1.1" fill="currentColor" />
          <circle cx={21.8 - i * 0.05} cy={y - 7.3} r="1.1" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}
