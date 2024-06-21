import { categories, sportDegrees } from '@api/mocks';
import { Gender } from '@api/types';

//TODO: check later
export const genderOptions: { value: Gender; label: string }[] = [
  {
    value: Gender.MALE,
    label: 'Мужской',
  },
  {
    value: Gender.FEMALE,
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
