import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react';

import fetcher from './Utils/fetcher';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetcher,
      retry: false,
    },
  },
});

export const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper, ...options})

// re-export everything
export * from '@testing-library/react'

export {customRender as render}

