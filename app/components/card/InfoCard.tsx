import React from 'react';
import Button from '../button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { InfoCardProps } from '@/app/types/index.interface';


const InfoCard: React.FC<InfoCardProps> = ({ number, title, description, buttonText }) => {
  return (
    <div className="relative bg-[#E0DBF8] p-6 rounded-2xl w-80 overflow-hidden">
      {/* Card Content */}
      <h2 className="text-4xl font-bold text-black">
        {number}
        <span className="text-black">+</span>
      </h2>
      <h3 className="text-[20px] font-bold text-black mt-2">{title}</h3>
      <p className="text-gray-600 mt-1 text-[14px] text-wrap w-[50%]">{description}</p>

      {/* Button with Offset Circle */}
      <div className="absolute bottom-0 right-0 flex items-center justify-center h-[60px] w-[55%] rounded-tl-[20px] p-2  bg-[#F7F5FF]">
        <Button
          label={buttonText}
          width="w-fit"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-white bg-gray-900 px-2 rounded-full"
          icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default InfoCard;
