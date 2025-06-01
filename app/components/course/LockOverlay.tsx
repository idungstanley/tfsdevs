'use client';
import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface LockOverlayProps {
  className?: string;
}

const LockOverlay: React.FC<LockOverlayProps> = ({ className = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="relative">
        <div className="bg-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-110">
          <Lock className="w-6 h-6 text-gray-800" />
        </div>

        {showTooltip && (
          <div
            className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded shadow-lg whitespace-nowrap z-10 animate-fadeIn"
            style={{ animationDuration: '200ms' }}
          >
            Coming soon
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LockOverlay;
