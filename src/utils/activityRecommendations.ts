import { useEffect, useState } from 'react';
import { TideData } from '../types';

export const getActivityRecommendations = (tideData: TideData | null): string[] => {
  const recommendations: string[] = [];

  if (!tideData) {
    return recommendations;
  }

  const { extremes } = tideData;

  extremes.forEach(extreme => {
    const { type, height } = extreme;

    if (type === 'high') {
      if (height > 2) {
        recommendations.push('Great time for surfing!');
      } else {
        recommendations.push('Good for a beach walk.');
      }
    } else if (type === 'low') {
      if (height < 0.5) {
        recommendations.push('Ideal for tide pooling.');
      } else {
        recommendations.push('Consider fishing in the shallows.');
      }
    }
  });

  return recommendations;
};