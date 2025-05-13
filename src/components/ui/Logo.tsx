import React from 'react';
import { MapPin } from 'lucide-react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isWhite = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${isWhite ? 'text-white' : 'text-red-700'}`}>
        <div className="relative z-10">
          <MapPin strokeWidth={2.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-600 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default Logo;