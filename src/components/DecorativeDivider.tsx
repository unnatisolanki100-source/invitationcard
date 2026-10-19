import React from 'react';

interface DecorativeDividerProps {
  className?: string;
}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({ className = 'my-2' }) => {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      {/* Clean, unbroken botanical green hairline (matching natural stem tone, no diamond) */}
      <div className="h-[1.2px] w-36 sm:w-48 bg-gradient-to-r from-transparent via-[#558b2f]/50 to-transparent" />
    </div>
  );
};
