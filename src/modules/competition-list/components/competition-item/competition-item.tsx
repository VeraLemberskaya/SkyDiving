import { Flex, List, Typography } from 'antd';
import dayjs from 'dayjs';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';

import { CompetitionItemProps } from '../../competition-list.types';

import styles from './competition-item.module.scss';

export const CompetitionItem = ({ competition }: CompetitionItemProps) => {
  const { beginDate, endDate, name, place } = competition;

  const startDate = dayjs(beginDate).format('DD.MM.YYYY');
  const finishDate = dayjs(endDate).format('DD.MM.YYYY');

  return (
    <List.Item>
      <Flex align="center" className={styles.item} justify="space-between">
        <div className={styles.title_container}>
          <Typography.Title level={5}>{name}</Typography.Title>
          <Typography.Text type="secondary">{place}</Typography.Text>
        </div>
        <Flex align="center" gap="large">
          <Typography.Text strong>
            {startDate} - {finishDate}
          </Typography.Text>
          <Flex>
            <EditButton />
            <DeletePopConfirm
              size="middle"
              title="Вы уверены, что хотите удалить соревнование?"
            />
          </Flex>
        </Flex>
      </Flex>
    </List.Item>
  );
};
