'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function SignIn(
  formData: { email: string; password: string; },
) {
  const { email, password } = formData;
  try {
    await signIn('credentials', {
      email: email,
      password,
    });
  } catch (error) {
    console.error('Login error:', error);
    if (error instanceof AuthError) {
      switch (error.name) {
        case 'CredentialsSignin':
          throw new Error('Invalid email or password');
        default:
          throw new Error('Something went wrong');
      }
    }
  }

}