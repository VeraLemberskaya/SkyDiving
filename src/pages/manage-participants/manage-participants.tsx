import { SportsmenInfoTable } from '@modules/sportsmen-info-table';
import { sportsmenData } from '@api/mocks';

import { ManageParticipantsTitle } from './components/manage-participants-title';

export const ManageParticipants = () => {
  return (
    <>
      <ManageParticipantsTitle />
      <SportsmenInfoTable data={sportsmenData} />
    </>
  );
};
