'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Loading from '@/app/loading';
import { useGetSelf } from '../features/auth/authService';
import { displayPrompt, setVisibility } from '../features/general/prompt/promptSlice';
import { SignOut } from '../lib/signOut';
import { storageManager } from '../utils/storageManager';
import { useAppDispatch } from '../store/store';
import { LOCALSTORAGE_KEY } from '../constants/localStorage';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthWrapper = (props: P) => {
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();
    console.log('session:>>', session);

    const { isError, error, isLoading: isGetSelfLoading } = useGetSelf();

    const token = session?.user.data.jsonWebToken.accessToken as string;
    const tokenLs = storageManager.getItem(LOCALSTORAGE_KEY.TOKEN);

    useEffect(() => {
      if (status === 'authenticated' && token && !tokenLs) {
        storageManager.setItem(LOCALSTORAGE_KEY.TOKEN, token);
      }
    }, [status, token, tokenLs]);

    useEffect(() => {
      const handleLogoutModal = () => {
        dispatch(
          displayPrompt('Session Expired', 'Please sign in again to keep your session secure.', [
            {
              label: 'Go to Login',
              style: 'base',
              callback: async () => {
                await SignOut();
                storageManager.clear();
                dispatch(setVisibility(false));
                window.location.reload(); // This will reload the current page
              }
            },
            {
              label: 'No, cancel',
              style: 'plain',
              callback: () => {
                dispatch(setVisibility(false));
              }
            }
          ])
        );
      };

      //@ts-expect-error types not set
      if (error?.data?.statusCode === 401) {
        handleLogoutModal();
      }
    }, [isError, dispatch, error]);

    if (status === 'loading' || isGetSelfLoading) {
      return <Loading />;
    }

    if (status === 'authenticated') {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return AuthWrapper;
};

export default withAuth;
