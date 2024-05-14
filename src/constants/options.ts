import { categories, sportDegrees } from '@api/mocks';
import { Gender } from '@api/types';

export const genderOptions: { value: Gender; label: string }[] = [
  {
    value: 'male',
    label: 'Мужской',
  },
  {
    value: 'female',
    label: 'Женский',
  },
];

export const degreeOptions = sportDegrees.map((degree) => ({
  value: degree.name,
  label: degree.name,
}));

export const categoryOptions = categories.map((category) => ({
  value: category.name,
  label: category.name,
}));
