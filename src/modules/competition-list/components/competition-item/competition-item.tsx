import { ReactNode } from 'react';
import { Flex, List, Typography } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { routes } from '@constants/routes';

import { CompetitionItemProps } from '../../competition-list.types';
import { AcrobaticsButton } from '../acrobatics-button';

import styles from './competition-item.module.scss';

export const CompetitionItem = ({ competition }: CompetitionItemProps) => {
  const { beginDate, endDate, name, place } = competition;

  const navigate = useNavigate();

  const startDate = dayjs(beginDate).format('DD.MM.YYYY');
  const finishDate = dayjs(endDate).format('DD.MM.YYYY');

  const handleCompetitionClick = () => {
    navigate(routes.COMPETITION_BY_ID(competition.id));
  };

  const actions: ReactNode[] = [
    <EditButton key="edit" />,
    <DeletePopConfirm
      key="delete"
      title="Вы уверены, что хотите удалить соревнование?"
    />,
    <AcrobaticsButton competitionId={competition.id} key="acrobatics" />,
  ];

  return (
    <List.Item
      actions={actions}
      className={styles.item}
      onClick={handleCompetitionClick}
    >
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
