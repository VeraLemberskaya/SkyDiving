import { request } from '@api/client';

import {
  CompetitionMembersResponse,
  CreateTeamRequest,
  UpdateTeamRequest,
} from './types';

const TEAMS_URL = '/teams';

export const getCompetitionMembers = (competitionId: number) => {
  return request<CompetitionMembersResponse>({
    url: `${TEAMS_URL}/${competitionId}/members`,
    method: 'get',
  });
};

export const createCompetitionTeam = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: CreateTeamRequest;
}) => {
  return request<{ id: number }>({
    url: `${TEAMS_URL}/competition/${competitionId}`,
    method: 'post',
    data,
  });
};

export const updateCompetitionTeam = ({
  teamId,
  competitionId,
  data,
}: {
  teamId: number;
  competitionId: number;
  data: UpdateTeamRequest;
}) => {
  return request<{ id: number }>({
    url: `${TEAMS_URL}/${teamId}/competition/${competitionId}`,
    method: 'put',
    data,
  });
};

export const deleteCompetitionTeam = ({
  teamId,
  competitionId,
}: {
  teamId: number;
  competitionId: number;
}) => {
  return request<void>({
    url: `${TEAMS_URL}/${teamId}/competition/${competitionId}`,
    method: 'delete',
  });
};
