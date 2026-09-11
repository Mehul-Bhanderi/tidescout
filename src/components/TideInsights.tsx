import React, { useEffect, useState } from 'react';
import { useTideData } from '../hooks/useTideData';
import type { Location } from '../types';

interface TideInsightsProps {
  location: Location | null;
}

const TideInsights: React.FC<TideInsightsProps> = ({ location }) => {
  const { tideData, loading, error } = useTideData(location);

  if (loading) {
    return <div>Loading tide insights...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tideData) {
    return <div>No tide data available.</div>;
  }

  return (
    <div>
      <h2>Tide Insights for {tideData.station.name}</h2>
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

export default TideInsights;