import { Flex } from 'antd';

import { ManageParticipantsTree } from '@modules/manage-participants-tree';

import styles from './competition-participants.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionParticipants = () => {
  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <ManageParticipantsTree />
      </div>
    </Flex>
  );
};
