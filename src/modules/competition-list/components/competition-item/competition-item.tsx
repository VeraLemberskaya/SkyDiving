import { MouseEventHandler, ReactNode } from 'react';
import { Flex, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { formatDate } from '@utils/format-date';
import { routes } from '@constants/routes';

import { CompetitionItemProps } from '../../competition-list.types';
import { AcrobaticsButton } from '../acrobatics-button';

import styles from './competition-item.module.scss';

export const CompetitionItem = ({ competition }: CompetitionItemProps) => {
  const navigate = useNavigate();

  const startDate = formatDate(competition.beginDate);
  const endDate = formatDate(competition.endDate);

  const handleCompetitionClick = () => {
    navigate(routes.COMPETITION_BY_ID(competition.id));
  };

  const handleEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    //edit logic
  };

  const actions: ReactNode[] = [
    <EditButton key="edit" onClick={handleEdit} />,
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
          <Typography.Title level={5}>{competition.name}</Typography.Title>
          <Typography.Text type="secondary">
            {competition.place}
          </Typography.Text>
        </div>
        <Flex align="center" gap="large">
          <Typography.Text strong>
            {startDate} - {endDate}
          </Typography.Text>
        </Flex>
      </Flex>
    </List.Item>
  );
};
