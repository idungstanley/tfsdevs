'use client';
import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import { useResetPasswordMutation } from '@/app/features/auth/authService';
import { resetSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoFingerPrint } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TbPassword, TbPasswordFingerprint } from 'react-icons/tb';

interface ResetPasswordProps {
  newPassword: string;
  confirmNewPassword: string;
}

const ResetPassword = () => {
  const { mutateAsync, isPending } = useResetPasswordMutation();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const params = useSearchParams();
  const token = params.get('token') || '';
  const email = params.get('email') || '';

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: ''
    },
    validateOnBlur: true,
    validationSchema: resetSchema,
    onSubmit: async (values: ResetPasswordProps) => {
      await mutateAsync({
        email,
        token,
        password: values.newPassword,
        confirmPassword: values.confirmNewPassword
      });
    }
  });

  return (
    <div className="flex flex-col w-full items-center max-w-3xl gap-6">
      <div className="flex flex-col gap-2 w-full text-left md:w-2/3">
        <span className="border text-4xl border-gray-300 flex items-center justify-center rounded-lg size-12 text-left text-[#684DF4]">
          <IoFingerPrint />
        </span>
        <h1 className="md:text-3xl text-2xl font-bold text-slate-900">Reset your passord</h1>
        <p className="text-slate-600 text-sm">Create a new password for your account below.</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="w-full md:w-2/3">
        <div className="text-left flex flex-col gap-2 w-full">
          <InputWithLabel
            name="email"
            placeholder="Enter your email"
            labelClasses="text-gray-700 font-semibold"
            classes="border px-2 text-[15px] text-gray-700 border border-gray-200"
            value={email}
            leadingIcon={<MdEmail className="text-gray-500" />}
            disabled
            width="w-full"
            onChange={() => ({})}
            onBlur={() => {}}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="newPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            labelClasses="text-gray-700 font-semibold"
            classes="border px-2 text-[15px] text-gray-700 border border-gray-200"
            value={formik.values.newPassword}
            isError={!!formik.errors.newPassword && formik.touched.newPassword}
            errorMessage={formik.touched.newPassword ? formik.errors.newPassword : ''}
            leadingIcon={<TbPasswordFingerprint className="text-gray-900" />}
            trailingIcon={
              showPassword ? (
                <FaEye className="text-gray-900" onClick={togglePasswordVisibility} />
              ) : (
                <FaEyeSlash className="text-gray-900" onClick={togglePasswordVisibility} />
              )
            }
            width="w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="confirmNewPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm new password"
            leadingIcon={<TbPassword className="text-gray-900" />}
            labelClasses="text-gray-700 font-semibold"
            classes="border px-2 text-[15px] text-gray-700 border border-gray-200"
            value={formik.values.confirmNewPassword}
            isError={!!formik.errors.confirmNewPassword && formik.touched.confirmNewPassword}
            errorMessage={formik.touched.confirmNewPassword ? formik.errors.confirmNewPassword : ''}
            trailingIcon={
              showConfirmPassword ? (
                <FaEye className="text-gray-900" onClick={toggleConfirmPasswordVisibility} />
              ) : (
                <FaEyeSlash className="text-gray-900" onClick={toggleConfirmPasswordVisibility} />
              )
            }
            width="w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
            <Button
              loading={isPending}
              type="submit"
              label="Change password"
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
      </form>
    </div>
  );
};

export default ResetPassword;
