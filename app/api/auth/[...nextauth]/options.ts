/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { NextAuthConfig, Profile } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const options = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  trustHost: true,
  pages: {
    signIn: '/auth/login',
    error: '/auth/login'
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const body = {
          emailAddress:email,
          passWord: password
        };
        try {
          const user = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, body);
          console.log('user', user.data);
          if (!user.data.status) {
            throw new Error("Invalid email or password");
          }
          return user.data; // must return user object or throw
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ profile, account, user }) {
      if (account?.provider === 'google') {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google/redirect`, {
            token: account?.access_token
          });
          const data = response.data;
          if (data?.isNewUser) {
            return '/auth/signup?google=true';
          }
          if (data?.token) {
            // Store both token and userInfo in the profile
            (profile as Profile).profile = data.token;
            (profile as Profile).userInfo = data.userInfo;

            return true;
          }
          return false;
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    jwt: async ({ token, user, account, profile }) => {
      if (user) {
        token = user as unknown as { [key: string]: any; };
        token.exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60;

        if (account?.provider === 'google') {
          token.token = profile?.profile;
          token.userInfo = profile?.userInfo;
        }
      }
      if (Date.now() / 1000 > (token.exp as number)) {
        return null;
      }
      return token;
    },
    session: async ({ session, token, account }: any) => {
      const { userInfo, ...restInfo } = token;
      session.token = token.token;
      session.user = { ...restInfo, ...userInfo };
      session.expires = token.exp ? new Date(token.exp * 1000).toISOString() : session.expires;
      return session;
    }
  }
} satisfies NextAuthConfig;
