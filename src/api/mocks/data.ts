import { Judge, Sportsman } from '@api/types';

export const judgesData: Judge[] = [
  {
    id: 1,
    serialNumber: 1,
    fullName: 'Герасименко Александр Васильевич',
    category: 'Судья национальной категории',
  },
  {
    id: 2,
    serialNumber: 2,
    fullName: 'Лоханов Александр Иванович',
    category: 'Судья высшей национальной категории',
  },
  {
    id: 3,
    serialNumber: 3,
    fullName: 'Духанина Ольга Александровна',
    category: 'Судья по спорту первой категории',
  },
  {
    id: 4,
    serialNumber: 4,
    fullName: 'Духанин Денис Валерьевич',
    category: 'Судья по спорту первой категории',
  },
  {
    id: 5,
    serialNumber: 5,
    fullName: 'Сильванович Василий Михайлович',
    category: 'Судья по спорту',
  },
  {
    id: 6,
    serialNumber: 6,
    fullName: 'Никитюк Наталья Николаевна',
    category: 'Судья по спорту первой категории',
  },
  {
    id: 7,
    serialNumber: 7,
    fullName: 'Хюппенен Дмитрий Викторович',
    category: 'Судья по спорту национальной категории',
  },
  {
    id: 8,
    serialNumber: 8,
    fullName: 'Кунчукин Алексей Викторович',
    category: 'Судья по спорту национальной категории',
  },
  {
    id: 9,
    serialNumber: 9,
    fullName: 'Целиков Юрий Николаевич',
    category: 'Судья по спорту национальной категории',
  },
  {
    id: 10,
    serialNumber: 10,
    fullName: 'Глевский Олег Михайлович',
    category: 'Судья по спорту',
  },
  {
    id: 11,
    serialNumber: 11,
    fullName: 'Целиков Юрий Николаевич',
    category: 'Судья по спорту национальной категории',
  },
  {
    id: 12,
    serialNumber: 12,
    fullName: 'Глевский Олег Михайлович',
    category: 'Судья по спорту',
  },
];

export const sportsmenData: Sportsman[] = [
  {
    id: 1,
    serialNumber: 1,
    firstName: 'Вера',
    secondName: 'Лемберская',
    patronymic: 'Игоревна',
    sportDegree: 'КМС',
  },
  {
    id: 2,
    serialNumber: 2,
    firstName: 'Екатерина',
    secondName: 'Анашкевич',
    patronymic: 'Игоревна',
    sportDegree: 'III разряд',
  },
  {
    id: 3,
    serialNumber: 3,
    firstName: 'Максим',
    secondName: 'Маханько',
    patronymic: 'Витальевич',
    sportDegree: 'МС',
  },
  {
    id: 4,
    serialNumber: 4,
    firstName: 'Кирилл',
    secondName: 'Васько',
    patronymic: 'Андреевич',
    sportDegree: 'МС',
  },
  {
    id: 5,
    serialNumber: 5,
    firstName: 'Никита',
    secondName: 'Стецкий',
    patronymic: 'Алексеевич',
    sportDegree: 'II разряд',
  },
  {
    id: 6,
    serialNumber: 6,
    firstName: 'Егор',
    secondName: 'Грищук',
    patronymic: 'Андреевич',
    sportDegree: 'КМС',
  },
  {
    id: 7,
    serialNumber: 7,
    firstName: 'Анна',
    secondName: 'Карканица',
    patronymic: 'Викторовна',
    sportDegree: 'МСМК',
  },
  {
    id: 8,
    serialNumber: 8,
    firstName: 'Петр',
    secondName: 'Олизарович',
    patronymic: 'Васильевич',
    sportDegree: 'I разряд',
  },
];

export const sportDegrees = [
  {
    id: 1,
    name: 'МСМК',
  },
  {
    id: 2,
    name: 'КМС',
  },
  {
    id: 3,
    name: 'I разряд',
  },
  {
    id: 4,
    name: 'II разряд',
  },
];
