'use client';
import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoFingerPrint } from 'react-icons/io5';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col w-full items-center max-w-3xl gap-6">
      <div className="flex flex-col gap-3 w-full text-left md:w-2/3">
        <span className="border text-4xl border-gray-300 flex items-center justify-center rounded-lg size-12 text-left text-[#684DF4]">
          <IoFingerPrint />
        </span>
        <h1 className="md:text-3xl text-2xl font-bold text-slate-900">Forgot Passord?</h1>
        <p className="text-slate-600 text-sm">Enter your email and we will send you link to reset your password</p>
      </div>

      <div className="text-left flex flex-col gap-2 w-full md:w-2/3">
        <InputWithLabel
          name="email"
          placeholder="Enter your email to access you portal"
          labelClasses="text-gray-700 font-semibold"
          classes="border px-2 text-[15px] text-gray-700 border border-gray-200"
          value={email}
          width="w-full"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {}}
          height="h-[40px] rounded-lg"
        />
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            //   loading={isLoading}
            type="submit"
            label="Reset password"
            width="w-full"
            buttonStyle="custom"
            height="h-[48px]"
            customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
            iconPosition="right"
          />
        </div>
        <div className="flex items-center mt-3 justify-center text-slate-700 hover:text-[#684DF4] cursor-pointer">
          <a href="/auth/login" className="flex items-center gap-2">
            <FaArrowLeftLong />
            <p>Back to login</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
