import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  expanded: boolean;
}

const Logo: React.FC<LogoProps> = ({ expanded }) => {
  return (
    <Link href="/" className="items-center cursor-pointer w-fit flex hover:text-[#684DF4]">
      <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
      {expanded && <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px] hidden dark:block" />}
      {expanded && <Image src="/black-logo.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px] block dark:hidden" />}

    </Link>
  );
};

export default Logo;
