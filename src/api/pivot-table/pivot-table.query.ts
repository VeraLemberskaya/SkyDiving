import { useQuery } from '@tanstack/react-query';

import { getPivotTable } from './pivot-table.api';

export const usePivotTableQuery = (competitionId: number) => {
  return useQuery({
    queryFn: () => getPivotTable(competitionId),
    queryKey: ['pivot-table', competitionId],
  });
};
