import { List } from 'antd';

import { competitionsRefereeing } from '@api/mocks';

import { CompetitionRefereeingItem } from './components/competition-refereeing-item';
import styles from './competition-refereeing-list.module.scss';

export const CompetitionRefereeingList = () => {
  return (
    <List
      className={styles.list}
      dataSource={competitionsRefereeing}
      renderItem={(item) => (
        <CompetitionRefereeingItem competitionRefereeing={item} />
      )}
    />
  );
};
