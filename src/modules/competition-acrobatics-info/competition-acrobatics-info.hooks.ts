import { useEffect, useState } from 'react';

import { API } from '@api/index';

export const useCompetitionRefereeingSeries = (competitionId: number) => {
  const [refetch, setRefetch] = useState(false);

  const { data, isFetching, isSuccess } =
    API.trickRefereeing.useCompetitionRefereeingSeries(competitionId, refetch);

  useEffect(() => {
    if (!isFetching && isSuccess) {
      const hasActiveRefereeing = data.some(({ totalScore }) => !totalScore);
      const refetch = hasActiveRefereeing ? true : false;

      setRefetch(refetch);
    }
  }, [data, isFetching, isSuccess]);

  return { data };
};
