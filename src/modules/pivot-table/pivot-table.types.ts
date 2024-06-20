import { Member } from '@api/types';

export interface PivotTableProps {
  competitionId: number;
}

export interface PivotTableRow extends Member {
  newTeamStart?: boolean;
}
