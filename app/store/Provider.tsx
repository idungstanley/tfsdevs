'use client';
import { Provider } from 'react-redux';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { SessionProvider } from 'next-auth/react';
import { store } from './store';
import { ErrorResponse, ISuccessRequest } from '../types/index.interface';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../loading';
import { ThemeProvider } from '../context/ThemeContext';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export function Providers({ children }: React.PropsWithChildren) {
  const onError = (error: unknown): unknown => {
    const typedError = error as ErrorResponse;
    let title: string;

    if (!error) {
      title = 'Oops! An internal server error occurred.';
      toast.error(title);
      return;
    }

    if (typedError?.data?.message) {
      title = typedError.data.message;
    } else {
      title = 'Oops! An internal server error occurred.';
    }
    toast.error(title);
  };

  const onSuccess = (data: unknown): unknown => {
    let title: string;
    const typedSuccess = data as ISuccessRequest;

    if (!typedSuccess?.message || typeof typedSuccess?.message === 'object') {
      return;
    }

    if (typedSuccess?.message) {
      title = typedSuccess?.message;
    } else {
      title = 'Success';
    }
    toast.success(title);
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1
      }
    },
    mutationCache: new MutationCache({
      onError,
      onSuccess
    }),
    queryCache: new QueryCache({
      onError,
      onSuccess
    })
  });
  const [client] = React.useState(queryClient);

  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <Theme>
              <SessionProvider>{children}</SessionProvider>
            </Theme>
          </Suspense>
        </Provider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
