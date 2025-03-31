import React from 'react';

const StackedIcon = ({ Icon }: { Icon: React.ElementType }) => {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Back Square (Shadow) */}
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-[#0E1225] rounded-md transition-all group-hover:top-0 group-hover:left-0 duration-300"></div>

      {/* Front Square (Main Icon) */}
      <div className="relative w-16 h-16 bg-white rounded-md flex items-center justify-center shadow-lg">
        {/* Phone Icon */}
        <Icon className="text-[#684DF4] text-3xl" />
      </div>
    </div>
  );
};

export default StackedIcon;
