import z from 'zod';
import { Dayjs } from 'dayjs';

import { calculateAge } from '@utils/calculate-age';
import {
  BELARUS_PASSPORT_NUMBER_REGEX,
  BELARUS_PASSPORT_PERSONAL_NUMBER_REGEX,
  BELARUS_PASSPORT_SERIES_REGEX,
  MIN_SPORTSMAN_AGE,
  PHONE_REGEX,
  RUSSIAN_ALPHABET_REGEX,
  validationMessages,
} from '@constants/validation';

const {
  REQUIRED,
  GENDER_REQUIRED,
  ONLY_RUSSIAN_LETTERS,
  MIN_SPORTSMAN_AGE_ERROR,
  PHONE_ERROR,
  PASSPORT_SERIES_ERROR,
  PASSPORT_NUMBER_ERROR,
  PASSPORT_PERSONAL_NUMBER_ERROR,
} = validationMessages;

export const sportsmanSchema = z.object({
  secondName: z.string().min(1, REQUIRED).regex(RUSSIAN_ALPHABET_REGEX, {
    message: ONLY_RUSSIAN_LETTERS,
  }),
  firstName: z.string().min(1, REQUIRED).regex(RUSSIAN_ALPHABET_REGEX, {
    message: ONLY_RUSSIAN_LETTERS,
  }),
  patronymic: z.string().min(1, REQUIRED).regex(RUSSIAN_ALPHABET_REGEX, {
    message: ONLY_RUSSIAN_LETTERS,
  }),
  gender: z.enum(['male', 'female'], { invalid_type_error: GENDER_REQUIRED }),
  birthDate: z.custom<Dayjs>().refine(
    (birthDate) => {
      const age = calculateAge(birthDate);
      return age !== null && age >= MIN_SPORTSMAN_AGE;
    },
    {
      message: MIN_SPORTSMAN_AGE_ERROR,
    },
  ),
  birthLocation: z.string(),
  employment: z.string(),
  education: z.string(),
  phone: z
    .string()
    .min(1, REQUIRED)
    .refine((phone) => PHONE_REGEX.test(phone), {
      message: PHONE_ERROR,
    }),
  passportSeries: z
    .string()
    .min(1, REQUIRED)
    .regex(BELARUS_PASSPORT_SERIES_REGEX, {
      message: PASSPORT_SERIES_ERROR,
    }),
  passportNumber: z
    .string()
    .min(1, REQUIRED)
    .regex(BELARUS_PASSPORT_NUMBER_REGEX, {
      message: PASSPORT_NUMBER_ERROR,
    }),
  passportPersonalNumber: z
    .string()
    .min(1, REQUIRED)
    .regex(BELARUS_PASSPORT_PERSONAL_NUMBER_REGEX, {
      message: PASSPORT_PERSONAL_NUMBER_ERROR,
    }),
  issuingAuthority: z.string().min(1, REQUIRED),
  issuingDate: z.custom<Dayjs>().refine(
    (issuingDate) => {
      return issuingDate !== null;
    },
    {
      message: REQUIRED,
    },
  ),
  sportActivityStartYear: z.custom<Dayjs>(),
  trainer: z.string(),
  sportDegree: z.string().optional(),
  fatherFullName: z.string(),
  fatherJob: z.string(),
  fatherPhone: z.string().refine((phone) => PHONE_REGEX.test(phone), {
    message: PHONE_ERROR,
  }),
  motherFullName: z.string(),
  motherJob: z.string(),
  motherPhone: z.string().refine((phone) => PHONE_REGEX.test(phone), {
    message: PHONE_ERROR,
  }),
  homeAddress: z.string().min(1, REQUIRED),
});
