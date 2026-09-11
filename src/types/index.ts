export type Location = {
  latitude: number;
  longitude: number;
};

export type TideExtreme = {
  dt: number;
  date: string;
  height: number;
  type: 'high' | 'low';
};

export type TideHeight = {
  dt: number;
  date: string;
  height: number;
};

export type TideData = {
  station: {
    name: string;
    lat: number;
    lon: number;
  };
  extremes: TideExtreme[];
  heights: TideHeight[];
};