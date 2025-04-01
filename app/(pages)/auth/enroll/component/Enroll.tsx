'use client';
import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import Header from '@/app/components/text/Header';
import Toast from '@/app/lib/Toast';
import { LoginProps } from '@/app/types/index.interface';
import { loginSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa6';

const Enroll = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        console.log(values);
        // await SignIn({
        //   email: values.email,
        //   password: values.password
        // });
        window.location.reload(); // This will reload the current page
        // Re-fetch the session immediately
      } catch (error) {
        if (error) {
          return toast.custom((t) => <Toast type="error" title="Credentials are not valid" toastId={t.id} />, {
            duration: 1000
          });
        }
        return toast.custom((t) => <Toast type="error" title="Something went wrong" toastId={t.id} />, {
          duration: 1000
        });
        // throw error;
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="md:w-[80%] w-full p-4 md:p-0">
      <div className="text-left lg:my-4 mb-1">
        <Header text="Enroll" textColor="text-gray-700" textSize="text-[30px]" />
        <p className="text-gray-500 md:w-[80%] w-full text-wrap">
          Enter your email address and password to log in to your dashboard
        </p>
      </div>
      <div className="flex flex-col gap-6 bg-white dark:bg-brand-dark rounded-lg ">
        <div className="text-left flex gap-5  flex-col md:flex-row">
          <InputWithLabel
            name="firstName"
            placeholder="Enter your first name"
            label="First Name"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="lastName"
            placeholder="Enter your last name"
            label="Last Name"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="text-left flex gap-5  flex-col md:flex-row">
          <InputWithLabel
            name="countryOfResidence"
            placeholder="Country of Residence"
            label="Country of Residence"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="stateOfResidence"
            placeholder="State of Residence"
            label="State of Residence"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="text-left flex gap-5  flex-col md:flex-row">
          <InputWithLabel
            name="email"
            placeholder="Enter your email to access you portal"
            label="Email"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="phoneNumber"
            placeholder="Phone Number"
            label="Phone Number"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-gray-200'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="mt-[15px] text-gray-700 flex gap-5  flex-col md:flex-row w-full">
          <InputWithLabel
            isError={!!formik.errors.password && formik.touched.password}
            errorMessage={formik.touched.password ? formik.errors.password : ''}
            label="Password"
            labelClasses="text-gray-900"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            trailingIcon={showPassword ? <FaEye className="text-gray-900" /> : <FaEyeSlash className="text-gray-900" />}
            name="password"
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            trailingClick={togglePasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputWithLabel
            isError={!!formik.errors.password && formik.touched.password}
            errorMessage={formik.touched.password ? formik.errors.password : ''}
            label="Confirm Password"
            labelClasses="text-gray-900"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            trailingIcon={showPassword ? <FaEye className="text-gray-900" /> : <FaEyeSlash className="text-gray-900" />}
            name="confirmPassword"
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            trailingClick={togglePasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mt-[15px] text-gray-700 flex gap-4 w-full">
          <InputWithLabel
            name="aboutus"
            isError={!!formik.errors.password && formik.touched.password}
            errorMessage={formik.touched.password ? formik.errors.password : ''}
            label="How did you hear about us?"
            labelClasses="text-gray-900"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            value={formik.values.password}
            type="text"
            placeholder="Optional: let us know where you hear about us/referral id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            loading={isLoading}
            type="submit"
            label="Enroll"
            width="w-full"
            buttonStyle="custom"
            height="h-[48px]"
            customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px]"
            icon={<FaArrowRight className="text-white" />}
            iconPosition="right"
          />
        </div>
      </div>
    </form>
  );
};

export default dynamic(() => Promise.resolve(Enroll), { ssr: false });
