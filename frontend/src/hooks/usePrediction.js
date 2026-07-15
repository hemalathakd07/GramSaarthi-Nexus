import { useState, useEffect } from 'react';

export function usePrediction() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prediction fetch logic will go here
  }, []);

  return { prediction, loading, error, setPrediction };
}
