import { useEffect, useState } from 'react';
import olympicsData from '../olympicsData.json';
import type { Olympic } from '../models/models';

const useData = () => {
  const [data, setData] = useState<Olympic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Loading data...');
    setTimeout(() => {
      setData(olympicsData);
      console.log('Data loaded:', olympicsData);
      setIsLoading(false);

      if (olympicsData.length === 0) {
        setError('No data found');
      }
    }, 500);
  }, []);

  return { data, isLoading, error };
};

export default useData;
