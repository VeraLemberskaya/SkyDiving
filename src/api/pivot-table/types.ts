import { Name } from '@api/types';

export interface PivotJumping {
  jumpingId: number;
  accuracy: number;
  number: number;
}

export interface PivotAcrobatics {
  competitionMemberDetailsId: number;
  number: number;
  time: number;
}

export interface Member {
  memberId: number;
  teamId: number;
  teamName: string;
  name: Name;
  memberNumber: number;
  jumping: PivotJumping[];
  acrobatics: PivotAcrobatics[];
  jumpingCompetitionRank: number | null;
  acrobaticsCompetitionRank: number | null;
  overallCompetitionRank: number | null;
  participatesInAcrobatics: boolean;
  junior: boolean;
  acrobaticsSum: number;
  jumpingSum: number;
}

export interface PivotTeam {
  teamId: number;
  teamName: string;
  members: Member[];
  acrobaticsSum: number | null;
  jumpingSum: number | null;
  jumpingCompetitionRank: number | null;
  acrobaticsCompetitionRank: number | null;
  overallCompetitionRank: number | null;
}

export interface PivotTable {
  competitionId: number;
  competitionName: string;
  teams: PivotTeam[];
  individuals: Member[];
}
