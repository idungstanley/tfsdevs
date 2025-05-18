import { SignupProps } from '@/app/types/index.interface';
import requestNew from '@/app/utils/requestNew';
import { useMutation } from '@tanstack/react-query';
import { ForgotPasswordProps, ResetPasswordProps } from './auth.interface';

export const signUp = (data: SignupProps) => {
  const response = requestNew({
    url: '/BootcampRegistration/createbootcampregistration',
    method: 'POST',
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.countryOfResidence,
      state: data.stateOfResidence,
      phoneNumber: data.phoneNumber,
      email: data.email,
      referrerCode: data.referrerCode,
      password: data.password,
      bootcampID: data.bootcampID,
      assignedInstructor: '',
      notes: '',
      specialRequests: 'None'
    }
  });
  return response;
};

const forgotPassword = (data: ForgotPasswordProps) => {
  const response = requestNew({
    url: '/Auth/ForgotPassword',
    method: 'POST',
    data
  });
  return response;
};

const resetPassword = (data: ResetPasswordProps) => {
  const response = requestNew({
    url: '/Auth/ResetPassword',
    method: 'POST',
    data
  });
  return response;
};


export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signUp
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: forgotPassword
  });
};

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: resetPassword
  });
};
