import { SignupProps } from "@/app/types/index.interface";
import requestNew from "@/app/utils/requestNew";
import { useMutation } from "@tanstack/react-query";

export const signUp = (data: SignupProps) => {
    const signUpDate = new Date().toISOString();
    const startDate = new Date();
  const response = requestNew({
    url: '/academy/createbootcampregistration',
    method: 'POST',
    data: {
        ...data,
        country: data.countryOfResidence,
        state: data.stateOfResidence,
        signUpDate,
        startDate,
        bootcampID: 1,
        assignedInstructor: "",
        notes: "",
        specialRequests: "None"
    }
  });
  return response;
};

export const useSignupMutation = () => {
    return useMutation({
      mutationFn: signUp
    });
}
