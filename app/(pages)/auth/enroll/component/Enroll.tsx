'use client';
import Button from '@/app/components/button/Button';
import { Dropdown } from '@/app/components/dropdown';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import Header from '@/app/components/text/Header';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';
import { useSignupMutation } from '@/app/features/auth/authService';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';
import { useGetAllBootCamps } from '@/app/features/bootcamp/bootcampService';
import { SignupProps } from '@/app/types/index.interface';
import { storageManager } from '@/app/utils/storageManager';
import { signupSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa6';

const Enroll = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referralId = searchParams.get('ref');
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync, isPending } = useSignupMutation();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { data } = useGetAllBootCamps({});
  const [selectedBootcamp, setSelectedBootcamp] = useState<Bootcamp>();
  const raw = localStorage.getItem(LOCALSTORAGE_KEY.BOOTCAMPID);
  const bootCampIdLs = raw ? JSON.parse(raw) : null;
  const bootcamps = data?.data.$values;
  console.log(referralId);

  useEffect(() => {
    setSelectedBootcamp(bootcamps?.find((data) => data?.bootcampId === bootCampIdLs));
  }, [bootCampIdLs, bootcamps]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      countryOfResidence: '',
      stateOfResidence: '',
      phoneNumber: '',
      confirmPassword: '',
      referrerCode: referralId || ''
    },
    validateOnBlur: true,
    validationSchema: signupSchema,
    onSubmit: async (values: SignupProps) => {
      await mutateAsync({ ...values, bootcampID: selectedBootcamp?.bootcampId });
      storageManager.setItem(LOCALSTORAGE_KEY.BOOTCAMPID, selectedBootcamp?.bootcampId);
      storageManager.setItem(LOCALSTORAGE_KEY.REFERRAL_ID, referralId);
      storageManager.setItem(LOCALSTORAGE_KEY.REFERRAL_EMAIL, values.email);
      router.push(`/bootcamp/checkout/${selectedBootcamp?.bootcampId}`);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="md:w-[80%] w-full md:p-0 pt-0">
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
              formik.errors.firstName && formik.touched.firstName
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.firstName}
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
              formik.errors.lastName && formik.touched.lastName
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.lastName}
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
              formik.errors.countryOfResidence && formik.touched.countryOfResidence
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.countryOfResidence}
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
              formik.errors.stateOfResidence && formik.touched.stateOfResidence
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.stateOfResidence}
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
              formik.errors.phoneNumber && formik.touched.phoneNumber
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="text-gray-700 flex gap-5 flex-col md:flex-row w-full">
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
            trailingIconClasses="top-3.5"
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            trailingClick={togglePasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputWithLabel
            isError={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
            errorMessage={formik.touched.confirmPassword ? formik.errors.confirmPassword : ''}
            label="Confirm Password"
            labelClasses="text-gray-900"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            trailingIconClasses="top-3.5"
            trailingIcon={
              showConfirmPassword ? <FaEye className="text-gray-900" /> : <FaEyeSlash className="text-gray-900" />
            }
            name="confirmPassword"
            value={formik.values.confirmPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            trailingClick={toggleConfirmPasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <Dropdown
          options={bootcamps as Bootcamp[]}
          labelKey="title"
          labelClasses="text-gray-900"
          label="Bootcamp"
          width="min-w-40 w-fit"
          placeholder="Select Bootcamp"
          parentWidth="w-full"
          position="fixed right-4"
          selectedValue={selectedBootcamp?.title as string}
          onChange={setSelectedBootcamp}
        />
        <div className="text-gray-700 flex gap-4 w-full">
          <InputWithLabel
            name="referrerCode"
            isError={!!formik.errors.referrerCode && formik.touched.referrerCode}
            errorMessage={formik.touched.referrerCode ? formik.errors.referrerCode : ''}
            label="How did you hear about us?"
            labelClasses="text-gray-900"
            classes={`border px-2 text-[15px] text-gray-900 ${
              formik.errors.referrerCode && formik.touched.referrerCode
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            height="h-[40px] rounded-lg"
            value={formik.values.referrerCode}
            type="text"
            placeholder="Optional: let us know where you hear about us/referral id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            loading={isPending}
            type="submit"
            label="Enroll"
            width="w-full"
            buttonStyle="custom"
            height="h-[48px]"
            customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
            icon={<FaArrowRight className="text-white" />}
            iconPosition="right"
          />
        </div>
      </div>
    </form>
  );
};

export default dynamic(() => Promise.resolve(Enroll), { ssr: false });
