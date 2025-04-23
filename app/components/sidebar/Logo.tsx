import React from 'react';
import Image from 'next/image';

interface LogoProps {
  expanded: boolean;
}

const Logo: React.FC<LogoProps> = ({ expanded }) => {
  return (
    <div className="items-center justify-start w-full flex hover:text-[#684DF4]">
      <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
      {expanded && <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />}
    </div>
  );
};

export default Logo;
