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
      <img
        src="/lovable-uploads/91bdd6c7-9fa5-400d-be4b-fdbb223d5f74.png"
        alt="Porsche GT3 RS"
        className="w-full h-auto transition-all duration-700 ease-in-out rounded-lg shadow-2xl"
        style={{
          filter: filter,
        }}
      />
      
      {/* Color overlay for non-clear PPF options */}
      {color !== '#4ade80' && filter !== 'none' && (
        <div
          className="absolute inset-0 rounded-lg transition-all duration-700 ease-in-out mix-blend-overlay opacity-20"
          style={{
            backgroundColor: color,
          }}
        />
      )}
    </div>
  );
};