import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';

import { TreeHeaderProps } from '../../participants-tree.types';

export const TreeHeader = ({ title, onAdd }: TreeHeaderProps) => {
  return (
    <Flex justify="space-between">
      <Typography.Title level={5}>{title}</Typography.Title>
      {onAdd && (
        <Button
          icon={<PlusOutlined />}
          shape="circle"
          size="small"
          type="primary"
          onClick={onAdd}
        />
      )}
    </Flex>
  );
};
