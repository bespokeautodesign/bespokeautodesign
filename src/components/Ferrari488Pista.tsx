import React from 'react';

interface Ferrari488PistaProps {
  color?: string;
  filter?: string;
  className?: string;
}

export const Ferrari488Pista: React.FC<Ferrari488PistaProps> = ({ 
  color = '#dc2626', 
  filter = 'none',
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto transition-all duration-700 ease-in-out animate-pulse"
        style={{ filter }}
      >
        {/* Car body */}
        <path
          d="M120 280 L140 260 L180 250 L220 240 L280 235 L350 230 L420 235 L480 240 L520 250 L560 260 L580 280 L600 290 L620 300 L640 310 L660 320 L680 280 L690 270 L700 260 L720 250 L730 240 L740 250 L750 260 L760 270 L770 280 L780 290 L770 300 L760 310 L740 320 L720 330 L680 340 L640 350 L600 360 L560 350 L520 340 L480 330 L420 325 L350 320 L280 325 L220 330 L180 340 L140 350 L120 340 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Hood */}
        <path
          d="M280 235 L350 230 L420 235 L450 245 L480 250 L450 260 L420 265 L350 270 L280 265 L250 260 L280 250 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="1"
          opacity="0.9"
        />
        
        {/* Windshield */}
        <path
          d="M320 230 L380 225 L420 235 L400 250 L380 260 L320 265 L300 250 Z"
          fill="#87ceeb"
          stroke="#1a1a1a"
          strokeWidth="2"
          opacity="0.7"
        />
        
        {/* Side windows */}
        <path
          d="M450 245 L480 240 L520 250 L540 260 L520 270 L480 275 L450 270 Z"
          fill="#87ceeb"
          stroke="#1a1a1a"
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Front wheel */}
        <circle
          cx="200"
          cy="320"
          r="35"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="320"
          r="25"
          fill="#4a4a4a"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="320"
          r="15"
          fill="#6a6a6a"
        />
        
        {/* Rear wheel */}
        <circle
          cx="600"
          cy="320"
          r="35"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
        <circle
          cx="600"
          cy="320"
          r="25"
          fill="#4a4a4a"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <circle
          cx="600"
          cy="320"
          r="15"
          fill="#6a6a6a"
        />
        
        {/* Headlights */}
        <ellipse
          cx="150"
          cy="270"
          rx="20"
          ry="15"
          fill="#ffffff"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <ellipse
          cx="150"
          cy="270"
          rx="12"
          ry="8"
          fill="#f0f8ff"
        />
        
        {/* Taillights */}
        <ellipse
          cx="720"
          cy="275"
          rx="15"
          ry="12"
          fill="#ff4444"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Ferrari logo area */}
        <rect
          x="340"
          y="240"
          width="40"
          height="20"
          fill="#ffdd00"
          stroke="#1a1a1a"
          strokeWidth="1"
          rx="3"
        />
        
        {/* Side air intakes */}
        <path
          d="M480 260 L520 265 L530 275 L520 285 L480 280 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Rear spoiler */}
        <path
          d="M680 250 L720 245 L740 250 L730 260 L690 265 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Shadow */}
        <ellipse
          cx="400"
          cy="380"
          rx="300"
          ry="20"
          fill="#000000"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};