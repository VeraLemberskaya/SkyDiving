import dayjs, { Dayjs } from 'dayjs';

export const calculateAge = (birthDate: Dayjs | null): number | null => {
  if (!birthDate) return null;

  return dayjs().diff(birthDate, 'year');
};
