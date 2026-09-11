import React from 'react';
import { useTideData } from '../hooks/useTideData';
import { Location } from '../types';

interface ActivityRecommendationsProps {
  location: Location | null;
}

const ActivityRecommendations: React.FC<ActivityRecommendationsProps> = ({ location }) => {
  const { tideData, loading, error } = useTideData(location);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tideData) {
    return <div>No tide data available.</div>;
  }

  const recommendations = generateRecommendations(tideData);

  return (
    <div>
      <h2>Activity Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

const generateRecommendations = (tideData: any) => {
  // Placeholder for actual recommendation logic based on tideData
  return [
    'Go fishing during high tide.',
    'Enjoy a beach walk during low tide.',
    'Check for tide pools at low tide.',
  ];
};

export default ActivityRecommendations;