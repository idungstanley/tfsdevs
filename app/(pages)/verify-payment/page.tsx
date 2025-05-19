'use client';
import Button from '@/app/components/button/Button';
import { useVerifyPayment } from '@/app/features/bootcamp/bootcampService';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FadeLoader } from 'react-spinners';
import { PiSealWarningFill } from 'react-icons/pi';

const VerifyPayment = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const trxref = searchParams.get('trxref');
  const reference = searchParams.get('reference');
  const { isLoading, isError } = useVerifyPayment({ txtref: trxref as string, reference: reference as string });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
        <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
          <p className="text-lg font-bold text-gray-700">Verifying your payment...</p>
          <p className="text-sm text-gray-500 mb-5">Please wait while we confirm your transaction.</p>
          <FadeLoader color="#684DF4" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
        <PiSealWarningFill className="text-red-500 text-[50px]" />
        <p className="text-lg font-bold text-red-500">Payment verification failed</p>
        <p className="text-sm text-gray-500">Please try again later or contact support.</p>
        <Button
          label="Back to home"
          width="w-fit"
          onClick={() => router.push('/')}
          buttonStyle="custom"
          height="h-[45px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-md transition-transform duration-300 mt-5 ease-in-out hover:scale-110 hover:opacity-90"
        />
      </div>
    );
  }

  if (!trxref || !reference) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
        <PiSealWarningFill className="text-red-500 text-[50px]" />
        <p className="text-lg font-bold text-red-500">Invalid payment details</p>
        <p className="text-sm text-gray-500">Please check your payment link and try again.</p>
        <Button
          label="Back to home"
          width="w-fit"
          onClick={() => router.push('/')}
          buttonStyle="custom"
          height="h-[45px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-md transition-transform duration-300 mt-5 ease-in-out hover:scale-110 hover:opacity-90"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
      <BsPatchCheckFill className="text-green-500 text-[50px]" />
      <p className="text-2xl font-bold">Payment successful</p>
      <p className="text-lg max-w-2xl text-center">
        Thank you for joining the program! Your payment has been verified. You can now proceed to log in to your
        account.{' '}
      </p>
      <Button
        label="Login to dashboard"
        width="w-fit"
        buttonStyle="custom"
        onClick={() => router.push('/auth/login')}
        height="h-[45px]"
        labelSize="text-[15px] font-lg rounded-md"
        customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-md transition-transform duration-300 mt-10 ease-in-out hover:scale-110 hover:opacity-90"
      />
    </div>
  );
};

export default VerifyPayment;
