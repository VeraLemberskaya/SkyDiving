import { Flex } from 'antd';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { ParticipantNodeProps } from '../../manage-participants-tree.types';

export const ParticipantNode = ({ participant }: ParticipantNodeProps) => {
  return (
    <Flex gap="middle" justify="space-between">
      {participant.fullName}
      <DeletePopConfirm
        size="small"
        title="Вы уверены что хотите удалить спортсмена из команды?"
      />
    </Flex>
  );
};
