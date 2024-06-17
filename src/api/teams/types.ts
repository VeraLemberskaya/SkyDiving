import { Name } from '@api/types';

export interface CompetitionMember {
  id: number;
  skydiverId: number;
  teamId: number;
  competitionId: number;
  isJunior: boolean;
  name: Name;
  memberNumber: number;
}

export interface Team {
  id: number;
  name: string;
  members: CompetitionMember[];
}

export interface CompetitionMembersResponse {
  competitionId: number;
  teams: Team[];
  individuals: CompetitionMember[];
}

export interface CreateTeamRequest {
  name: string;
  members: {
    skydiverId: number;
  }[];
}

export interface UpdateTeamRequest {
  name: string;
  members: {
    skydiverId: number;
  }[];
}
