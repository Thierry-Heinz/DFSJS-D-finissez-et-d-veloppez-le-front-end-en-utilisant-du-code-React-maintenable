import { useEffect, useState } from 'react';
import olympicsData from '../../olympicsData.json';
import type { Olympic } from '../models/models';
import { useNavigate, useParams } from 'react-router-dom';

const useData = () => {
  const { id } = useParams();
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      try {
        let tempData: Olympic[] = [];
        if (typeof id === 'undefined') {
          // No filtering, return all data
          setData(olympicsData);
          tempData = olympicsData;
        } else if (!isNaN(Number(id))) {
          // Filter data based on the country ID
          const filteredData = olympicsData.filter(
            (country: Olympic) => country.id === Number(id)
          );
          setData(filteredData);
          tempData = filteredData;
        } else {
          // Filter data based on the country name (case-insensitive)
          const filteredData = olympicsData.filter(
            (country: Olympic) =>
              country.name.toLowerCase() === id.toLowerCase()
          );

          setData(filteredData);
          tempData = filteredData;
        }

        if (tempData && tempData.length === 0) {
          navigate('/not-found');
        }

        setIsLoading(false);
      } catch (err) {
        setError(`Error loading data, ${err}`);
        setIsLoading(false);
      }
    }, 500);
  }, [id, navigate]);

  return {
    data,
    loading,
    error,
    empty: !loading && data.length === 0,
  };
};

export default useData;
