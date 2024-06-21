import { List, Typography } from 'antd';

import { JumpingItem } from '../jumping-item';
import { JumpingListProps } from '../../landing-accuracy.types';

export const JumpingList = ({
  data,
  onItemEdit,
  onDelete,
}: JumpingListProps) => {
  return (
    <>
      <Typography.Title level={5}>Прыжки:</Typography.Title>
      <List
        dataSource={data}
        renderItem={(item, index) => (
          <JumpingItem
            deletable={index === data.length - 1}
            jumping={item}
            onDelete={onDelete}
            onEdit={() => onItemEdit(item)}
          />
        )}
      />
    </>
  );
};
