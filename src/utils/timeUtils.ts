import dayjs from 'dayjs';

export const formatDate = (date: Date, format: string): string => {
  return dayjs(date).format(format);
};

export const getCurrentTimestamp = (): number => {
  return dayjs().unix();
};

export const addDays = (date: Date, days: number): Date => {
  return dayjs(date).add(days, 'day').toDate();
};

export const subtractDays = (date: Date, days: number): Date => {
  return dayjs(date).subtract(days, 'day').toDate();
};