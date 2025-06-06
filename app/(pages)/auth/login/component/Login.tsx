/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import Header from '@/app/components/text/Header';
import { SignIn } from '@/app/lib/action';
import { LoginProps } from '@/app/types/index.interface';
import { loginSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { MdOutlineLogin } from 'react-icons/md';
import { PiWarningOctagonBold } from 'react-icons/pi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: async (values: LoginProps) => {
      try {
        setIsLoading(true);
        await SignIn({
          email: values.email,
          password: values.password
        });
        router.push('/dashboard');
        window.location.reload();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error instanceof Error) {
          setError(error.message); // 👈 use error.message
        } else {
          setError('Something went wrong'); // fallback
        }
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setError('');
        }, 6000);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="md:w-[80%] w-full md:p-0 pt-0">
      <div className="text-left lg:my-4 mb-1">
        {error && (
          <div className="flex items-center gap-2 text-red-500">
            <PiWarningOctagonBold />
            <p>{error}!</p>
          </div>
        )}
        <Header text="Sign In" textColor="text-gray-700" textSize="text-[30px]" />
        <p className="text-gray-500">Enter your email address and password to log in to your dashboard</p>
      </div>
      <div className="flex flex-col gap-2 bg-white dark:bg-brand-dark rounded-lg ">
        <div className="text-left flex flex-col gap-2">
          <InputWithLabel
            name="email"
            placeholder="Enter your email to access you portal"
            label="Email"
            labelClasses="text-gray-700 font-semibold"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
          <InputWithLabel
            isError={!!formik.errors.password && formik.touched.password}
            errorMessage={formik.touched.password ? formik.errors.password : ''}
            label="Password"
            labelClasses="text-gray-900 font-semibold"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            hint="Must be at least 8 characters"
            trailingIcon={showPassword ? <FaEye className="text-gray-900" /> : <FaEyeSlash className="text-gray-900" />}
            name="password"
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            trailingClick={togglePasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex items-center justify-end w-full">
          <Link
            href="/auth/forgot-password"
            className="my-4 items-center justify-end text-[#684DF4] dark:text-[#684DF4] flex hover:text-[#684DF4]/80"
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            loading={isLoading}
            type="submit"
            label="Proceed to Dashboard"
            width="w-full"
            buttonStyle="custom"
            height="h-[48px]"
            customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
            icon={<MdOutlineLogin className="text-white" />}
            iconPosition="right"
          />
        </div>
      </div>
    </form>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
