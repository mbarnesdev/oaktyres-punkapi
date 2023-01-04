import { useState, useEffect } from 'react';
import { axiosClient } from '@/common';

export const useFetch = <T = unknown>(URL: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!URL) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosClient.get(URL);
        const data = (await response.data) as T;
        setData(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setData(null);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return {
    data,
    isLoading,
    error,
  };
};
