import { Flex, List, Space, Typography } from 'antd';

import { EditButton } from '@components/edit-button';
import { DeletePopConfirm } from '@components/delete-popconfirm';
import { formatDate } from '@utils/format-date';

import { JumpingItemProps } from '../../landing-accuracy.types';

import styles from './jumping-item.module.scss';

export const JumpingItem = ({
  jumping,
  deletable,
  onEdit,
  onDelete,
}: JumpingItemProps) => {
  const { id, number, accuracy, performanceDate } = jumping;

  const actions = [
    <EditButton key="edit" onClick={onEdit} />,
    <DeletePopConfirm
      disabled={!deletable}
      key="delete"
      title="Вы уверены, что хотите удалить данные о прыжке?"
      onConfirm={() => onDelete(id)}
    />,
  ];

  return (
    <List.Item actions={actions} className={styles.item}>
      <Flex
        align="center"
        className={styles.item__content}
        justify="space-between"
      >
        <Space direction="vertical">
          <Typography.Text className={styles.item__description}>
            Номер прыжка:
            <span> {number}</span>
          </Typography.Text>
          <Typography.Text className={styles.item__description}>
            Точность:
            <span> {accuracy}</span>
          </Typography.Text>
        </Space>
        <Typography.Text>{formatDate(performanceDate)}</Typography.Text>
      </Flex>
    </List.Item>
  );
};
