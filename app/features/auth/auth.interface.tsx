export interface ResetPasswordProps {
  password: string;
  confirmPassword: string;
  email: string;
  token: string;
}

export interface ForgotPasswordProps {
  email: string;
}