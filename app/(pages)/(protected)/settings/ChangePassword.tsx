import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import { useTheme } from '@/app/context/ThemeContext';
import { ChangePasswordProps } from '@/app/features/auth/auth.interface';
import { useChangePasswordMutation } from '@/app/features/auth/authService';
import { changePasswordSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import { Lock } from 'lucide-react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { TbPassword, TbPasswordFingerprint, TbPasswordUser } from 'react-icons/tb';

const ChangePassword = () => {
  const { mutateAsync, isPending } = useChangePasswordMutation();
  const { theme } = useTheme();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword((prevState) => !prevState);
  };

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
//   const borderColor = theme === 'dark' ? 'border-white' : 'border-gray-200';

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
      currentPassword: ''
    },
    validateOnBlur: true,
    validationSchema: changePasswordSchema,
    onSubmit: async (values: ChangePasswordProps) => {
      await mutateAsync({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword
      });
      formik.resetForm();
    }
  });

  return (
    <div className={`${bgColor} rounded-lg p-6`}>
      <div className="flex items-center gap-3 mb-6">
        <Lock className="text-[#684DF4]" size={24} />
        <h3 className="text-lg font-medium">Password</h3>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <InputWithLabel
          name="currentPassword"
          type={showCurrentPassword ? 'text' : 'password'}
          placeholder="Enter current password"
          label="Current Password"
          labelClasses="text-white font-semibold"
          classes="border px-2 text-[15px] text-white border bg-gray-700 rounded-lg px-4 py-2 border-gray-600"
          value={formik.values.currentPassword}
          isError={!!formik.errors.currentPassword && formik.touched.currentPassword}
          errorMessage={formik.touched.currentPassword ? formik.errors.currentPassword : ''}
          trailingIconClasses="top-4"
          leadingIcon={<TbPasswordFingerprint className="text-[#684DF4] z-40" />}
          trailingIcon={
            showCurrentPassword ? (
              <FaEye className="text-white" onClick={toggleCurrentPasswordVisibility} />
            ) : (
              <FaEyeSlash className="text-white" onClick={toggleCurrentPasswordVisibility} />
            )
          }
          width="w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          height="h-[40px] rounded-lg"
        />

        <InputWithLabel
          name="newPassword"
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter new password"
          trailingIconClasses="top-4"
          labelClasses="text-white font-semibold"
          classes="border px-2 text-[15px] text-white bg-gray-700 rounded-lg border border-gray-600"
          value={formik.values.newPassword}
          isError={!!formik.errors.newPassword && formik.touched.newPassword}
          errorMessage={formik.touched.newPassword ? formik.errors.newPassword : ''}
          leadingIcon={<TbPasswordUser className="text-[#684DF4] z-40" />}
          trailingIcon={
            showPassword ? (
              <FaEye className="text-white" onClick={togglePasswordVisibility} />
            ) : (
              <FaEyeSlash className="text-white" onClick={togglePasswordVisibility} />
            )
          }
          width="w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          height="h-[40px] rounded-lg"
        />
        <InputWithLabel
          name="confirmPassword"
          label="Confirm Password"
          trailingIconClasses="top-4"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Enter confirm password"
          labelClasses="text-white font-semibold"
          classes="border px-2 text-[15px] text-white bg-gray-700 rounded-lg  border border-gray-600"
          value={formik.values.confirmPassword}
          isError={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
          errorMessage={formik.touched.confirmPassword ? formik.errors.confirmPassword : ''}
          leadingIcon={<TbPassword className="text-[#684DF4] z-40" />}
          trailingIcon={
            showConfirmPassword ? (
              <FaEye className="text-white" onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <FaEyeSlash className="text-white" onClick={toggleConfirmPasswordVisibility} />
            )
          }
          width="w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          height="h-[40px] rounded-lg"
        />
        <Button
          loading={isPending}
          type="submit"
          label="Update password"
          width="w-full"
          buttonStyle="custom"
          height="h-[48px]"
          customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
          iconPosition="right"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
