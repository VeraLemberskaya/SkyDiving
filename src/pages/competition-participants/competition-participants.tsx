import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

import { ManageParticipantsTree } from '@modules/manage-participants-tree';
import { API } from '@api/index';

import styles from './competition-participants.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionParticipants = () => {
  const { id } = useParams();
  const { data } = API.competitions.useCompetitionQuery(Number(id));

  return (
    <Flex vertical gap="small">
      <CompetitionDetails title={data?.name} />
      <div className={styles.content}>
        <ManageParticipantsTree competitionId={Number(id)} />
      </div>
    </Flex>
  );
};
