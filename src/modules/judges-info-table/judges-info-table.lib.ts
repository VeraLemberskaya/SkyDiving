import { Judge } from '@api/types';

export const mapJudgesToTableData = (data: Judge[]) =>
  data.map(({ id, ...data }) => ({
    key: id,
    ...data,
  }));
