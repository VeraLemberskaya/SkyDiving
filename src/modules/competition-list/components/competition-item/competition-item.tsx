import { ReactNode } from 'react';
import { Flex, List, Typography } from 'antd';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { formatDate } from '@utils/format-date';

import { CompetitionItemProps } from '../../competition-list.types';
import { AcrobaticsButton } from '../acrobatics-button';

import styles from './competition-item.module.scss';
import { useCompetitionItem } from './competition-item.hooks';

export const CompetitionItem = ({ competition }: CompetitionItemProps) => {
  const { id, beginDate, endDate, name, place } = competition;

  const { handleEdit, handleDelete, handleSelect } = useCompetitionItem(id);

  const startDate = formatDate(beginDate);
  const finishDate = formatDate(endDate);

  const actions: ReactNode[] = [
    <EditButton key="edit" onClick={handleEdit} />,
    <DeletePopConfirm
      key="delete"
      title="Вы уверены, что хотите удалить соревнование?"
      onConfirm={handleDelete}
    />,
    <AcrobaticsButton competitionId={competition.id} key="acrobatics" />,
  ];

  return (
    <List.Item actions={actions} className={styles.item} onClick={handleSelect}>
      <Flex
        align="center"
        className={styles.item__content}
        justify="space-between"
      >
        <div className={styles.title_container}>
          <Typography.Title level={5}>{name}</Typography.Title>
          <Typography.Text type="secondary">{place}</Typography.Text>
        </div>
        <Flex align="center" gap="large">
          <Typography.Text strong>
            {startDate} - {finishDate}
          </Typography.Text>
        </Flex>
      </Flex>
    </List.Item>
  );
};
