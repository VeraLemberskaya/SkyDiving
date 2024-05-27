import { TimerType } from './time-refereeing.types';

export const selectOptions = [
  { label: 'Ручной', value: TimerType.Manual },
  { label: 'Встроенный', value: TimerType.BuiltIn },
];

export const MAX_MILLISECONDS = 16000;
