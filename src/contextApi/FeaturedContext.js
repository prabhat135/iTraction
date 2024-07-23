import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../config/axios';

const FeaturedWorkContext = createContext();

const FeaturedWorkProvider = ({ children }) => {
  const [featuredWork, setFeaturedWork] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/featured-work')
      .then(response => {
        setFeaturedWork(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <FeaturedWorkContext.Provider value={{ featuredWork, selectedWork, setSelectedWork, loading, error }}>
      {children}
    </FeaturedWorkContext.Provider>
  );
};

export { FeaturedWorkContext, FeaturedWorkProvider };
