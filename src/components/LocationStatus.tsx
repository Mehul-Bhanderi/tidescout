import React from 'react';

type LocationStatusProps = {
  location: any; // you can replace any with a real type later
};

const LocationStatus: React.FC<LocationStatusProps> = ({ location }) => {
  return (
    <div className="location-status">
      {location ? (
        <h2>Current Location: {location.name}</h2>
      ) : (
        <h2>No location selected</h2>
      )}
    </div>
  );
};

export default LocationStatus;
