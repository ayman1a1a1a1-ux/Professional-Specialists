import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'stacked';
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-12',
  variant = 'full',
  dark = false
}) => {
  const [imageError, setImageError] = useState(false);

  // High-fidelity fallback SVG in case image doesn't load
  const FallbackEmblem = () => (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto aspect-square select-none"
    >
      <defs>
        <linearGradient id="blueRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="greenRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="skylineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="skylineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="skylineGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Outer swoosh rings */}
      <path
        d="M 230 45 C 315 50, 365 110, 365 200 C 365 285, 305 345, 215 350 C 180 352, 140 340, 110 320"
        stroke="url(#greenRing)"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 240 70 C 300 78, 340 130, 340 200 C 340 270, 290 325, 220 330"
        stroke="#10b981"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 175 105 C 180 65, 220 45, 270 45"
        stroke="url(#blueRing)"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 120 310 C 95 270, 95 220, 100 180"
        stroke="url(#blueRing)"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />

      {/* Skyline & Arrow */}
      <rect x="110" y="295" width="220" height="8" rx="4" fill="#60a5fa" />
      <polygon points="140,295 155,130 160,130 175,295" fill="url(#skylineGrad3)" />
      <polygon points="154,130 157.5,95 161,130" fill="#2563eb" />
      <circle cx="157.5" cy="165" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      <polygon points="180,295 180,120 197,120 197,295" fill="url(#skylineGrad2)" />
      <polygon points="197,295 197,120 214,120 214,295" fill="url(#skylineGrad1)" />
      <path d="M 183 120 C 183 175, 211 175, 211 120 Z" fill="#ffffff" />
      <polygon points="218,295 218,110 238,135 238,295" fill="url(#skylineGrad3)" />
      <polygon points="245,295 245,100 270,105 270,295" fill="url(#skylineGrad2)" />
      <polygon points="274,295 274,90 295,95 295,295" fill="url(#skylineGrad3)" />

      {/* Growth Arrow */}
      <path
        d="M 125 275 L 195 225 L 245 255 L 325 170 L 325 195 L 350 160 L 315 155 L 325 170 L 245 240 L 195 210 L 125 260 Z"
        fill="url(#arrowGrad)"
      />
    </svg>
  );

  // Original logo image as provided by user
  const OriginalLogoImage = ({ imgClassName = 'h-full w-auto object-contain' }: { imgClassName?: string }) => {
    if (imageError) {
      return <FallbackEmblem />;
    }
    return (
      <img
        src="./logo.png"
        alt="شعار المتخصصون المهنيون للإستشارات المهنية - س.ت: 7052765331"
        className={imgClassName}
        onError={() => setImageError(true)}
        referrerPolicy="no-referrer"
      />
    );
  };

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <OriginalLogoImage imgClassName="h-full w-auto object-contain max-h-full drop-shadow-sm" />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <div className="h-20 w-auto">
          <OriginalLogoImage imgClassName="h-20 w-auto object-contain" />
        </div>
      </div>
    );
  }

  // Full default layout - renders the exact original corporate logo
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="h-full w-auto flex items-center justify-center p-1 rounded-xl bg-white/95 shadow-sm border border-slate-200/60">
        <OriginalLogoImage imgClassName="h-full w-auto object-contain max-h-16" />
      </div>
    </div>
  );
};
