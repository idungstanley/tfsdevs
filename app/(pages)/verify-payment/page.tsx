'use client';
import Button from '@/app/components/button/Button';
import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FadeLoader } from 'react-spinners';

const VerifyPayment = () => {
  const loading = false;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
        <div className="flex flex-col items-center justify-center h-screen bg-[#111111] text-white w-full gap-4">
          <p className="text-2xl">Verifying payment...</p>
          <FadeLoader color="#684DF4" />
        </div>
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
        height="h-[45px]"
        labelSize="text-[15px] font-lg rounded-md"
        customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-md transition-transform duration-300 mt-10 ease-in-out hover:scale-110 hover:opacity-90"
      />
    </div>
  );
};

export default VerifyPayment;
