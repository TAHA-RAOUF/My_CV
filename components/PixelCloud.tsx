'use client';

export function PixelCloud({ size = 'md', animate = false }: { size?: 'sm' | 'md' | 'lg'; animate?: boolean }) {
  const sizeMap = {
    sm: 'w-12 h-6',
    md: 'w-20 h-10',
    lg: 'w-28 h-14'
  };

  return (
    <div className={`${sizeMap[size]} relative inline-block ${animate ? 'cloud-drift' : ''}`}>
      <svg
        viewBox="0 0 46 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Cloud pixels */}
        <rect x="8" y="4" width="4" height="4" fill="#D3D3D3" />
        <rect x="12" y="0" width="4" height="4" fill="#D3D3D3" />
        <rect x="16" y="0" width="4" height="4" fill="#D3D3D3" />
        <rect x="20" y="0" width="4" height="4" fill="#D3D3D3" />
        <rect x="24" y="4" width="4" height="4" fill="#D3D3D3" />
        <rect x="28" y="4" width="4" height="4" fill="#D3D3D3" />
        <rect x="32" y="4" width="4" height="4" fill="#D3D3D3" />
        <rect x="36" y="8" width="4" height="4" fill="#D3D3D3" />
        
        <rect x="4" y="8" width="4" height="4" fill="#D3D3D3" />
        <rect x="8" y="8" width="28" height="4" fill="#D3D3D3" />
        <rect x="0" y="12" width="40" height="2" fill="#D3D3D3" />
      </svg>
    </div>
  );
}
