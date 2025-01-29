import { useInfiniteQuery } from '@tanstack/react-query';
import { API_URL } from '../constant/BaseUrl';

const endpoint = `${API_URL}/Stock/`;

type API = {
  '/getStock': {
    page: number;
    size: number;
    results: {}[];
    totalPages: number;
  };
};

export function useInfiniteFecthQuery<T extends keyof API>(path: T, params?: Record<string, string | number>) {
  return useInfiniteQuery({
    queryKey: [path],
    initialPageParam: 0, 
    queryFn: async ({ pageParam = 0 }) => {
      const url = `${endpoint}${path}?page=${pageParam}`;
      await wait(1);
      return fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      }).then((r) => r.json() as Promise<API[T]>);
    },
    getNextPageParam: (lastPage) => {
      // Vérifier que 'lastPage.page' est un nombre
      return typeof lastPage.page === 'number' && lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : null;
    },
  });
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration * 1000));
}
