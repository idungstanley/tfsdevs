import { InfoCardProps } from '@/app/types/index.interface';
import React, { ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

interface InfoCardWithIconProps extends InfoCardProps {
  icon: ReactNode;
  styledHeading: ReactNode;
}

const InfoCardWithIcon: React.FC<InfoCardWithIconProps> = ({ styledHeading, icon, description }) => {
  return (
    <div className="relative bg-[#E0DBF8] p-6 rounded-2xl w-80 overflow-hidden border-gray-300 border h-[300px]">
      {/* Card Content */}
      <div className="flex flex-col gap-2">
        {styledHeading}
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <span className="absolute bottom-4 left-6">{icon}</span>

      {/* Button with Offset Circle */}
      <div className="absolute bottom-0 right-0 flex items-center justify-center h-fit w-fit rounded-tl-[20px] p-4 border-gray-300 border  bg-[#F7F5FF]">
        <div className="bg-white border border-gray-300 rounded-lg h-20 w-20 items-center justify-center flex">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default InfoCardWithIcon;
