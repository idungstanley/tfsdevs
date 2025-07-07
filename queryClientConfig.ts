import { QueryClientConfig } from '@tanstack/react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      networkMode: 'online',
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      refetchInterval: false, //1 hour
      refetchIntervalInBackground: false,
      staleTime: 2000 * 3600 //2 hours
    },
    mutations: {
      networkMode: 'online',
      retry: false
    }
  }
};
