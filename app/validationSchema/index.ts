import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string().required('Please enter your password')
});

export const signupSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Please enter your email address'),
  firstName: yup.string().min(2).required('First name cannot be empty'),
  lastName: yup.string().min(2).required('Last name cannot be empty'),
  password: yup
    .string()
    .min(8, 'Must contain at least 8 characters')
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .matches(/[^\w]/, 'And finally 1 special character')
    .required('Password field cannot be empty'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')  
    .required('Please confirm your password'),
  countryOfResidence: yup.string().required('Please select your country of residence'),
  stateOfResidence: yup.string().required('Please select your state of residence'),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, 'Phone number must be digits only')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be at most 15 digits')
    .required('Please enter your phone number'),
  referrerCode: yup.string().optional()
    .matches(/^[a-zA-Z0-9]+$/, 'Referrer code must be alphanumeric')
    .min(5, 'Referrer code must be at least 5 characters')
    .max(10, 'Referrer code must be at most 10 characters')
});