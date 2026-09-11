import React from 'react';
import { useTideData } from '../hooks/useTideData';
import { Location } from '../types';

interface TideInfoProps {
  location: Location | null;
}

const TideInfo: React.FC<TideInfoProps> = ({ location }) => {
  const { tideData, loading, error } = useTideData(location);

  if (loading) {
    return <div>Loading tide information...</div>;
  }

  if (error) {
    return <div>Error fetching tide data: {error}</div>;
  }

  if (!tideData) {
    return <div>No tide data available.</div>;
  }

  return (
    <div>
      <h2>Tide Information for {tideData.station.name}</h2>
      <h3>Extremes</h3>
      <ul>
        {tideData.extremes.map((extreme) => (
          <li key={extreme.dt}>
            {extreme.date}: {extreme.type} - {extreme.height} m
          </li>
        ))}
      </ul>
      <h3>Heights</h3>
      <ul>
        {tideData.heights.map((height) => (
          <li key={height.dt}>
            {height.date}: {height.height} m
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TideInfo;