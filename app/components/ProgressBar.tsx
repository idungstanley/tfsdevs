import React from 'react';

const ProgressBar = () => {
  return (
    <div className="relative w-[120px] h-[3px] bg-[#684DF4] rounded-full">
      {/* Progress line */}
      <div className="absolute left-0 top-0 h-full w-3/4 bg-[#684DF4]"></div>

      {/* Circular handle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#684DF4] rounded-full"></div>
    </div>
  );
};

export default ProgressBar;
