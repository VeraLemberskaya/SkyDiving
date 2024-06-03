import { List, Typography } from 'antd';

import { jumpingList } from '@api/mocks';

import { JumpingItem } from '../jumping-item';
import { JumpingListProps } from '../../landing-accuracy.types';

export const JumpingList = ({ onItemEdit }: JumpingListProps) => {
  return (
    <>
      <Typography.Title level={5}>Прыжки:</Typography.Title>
      <List
        dataSource={jumpingList}
        renderItem={(item, index) => (
          <JumpingItem
            deletable={index === jumpingList.length - 1}
            jumping={item}
            onEdit={() => onItemEdit(item)}
          />
        )}
      />
    </>
  );
};
