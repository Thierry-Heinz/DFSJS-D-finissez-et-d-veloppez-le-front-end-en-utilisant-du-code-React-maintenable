import { useEffect, useState } from 'react';
import olympicsData from '../olympicsData.json';
import type { OlympicData } from '../models/models';

const useData = () => {
  const [data, setData] = useState<OlympicData | null>(null);
  const [loading, setIsLoading] = useState(true);
  console.log(data);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Loading data...');

    setTimeout(() => {
      try {
        setData(olympicsData);
        console.log('Data loaded:', olympicsData);
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
