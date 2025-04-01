import TextWithLinks from '@/app/components/text/TextWithLinks';
import React from 'react';
import Login from './component/Login';
import Image from 'next/image';
import Link from 'next/link';
import AuthTabs from '@/app/components/tabs/AuthTab';

const LoginPage = () => {
  return (
    <div className="text-white w-full h-full flex flex-col p-4">
      <AuthTabs />
      <div className="w-full mt-2 md:flex hidden">
        <TextWithLinks
          text="Not a fullSnackDev yet?"
          linkLabel="Enroll now!"
          linkRoute="/auth/enroll"
          textColor="text-gray-700"
          textPosition="md:justify-end justify-center font-[600]"
        />
      </div>
      <div className="flex items-center flex-col w-full h-full pt-10">
        <Link href="/" className="md:block hidden">
          <div className="items-center justify-center w-full flex hover:text-[#684DF4]">
            <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
            <Image src="/black-logo-text.svg" alt="logo" width={500} height={500} className="h-[90px] w-[100px]" />
          </div>
        </Link>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
