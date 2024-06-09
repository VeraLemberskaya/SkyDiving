import { Flex } from 'antd';

import { PanelOfReferees } from '@modules/panel-of-referees';

import styles from './competition-referees.module.scss';
import { CompetitionDetails } from './components/competition-details';

export const CompetitionReferees = () => {
  return (
    <Flex vertical gap="small">
      <CompetitionDetails />
      <div className={styles.content}>
        <PanelOfReferees />
      </div>
    </Flex>
  );
};
