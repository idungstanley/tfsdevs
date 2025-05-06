'use client';
import { contactInformations } from '@/app/constants/courseOfferrings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StackedIcon from '../StackedIcon';

const ContactInfo = () => {
  return (
    <section className="flex flex-col md:flex-row md:h-[150px] h-full items-center relative">
      <Link href="/" className="w-full md:w-[30%] h-[100px] md:h-full justify-start flex items-center px-10">
        <div className="items-center justify-start md:justify-center w-full flex hover:text-[#684DF4]">
          <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
        </div>
      </Link>

      <div className="px-10 pt-5 flex items-center justify-center bg-slate-950 h-full w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-10 w-full h-full">
          {contactInformations.map((info, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer text-white">
              <StackedIcon Icon={info.icon} />
              <div className="flex flex-col gap-1">
                <p>{info.message}</p>
                <a href={info.link} className="font-[600] hover:text-black/90">
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
