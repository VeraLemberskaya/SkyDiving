import { request } from '@api/client';

const INDIVIDUALS_URL = '/individuals';

export const addCompetitionIndividuals = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: { skydiverId: number }[];
}) => {
  return request({
    url: `${INDIVIDUALS_URL}/competition/${competitionId}`,
    method: 'post',
    data,
  });
};

export const deleteCompetitionIndividual = ({
  competitionId,
  individualId,
}: {
  competitionId: number;
  individualId: number;
}) => {
  return request({
    url: `${INDIVIDUALS_URL}/${individualId}/competition/${competitionId}`,
    method: 'delete',
  });
};
