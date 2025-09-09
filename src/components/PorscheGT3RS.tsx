import React from 'react';

interface PorscheGT3RSProps {
  color?: string;
  filter?: string;
  className?: string;
}

export const PorscheGT3RS: React.FC<PorscheGT3RSProps> = ({ 
  color = '#4ade80', 
  filter = 'none',
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 900 500"
        className="w-full h-auto transition-all duration-700 ease-in-out"
        style={{ filter }}
      >
        {/* Car shadow */}
        <ellipse
          cx="450"
          cy="470"
          rx="350"
          ry="25"
          fill="#000000"
          opacity="0.3"
        />
        
        {/* Main body */}
        <path
          d="M150 350 L180 330 L220 310 L280 295 L350 285 L420 280 L480 280 L550 285 L620 295 L680 310 L720 330 L750 350 L770 370 L780 390 L770 410 L750 420 L720 430 L680 440 L620 445 L550 448 L480 450 L420 448 L350 445 L280 440 L220 430 L180 420 L150 410 L140 390 L150 370 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Hood section */}
        <path
          d="M280 295 L350 285 L420 280 L480 280 L550 285 L620 295 L580 305 L520 310 L480 312 L440 310 L380 305 L320 300 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.9"
        />
        
        {/* Roof line */}
        <path
          d="M350 285 L420 275 L480 270 L540 275 L580 285 L570 295 L540 300 L480 305 L420 300 L390 295 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.85"
        />
        
        {/* Front windshield */}
        <path
          d="M380 285 L420 275 L480 270 L520 275 L560 285 L540 295 L480 300 L420 295 L400 290 Z"
          fill="#87ceeb"
          stroke="#1a1a1a"
          strokeWidth="2"
          opacity="0.7"
        />
        
        {/* Side windows */}
        <path
          d="M580 305 L620 315 L650 325 L670 340 L650 355 L620 360 L580 355 Z"
          fill="#87ceeb"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.6"
        />
        
        <path
          d="M280 305 L320 315 L250 325 L230 340 L250 355 L280 360 L320 355 Z"
          fill="#87ceeb"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.6"
        />
        
        {/* Front wheel */}
        <circle
          cx="250"
          cy="400"
          r="45"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
        <circle
          cx="250"
          cy="400"
          r="35"
          fill="#3a3a3a"
          stroke="#2a2a2a"
          strokeWidth="2"
        />
        <circle
          cx="250"
          cy="400"
          r="25"
          fill="#4a4a4a"
        />
        
        {/* Front brake disc */}
        <circle
          cx="250"
          cy="400"
          r="30"
          fill="none"
          stroke="#666"
          strokeWidth="2"
        />
        <circle
          cx="250"
          cy="400"
          r="15"
          fill="#ff4444"
          opacity="0.8"
        />
        
        {/* Rear wheel */}
        <circle
          cx="650"
          cy="400"
          r="45"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
        <circle
          cx="650"
          cy="400"
          r="35"
          fill="#3a3a3a"
          stroke="#2a2a2a"
          strokeWidth="2"
        />
        <circle
          cx="650"
          cy="400"
          r="25"
          fill="#4a4a4a"
        />
        
        {/* Rear brake disc */}
        <circle
          cx="650"
          cy="400"
          r="30"
          fill="none"
          stroke="#666"
          strokeWidth="2"
        />
        <circle
          cx="650"
          cy="400"
          r="15"
          fill="#ff4444"
          opacity="0.8"
        />
        
        {/* Front headlights */}
        <ellipse
          cx="200"
          cy="340"
          rx="25"
          ry="20"
          fill="#ffffff"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="340"
          rx="15"
          ry="12"
          fill="#f0f8ff"
        />
        
        {/* Taillights */}
        <ellipse
          cx="750"
          cy="345"
          rx="20"
          ry="15"
          fill="#ff4444"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <ellipse
          cx="750"
          cy="365"
          rx="20"
          ry="15"
          fill="#ff4444"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Porsche logo area */}
        <rect
          x="460"
          y="285"
          width="40"
          height="20"
          fill="#ffdd00"
          stroke="#1a1a1a"
          strokeWidth="1"
          rx="3"
        />
        
        {/* Front air intakes */}
        <path
          d="M200 360 L240 365 L250 375 L240 385 L200 380 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Side air intakes */}
        <path
          d="M580 330 L620 335 L630 345 L620 355 L580 350 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        <path
          d="M280 330 L320 335 L270 345 L280 355 L320 350 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Rear spoiler (GT3 RS signature) */}
        <path
          d="M700 320 L750 315 L780 320 L785 330 L780 340 L750 345 L700 340 L695 330 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Side text area (GT3 RS) */}
        <text
          x="580"
          y="380"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#1a1a1a"
          opacity="0.3"
        >
          GT3 RS
        </text>
        
        {/* Front splitter */}
        <path
          d="M150 380 L200 385 L250 390 L200 395 L150 390 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Side skirts */}
        <path
          d="M280 420 L380 415 L480 413 L580 415 L680 420 L650 430 L580 435 L480 437 L380 435 L280 430 Z"
          fill={color}
          stroke="#1a1a1a"
          strokeWidth="1.5"
          opacity="0.9"
        />
        
        {/* Rear diffuser */}
        <path
          d="M680 420 L750 425 L780 430 L750 440 L680 435 Z"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};