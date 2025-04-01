import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string().required('Please enter your password')
});
