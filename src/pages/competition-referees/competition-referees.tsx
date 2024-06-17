import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

import { PanelOfReferees } from '@modules/panel-of-referees';
import { API } from '@api/index';

import styles from './competition-referees.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionReferees = () => {
  const { id } = useParams();
  const { data } = API.competitions.useCompetitionQuery(Number(id));

  return (
    <Flex vertical gap="small">
      <CompetitionDetails title={data?.name} />
      <div className={styles.content}>
        <PanelOfReferees competitionId={Number(id)} />
      </div>
    </Flex>
  );
};
