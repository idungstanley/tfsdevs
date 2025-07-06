import { SignupProps } from '@/app/types/index.interface';
import requestNew from '@/app/utils/requestNew';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BootcampSignupResponse, ChangePasswordProps, ForgotPasswordProps, ResetPasswordProps } from './auth.interface';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';
import { GetSelfResponse } from '../bootcamp/bootcamp.interface';
import { useAppDispatch } from '@/app/store/store';
import { setGetSelfDetails } from './authSlice';

export const signUp = (data: SignupProps) => {
  const response = requestNew<BootcampSignupResponse>({
    url: 'api/v1/Auth/Register',
    method: 'POST',
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.countryOfResidence,
      state: data.stateOfResidence,
      phoneNumber: data.phoneNumber,
      emailAddress: data.email,
      passWord: data.password,
      userName: data.userName,
      role: data.role,
      gender: data.gender,
      isActive: true
    }
  });
  return response;
};

const forgotPassword = (data: ForgotPasswordProps) => {
  const response = requestNew({
    url: 'api/v1/Auth/ForgotPassword',
    method: 'POST',
    data
  });
  return response;
};

const changePassword = (data: ChangePasswordProps) => {
  const response = requestNew({
    url: 'api/v1/Auth/change-password',
    method: 'POST',
    data
  });
  return response;
};

const resetPassword = (data: ResetPasswordProps) => {
  const response = requestNew({
    url: 'api/v1/Auth/ResetPassword',
    method: 'POST',
    data
  });
  return response;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess(data) {
      localStorage.setItem(LOCALSTORAGE_KEY.PAYMENT_URL, JSON.stringify(data?.data?.paymentUrl));
    }
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: forgotPassword
  });
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: changePassword
  });
};

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: resetPassword
  });
};

export const useGetSelf = () => {
  const dispatch = useAppDispatch()
  return useQuery({
    queryKey: ['get-self'],
    enabled: true,
    queryFn: async () => {
      const data = await requestNew<GetSelfResponse>({
        url: 'api/v1/User/self',
        method: 'GET'
      });
      dispatch(setGetSelfDetails(data.data));
      return data;
    },
  });
};