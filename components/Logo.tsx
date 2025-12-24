
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, glow = true }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {glow && (
        <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full animate-pulse"></div>
      )}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-2xl"
      >
        {/* Futuristic 'L' Base / Third Mainland Bridge Element */}
        <path 
          d="M25 80L75 80L85 90H15L25 80Z" 
          fill="url(#logo-gradient)" 
          className="opacity-80"
        />
        
        {/* Main Skyscraper / 'L' Vertical */}
        <path 
          d="M25 20V80H40V25L25 20Z" 
          fill="url(#logo-gradient)"
        />
        
        {/* National Arts Theatre "Cap" Silhouette Arc */}
        <path 
          d="M35 45C35 45 50 35 65 45C80 55 90 55 90 55L85 65C85 65 75 65 60 55C45 45 35 55 35 55V45Z" 
          fill="url(#logo-gradient-alt)"
        />
        
        {/* Decorative Tech Lines */}
        <rect x="45" y="60" width="30" height="2" fill="white" fillOpacity="0.3" />
        <rect x="45" y="68" width="20" height="2" fill="white" fillOpacity="0.2" />
        
        {/* Glow Point */}
        <circle cx="25" cy="20" r="3" fill="#60a5fa" className="animate-pulse" />

        <defs>
          <linearGradient id="logo-gradient" x1="25" y1="20" x2="85" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="logo-gradient-alt" x1="35" y1="35" x2="90" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
