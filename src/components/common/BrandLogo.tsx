import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Water Droplet Tech Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-6 h-6 text-white drop-shadow"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Drop */}
          <path
            d="M16 3C16 3 7 14.5 7 20.5C7 25.7467 11.0294 30 16 30C20.9706 30 25 25.7467 25 20.5C25 14.5 16 3 16 3Z"
            fill="currentColor"
          />
          {/* Inner Purity Swirl */}
          <path
            d="M16 7C16 7 10 16 10 20.5C10 24 12.8 26.8 16.5 26.8C18 26.8 17.5 24 19 22C20.5 20 22 20 22 20C22 15 16 7 16 7Z"
            fill="#E0F2FE"
            fillOpacity="0.85"
          />
          {/* Tech Sparkle / Molecule dot */}
          <circle cx="19" cy="17.5" r="2.2" fill="#0369A1" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-tight">
          <span className="font-extrabold tracking-tight text-slate-900 text-lg sm:text-xl font-['Sora']">
            AJIT <span className="text-sky-600 font-black">AQUA</span>
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-slate-700">
          APPLIANCES • PRAYAGRAJ
        </span>
      </div>
    </Link>
  );
};
