/* eslint-disable @typescript-eslint/no-unused-vars */
// types/next-auth.d.ts
import { SessionUserProps, User } from '../features/auth/auth.interface';

declare module 'next-auth' {
  interface Session {
    expires?: string;
    user: User;
  }
}
