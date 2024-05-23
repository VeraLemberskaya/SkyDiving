export const AGE_OF_MAJORITY = 18;
export const MIN_SPORTSMAN_AGE = 6;

export const RUSSIAN_ALPHABET_REGEX = /^[А-я]+$/;
export const PHONE_REGEX = /^(\+?[1-9]|[0-9])[0-9]{6,14}$/;
export const BELARUS_PASSPORT_SERIES_REGEX = /^[A-Z]{2}$/;
export const BELARUS_PASSPORT_NUMBER_REGEX = /^\d{7}$/;
export const BELARUS_PASSPORT_PERSONAL_NUMBER_REGEX =
  /^[0-9]{7}[ABCKEMH]{1}[0-9]{3}(GB|PB|BA|BI)[0-9]{1}$/;

export const validationMessages = {
  REQUIRED: 'Поле обязательно к заполнению.',
  GENDER_REQUIRED: 'Выбирите пол.',
  ONLY_RUSSIAN_LETTERS: 'Только буквы русского алфавита.',
  MIN_SPORTSMAN_AGE_ERROR: `Спортсмен должен быть не младше ${MIN_SPORTSMAN_AGE} лет.`,
  PHONE_ERROR: 'Некорректный номер телефона.',
  PASSPORT_SERIES_ERROR: 'Некорректная серия паспорта Беларуси.',
  PASSPORT_NUMBER_ERROR: 'Некорректный номер паспорта Беларуси.',
  PASSPORT_PERSONAL_NUMBER_ERROR:
    'Некорректный персональный номер паспорта Беларуси.',
};
