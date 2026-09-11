import React from 'react';
import { useTideData } from '../hooks/useTideData';
import { Location } from '../types';

interface TideChartProps {
  location: Location | null;
}

const TideChart: React.FC<TideChartProps> = ({ location }) => {
  const { tideData, loading, error } = useTideData(location);

  if (loading) {
    return <div>Loading tide data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tideData) {
    return <div>No tide data available.</div>;
  }

  return (
    <div>
      <h2>Tide Chart for {tideData.station.name}</h2>
      {/* Visualization logic for tide heights goes here */}
      <ul>
        {tideData.heights.map((height) => (
          <li key={height.dt}>
            Date: {height.date}, Height: {height.height} m
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TideChart;