import { Flex } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import { ManageParticipantsTree } from '@modules/manage-participants-tree';
import { API } from '@api/index';
import { routes } from '@constants/routes';

import styles from './competition-participants.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionParticipants = () => {
  const { id } = useParams();
  const competitionId = Number(id);
  const { data } = API.competitions.useCompetitionQuery(competitionId);
  const navigate = useNavigate();

  const navigateToCompetitionPage = () => {
    navigate(routes.COMPETITION_BY_ID(competitionId));
  };

  return (
    <Flex vertical gap="small">
      <CompetitionDetails title={data?.name} />
      <div className={styles.content}>
        <ManageParticipantsTree
          competitionId={competitionId}
          confirmationText="Продолжить"
          onConfirm={navigateToCompetitionPage}
        />
      </div>
    </Flex>
  );
};
