import { Flex } from 'antd';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { TeamNodeProps } from '../../participants-tree.types';

export const TeamNode = ({ team, deletable }: TeamNodeProps) => {
  return (
    <Flex gap="middle" justify="space-between">
      {team.name}
      {deletable && (
        <DeletePopConfirm
          size="small"
          title={`Вы уверены что хотите удалить команду ${team.name}?`}
        />
      )}
    </Flex>
  );
};
