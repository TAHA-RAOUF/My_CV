'use client';

import { useEffect, useState } from 'react';

export function PixelDino({ animate = false, size = 'md' }: { animate?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const [isRunning, setIsRunning] = useState(false);

  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setIsRunning(prev => !prev);
      }, 400);
      return () => clearInterval(interval);
    }
  }, [animate]);

  return (
    <div className={`${sizeMap[size]} relative inline-block ${animate ? 'dino-run' : ''}`}>
      <svg
        viewBox="0 0 44 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Dino body */}
        <rect x="18" y="0" width="4" height="4" fill="black" />
        <rect x="22" y="0" width="4" height="4" fill="black" />
        <rect x="26" y="0" width="4" height="4" fill="black" />
        
        {/* Head */}
        <rect x="30" y="0" width="4" height="4" fill="black" />
        <rect x="34" y="4" width="4" height="4" fill="black" />
        <rect x="38" y="8" width="4" height="4" fill="black" />
        <rect x="34" y="8" width="4" height="4" fill="black" />
        
        {/* Eye */}
        <rect x="34" y="8" width="2" height="2" fill="white" />
        
        {/* Mouth */}
        <rect x="38" y="12" width="4" height="4" fill="black" />
        
        {/* Neck and body */}
        <rect x="30" y="12" width="4" height="4" fill="black" />
        <rect x="26" y="12" width="4" height="4" fill="black" />
        <rect x="22" y="12" width="4" height="4" fill="black" />
        <rect x="18" y="16" width="4" height="4" fill="black" />
        <rect x="14" y="20" width="4" height="4" fill="black" />
        <rect x="10" y="24" width="4" height="4" fill="black" />
        <rect x="6" y="28" width="4" height="4" fill="black" />
        
        {/* Back */}
        <rect x="18" y="8" width="4" height="4" fill="black" />
        <rect x="14" y="12" width="4" height="4" fill="black" />
        <rect x="10" y="16" width="4" height="4" fill="black" />
        <rect x="6" y="20" width="4" height="4" fill="black" />
        <rect x="2" y="24" width="4" height="4" fill="black" />
        
        {/* Tail */}
        <rect x="2" y="28" width="4" height="4" fill="black" />
        <rect x="6" y="32" width="4" height="4" fill="black" />
        
        {/* Belly */}
        <rect x="10" y="28" width="4" height="4" fill="black" />
        <rect x="14" y="28" width="4" height="4" fill="black" />
        <rect x="18" y="28" width="4" height="4" fill="black" />
        <rect x="22" y="28" width="4" height="4" fill="black" />
        <rect x="26" y="28" width="4" height="4" fill="black" />
        <rect x="30" y="24" width="4" height="4" fill="black" />
        <rect x="34" y="20" width="4" height="4" fill="black" />
        <rect x="30" y="20" width="4" height="4" fill="black" />
        <rect x="26" y="20" width="4" height="4" fill="black" />
        <rect x="22" y="20" width="4" height="4" fill="black" />
        <rect x="18" y="24" width="4" height="4" fill="black" />
        <rect x="14" y="24" width="4" height="4" fill="black" />
        
        {/* Legs - alternating for run animation */}
        {isRunning ? (
          <>
            <rect x="26" y="32" width="4" height="4" fill="black" />
            <rect x="26" y="36" width="4" height="4" fill="black" />
            <rect x="14" y="32" width="4" height="4" fill="black" />
            <rect x="14" y="36" width="4" height="4" fill="black" />
            <rect x="14" y="40" width="4" height="4" fill="black" />
          </>
        ) : (
          <>
            <rect x="22" y="32" width="4" height="4" fill="black" />
            <rect x="22" y="36" width="4" height="4" fill="black" />
            <rect x="10" y="32" width="4" height="4" fill="black" />
            <rect x="10" y="36" width="4" height="4" fill="black" />
            <rect x="10" y="40" width="4" height="4" fill="black" />
          </>
        )}
      </svg>
    </div>
  );
}
