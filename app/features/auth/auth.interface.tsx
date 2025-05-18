export interface ResetPasswordProps {
  password: string;
  confirmPassword: string;
  email: string;
  token: string;
}

export interface ForgotPasswordProps {
  email: string;
}


export interface BootcampSignupResponse {
  $id: string;
  code: string;
  data: BootcampSignupData;
  errors: {
    $id: string;
    $values: string[]; // You can replace `any` with a more specific error type if available
  };
  message: string;
  status: boolean;
  errorMessage: string;
}

export interface BootcampSignupData {
  $id: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bootcampID: number;
  assignedInstructor: string | null;
  notes: string;
  specialRequests: string;
  referrerCode: string;
  signUpDate: string; // ISO date string
  startDate: string; // ISO date string or "0001-01-01T00:00:00"
  status: number;
  paymentStatus: string; // e.g. "Pending"
  paymentUrl: string;
}
