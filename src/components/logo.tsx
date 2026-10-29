import { useId, type SVGProps } from "react";

export const Logo = ({ size = 40, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
  const id = useId();
  const bg = `${id}-bg`;
  const shine = `${id}-shine`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="UI Labs"
      {...props}
    >
      <defs>
        <linearGradient id={bg} x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.55" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id={shine} x1="24" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* tile */}
      <rect width="48" height="48" rx="12" fill={`url(#${bg})`} />
      <rect width="48" height="48" rx="12" fill={`url(#${shine})`} />
      <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" stroke="#fff" strokeOpacity="0.25" />

      {/* flask */}
      <path
        d="M19 11h10M20.5 11v8.6L13.2 32.4A3.2 3.2 0 0 0 16 37.2h16a3.2 3.2 0 0 0 2.8-4.8L27.5 19.6V11"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* liquid */}
      <path
        d="M16.4 29h15.2l2.1 3.6a1.6 1.6 0 0 1-1.4 2.4H15.7a1.6 1.6 0 0 1-1.4-2.4L16.4 29Z"
        fill="#fff"
        fillOpacity="0.9"
      />
      {/* bubbles */}
      <circle cx="22.5" cy="25" r="1.4" fill="#fff" fillOpacity="0.85" />
      <circle cx="26.5" cy="22" r="1" fill="#fff" fillOpacity="0.7" />
      <circle cx="35" cy="14" r="1.6" fill="#fff" />
    </svg>
  );
};
