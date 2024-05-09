import { Sportsman } from '@api/types';

export const mapSportsmenToTableData = (data: Sportsman[]) =>
  data.map(({ id, ...data }) => ({
    key: id,
    ...data,
  }));
