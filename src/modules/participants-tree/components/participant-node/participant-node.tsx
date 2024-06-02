import { Flex } from 'antd';

import { DeletePopConfirm } from '@components/delete-popconfirm';

import { ParticipantNodeProps } from '../../participants-tree.types';

export const ParticipantNode = ({
  participant,
  deletable,
}: ParticipantNodeProps) => {
  return (
    <Flex gap="middle" justify="space-between">
      {participant.fullName}
      {deletable && (
        <DeletePopConfirm
          size="small"
          title="Вы уверены что хотите удалить спортсмена из команды?"
        />
      )}
    </Flex>
  );
};
