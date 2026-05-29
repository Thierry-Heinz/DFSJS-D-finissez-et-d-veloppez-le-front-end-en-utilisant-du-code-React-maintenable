import { useEffect, useState } from 'react';
import olympicsData from '../../olympicsData.json';
import type { Olympic } from '../models/models';

const useData = () => {
  const [data, setData] = useState<Olympic[] | null>(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(olympicsData);
        setIsLoading(false);
      } catch (err) {
        setError(`Error loading data, ${err}`);
        setIsLoading(false);
      }
    }, 500);
  }, []);

  return {
    data,
    loading,
    error,
    empty: data?.length === 0,
  };
};

export default useData;
