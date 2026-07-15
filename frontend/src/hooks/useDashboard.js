import { useState, useEffect } from 'react';

export function useDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dashboard data fetch logic will go here
  }, []);

  return { data, loading, error, setData };
}
