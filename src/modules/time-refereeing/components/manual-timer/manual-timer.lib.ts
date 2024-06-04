import {
  IS_NUMBER_REGEX,
  MAX_SECONDS,
  MAX_SECONDS_STRING,
} from '../../time-refereeing.config';

export const processTimeInput = (input: string): string => {
  if (IS_NUMBER_REGEX.test(input)) {
    input = '0' + input;
  }

  input = input.replace(/\D/g, '');

  if (Number(input.slice(0, 2)) >= MAX_SECONDS) {
    return MAX_SECONDS_STRING;
  }

  if (input.length >= 2) {
    input = input.slice(0, 2) + '.' + input.slice(2);
  }

  return input;
};
