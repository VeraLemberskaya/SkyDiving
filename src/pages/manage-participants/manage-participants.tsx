import { ManageSportsmen } from '@modules/manage-sportsmen';

import { ManageParticipantsTitle } from './components/manage-participants-title';
import styles from './manage-participants.module.scss';

export const ManageParticipants = () => {
  return (
    <>
      <ManageParticipantsTitle />
      <div className={styles.content}>
        <ManageSportsmen onlyExternal />
      </div>
    </>
  );
};
