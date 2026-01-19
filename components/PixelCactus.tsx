'use client';

export function PixelCactus({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 'w-8 h-12',
    md: 'w-12 h-16',
    lg: 'w-16 h-24'
  };

  return (
    <div className={`${sizeMap[size]} relative inline-block`}>
      <svg
        viewBox="0 0 25 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Main stem */}
        <rect x="8" y="8" width="4" height="36" fill="black" />
        <rect x="12" y="8" width="4" height="36" fill="black" />
        
        {/* Left arm */}
        <rect x="0" y="16" width="4" height="8" fill="black" />
        <rect x="4" y="16" width="4" height="12" fill="black" />
        <rect x="8" y="20" width="4" height="4" fill="black" />
        
        {/* Right arm */}
        <rect x="20" y="20" width="4" height="8" fill="black" />
        <rect x="16" y="20" width="4" height="12" fill="black" />
        <rect x="12" y="24" width="4" height="4" fill="black" />
        
        {/* Top */}
        <rect x="8" y="4" width="8" height="4" fill="black" />
        
        {/* Base */}
        <rect x="8" y="44" width="8" height="4" fill="black" />
      </svg>
    </div>
  );
}
