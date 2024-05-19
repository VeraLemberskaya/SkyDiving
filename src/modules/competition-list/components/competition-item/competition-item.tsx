import { Flex, List, Typography } from 'antd';
import dayjs from 'dayjs';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';

import { CompetitionItemProps } from '../../competition-list.types';

import styles from './competition-item.module.scss';

export const CompetitionItem = ({ competition }: CompetitionItemProps) => {
  const startDate = dayjs(competition.beginDate).format('DD.MM.YYYY');
  const endDate = dayjs(competition.endDate).format('DD.MM.YYYY');

  return (
    <List.Item>
      <Flex align="center" className={styles.item} justify="space-between">
        <div className={styles.title_container}>
          <Typography.Title level={5}>{competition.name}</Typography.Title>
          <Typography.Text type="secondary">
            {competition.place}
          </Typography.Text>
        </div>
        <Flex align="center" gap="large">
          <Typography.Text strong>
            {startDate} - {endDate}
          </Typography.Text>
          <Flex>
            <EditButton />
            <DeletePopConfirm title="Вы уверены, что хотите удалить соревнование?" />
          </Flex>
        </Flex>
      </Flex>
    </List.Item>
  );
};
