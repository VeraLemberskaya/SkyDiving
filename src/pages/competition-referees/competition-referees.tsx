import { Flex } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import { PanelOfReferees } from '@modules/panel-of-referees';
import { API } from '@api/index';
import { routes } from '@constants/routes';

import styles from './competition-referees.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionReferees = () => {
  const { id } = useParams();
  const competitionId = Number(id);
  const { data } = API.competitions.useCompetitionQuery(competitionId);
  const navigate = useNavigate();

  const handleNavigateToParticipants = () => {
    navigate(routes.COMPETITION_PARTICIPANTS_BY_ID(competitionId));
  };

  return (
    <Flex vertical gap="small">
      <CompetitionDetails title={data?.name} />
      <div className={styles.content}>
        <PanelOfReferees
          competitionId={competitionId}
          confirmButtonText="Продолжить"
          onConfirm={handleNavigateToParticipants}
        />
      </div>
    </Flex>
  );
};
