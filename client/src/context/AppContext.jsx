// src/context/AppContext.jsx
import { createContext, useEffect, useState } from 'react';
import { jobsData } from '../assets/assets';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  // ✅ FIXED typo here:
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,       // ✅ consistent name
    setShowRecruiterLogin     // ✅ consistent name
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
