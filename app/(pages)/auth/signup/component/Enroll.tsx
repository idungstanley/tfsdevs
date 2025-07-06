'use client';
import Button from '@/app/components/button/Button';
import { Dropdown } from '@/app/components/dropdown';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import Header from '@/app/components/text/Header';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';
import { useSignupMutation } from '@/app/features/auth/authService';
import { CountryProps, SignupProps, StateProps, UserGender } from '@/app/types/index.interface';
import { storageManager } from '@/app/utils/storageManager';
import { signupSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Country, State } from 'country-state-city';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

const Enroll = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referralId = searchParams.get('ref');
  const { mutateAsync, isPending } = useSignupMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryProps | null>(null);
  const [selectedGender, setSelectedGender] = useState<{
    value: UserGender;
    label: string;
  } | null>(null);
  const [selectedState, setSelectedState] = useState<StateProps | null>(null);
  const countryWithFlag = Country.getAllCountries().map((item) => ({
    ...item,
    nameWithFlag: `${item.flag}  ${item.name}`
  }));

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
      userName: '',
      phoneNumber: '',
      confirmPassword: ''
    },
    validateOnBlur: true,
    validationSchema: signupSchema,
    onSubmit: async (values: SignupProps) => {
      await mutateAsync({
        ...values,
        countryOfResidence: selectedCountry?.name as string,
        stateOfResidence: selectedState?.name as string,
        role: 'user',
        gender: selectedGender?.value
      });
      storageManager.setItem(LOCALSTORAGE_KEY.REFERRAL_ID, referralId);
      storageManager.setItem(LOCALSTORAGE_KEY.REFERRAL_EMAIL, values.email);
      router.push('/auth/login');
    }
  });

  console.log("test:", formik.errors)

  return (
    <form onSubmit={formik.handleSubmit} className="md:w-[80%] w-full md:p-0 pt-0">
      <div className="text-left lg:my-4 mb-1">
        <Header text="Sign up" textColor="text-gray-700" textSize="text-[30px]" />
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
            name="userName"
            placeholder="Enter your user name"
            label="User Name"
            labelClasses="text-gray-700"
            classes={`border px-2 text-[15px] text-gray-700 ${
              formik.errors.userName && formik.touched.userName
                ? 'border-red-400 text-red-400'
                : 'border border-gray-200'
            }`}
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <Dropdown
            options={genderOptions}
            labelKey="label"
            label="Gender"
            placeholder="Male"
            parentWidth="w-full"
            width="w-[240px]"
            selectedValue={selectedGender?.label as string}
            onChange={setSelectedGender}
          />
        </div>
        <div className="text-left flex gap-5  flex-col md:flex-row">
          <Dropdown
            options={countryWithFlag}
            labelKey="nameWithFlag"
            activeKey="name"
            parentWidth="w-full"
            placeholder="Country of Residence"
            label="Country of Residence"
            width="w-[240px]"
            selectedValue={selectedCountry?.name as string}
            onChange={setSelectedCountry}
          />
          <Dropdown
            options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
            labelKey="name"
            parentWidth="w-full"
            width="w-[240px]"
            placeholder="State of Residence"
            label="State of Residence"
            selectedValue={selectedState?.name as string}
            onChange={setSelectedState}
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
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            loading={isPending}
            type="submit"
            label="Sign up"
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
