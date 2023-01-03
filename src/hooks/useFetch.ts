import { useState, useEffect } from "react";

export const useFetch = <T = unknown>(URL: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!URL) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(URL);
        const data = (await response.json()) as T;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
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
