import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

import { PanelOfReferees } from '@modules/panel-of-referees';

import styles from './competition-referees.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionReferees = () => {
  const { id } = useParams();

  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <PanelOfReferees competitionId={Number(id)} />
      </div>
    </Flex>
  );
};
