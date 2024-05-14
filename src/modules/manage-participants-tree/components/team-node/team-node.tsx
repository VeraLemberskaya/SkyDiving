import { Flex } from 'antd';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { TeamNodeProps } from '../../manage-participants-tree.types';

export const TeamNode = ({ team }: TeamNodeProps) => {
  return (
    <Flex gap="middle" justify="space-between">
      {team.name}
      <DeletePopConfirm
        size="small"
        title={`Вы уверены что хотите удалить команду ${team.name}?`}
      />
    </Flex>
  );
};
