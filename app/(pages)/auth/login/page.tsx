'use client'
import TextWithLinks from '@/app/components/text/TextWithLinks';
import React, { useTransition } from 'react';
import Login from './component/Login';
import Image from 'next/image';
import Link from 'next/link';
import AuthTabs from '@/app/components/tabs/AuthTab';
import { ImHome } from 'react-icons/im';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

const LoginPage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  const handleRouteToHome = () => {
    history.pushState(null, "", "/")
    startTransition(() => {
      router.push('/');
    });
  };

  if (isPending) {
    return <Loading/>
  }

  return (
    <div className="text-white w-full h-full flex flex-col p-4">
      <AuthTabs />
      <div className="w-full mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
        <div
          onClick={handleRouteToHome}
          className="hover:text-[#684DF4] text-gray-800 flex items-center gap-2 cursor-pointer w-full"
        >
          <ImHome className="hidden md:block" /> <IoMdArrowRoundBack className="md:hidden block" /> <p>Back to home</p>
        </div>
        <TextWithLinks
          text="Not a fullSnackDev yet?"
          linkLabel="Enroll now!"
          linkRoute="/auth/enroll"
          textColor="text-gray-700"
          textPosition="md:justify-end justify-center font-[600] hidden md:flex"
        />
      </div>
      <div className="flex items-center flex-col w-full h-full md:pt-10">
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
