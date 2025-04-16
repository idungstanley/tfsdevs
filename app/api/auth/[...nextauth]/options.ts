/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { NextAuthConfig, Profile } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

export const options = {
  session: {
    // Set session maxAge to 24 hours (in seconds)
    maxAge: 24 * 60 * 60, // 24 hours
    strategy: 'jwt'
  },
  jwt: {
    // Set the JWT maxAge to 24 hours (in seconds)
    maxAge: 24 * 60 * 60 // 24 hours
  },
  debug: true,
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
          email,
          password
        };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Add logic here to look up the user from the credentials supplied
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
          username: !emailRegex.test(body.email) ? email : undefined,
          password,
          email: emailRegex.test(body.email) ? email.toLowerCase() : undefined
        });

        const { user, token } = res.data;
        if (user && token) return { ...user, token };
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: 'openid profile email'
        }
      }
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    })
  ],
  secret: process.env.AUTH_SECRET,
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
        token = user as unknown as { [key: string]: any };
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
