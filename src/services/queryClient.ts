import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 5 * 60_000, // 5 minutes
      gcTime: 5 * 60_000, // 5 minutes
    },
    mutations: {
      retry: 0,
    },
  },
});
