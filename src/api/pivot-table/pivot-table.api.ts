import { request } from '@api/client';

import { PivotTable } from './types';

export const PIVOT_TABLE_URL = '/pivot-table';

export const getPivotTable = (competitionId: number) => {
  return request<PivotTable>({
    url: `${PIVOT_TABLE_URL}/${competitionId}`,
    method: 'get',
  });
};
