import { TextWithLinksProps } from '@/app/types/index.interface';
import Link from 'next/link';
import React from 'react';

const TextWithLinks = ({
  linkRoute,
  linkLabel,
  text,
  textPosition = 'justify-center',
  textColor = 'text-black dark:text-white ',
  handleClick
}: TextWithLinksProps) => {
  return (
    <div className={`flex items-center gap-2 py-4 w-full ${textColor} ${textPosition}`}>
      <p className="lg:text-[16px] text-[14px] text-center">{text}</p>
      {linkRoute ? (
        <Link href={linkRoute} className="text-[#684DF4]">
          {linkLabel}
        </Link>
      ) : (
        <p className="font-normal text-[#684DF4] flex" onClick={handleClick}>
          {linkLabel}
        </p>
      )}
    </div>
  );
};

export default TextWithLinks;
