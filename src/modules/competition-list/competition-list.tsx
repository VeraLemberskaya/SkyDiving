import { List, Typography } from 'antd';

import { competitions } from '@api/mocks';

import { CompetitionItem } from './components/competition-item';
import styles from './competition-list.module.scss';
import { CompetitionListProps } from './competition-list.types';

export const CompetitionList = ({ title }: CompetitionListProps) => {
  return (
    <div>
      <Typography.Text>{title}</Typography.Text>
      <List
        className={styles.list}
        dataSource={competitions}
        renderItem={(item) => <CompetitionItem competition={item} />}
      />
    </div>
  );
};
