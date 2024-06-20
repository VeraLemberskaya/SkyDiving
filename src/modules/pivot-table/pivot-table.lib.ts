import { PivotTable } from '@api/types';

import { PivotTableRow } from './pivot-table.types';

export const mapMembersToTableData = (data: PivotTable): PivotTableRow[] => {
  const { teams, individuals } = data;

  const teamMembers = teams.flatMap(({ members }) =>
    members.map((member, index) => ({ ...member, newTeamStart: !index })),
  );

  return [...teamMembers, ...individuals];
};

export const getJumpingAccuracy = (row: PivotTableRow, num: number) => {
  const jumping = row.jumping.find(({ number }) => number === num + 1);

  return jumping?.accuracy;
};

export const getAcrobaticsTime = (row: PivotTableRow, num: number) => {
  const acrobatics = row.acrobatics.find(({ number }) => number === num + 1);

  return acrobatics?.time;
};

export const getTeamRowSpan = (row: PivotTableRow, data?: PivotTable) => {
  const { teamId, newTeamStart } = row;

  if (!teamId) return { rowSpan: 1 };

  const team = data?.teams.find((team) => team.teamId === teamId);

  const rowSpan = team?.members.length;

  return { rowSpan: newTeamStart ? rowSpan : 0 };
};
