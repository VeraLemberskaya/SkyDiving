import { TimerType } from './time-refereeing.types';

export const selectOptions = [
  { label: 'Ручной', value: TimerType.Manual },
  { label: 'Встроенный', value: TimerType.BuiltIn },
];

export const MAX_MILLISECONDS = 16000;
export const MAX_INPUT_VALUE = 5;
export const MAX_SECONDS = 16;
export const TO_MILLISECONDS_MULTIPLIER = 10;

export const MAX_SECONDS_STRING = '16.00';

export const IS_NUMBER_REGEX = /^[2-9]/;
