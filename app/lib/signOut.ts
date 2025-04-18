'use server';

import { signOut } from '@/auth';
import { DEFAULT_UNAUTHENTICATED_USER_REDIRECT } from '../constants/routes';

export async function SignOut(redirectLink = DEFAULT_UNAUTHENTICATED_USER_REDIRECT as string) {
  await signOut({ redirectTo: redirectLink });
}
