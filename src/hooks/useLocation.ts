import { useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  return { location, updateLocation };
};

export default useLocation;