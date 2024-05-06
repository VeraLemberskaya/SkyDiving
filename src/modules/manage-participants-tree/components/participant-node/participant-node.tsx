import { DeleteTwoTone } from '@ant-design/icons';
import { Flex, Button, theme } from 'antd';

import { ParticipantNodeProps } from '../../manage-participants-tree.types';

export const ParticipantNode = ({ participant }: ParticipantNodeProps) => {
  const { token } = theme.useToken();

  return (
    <Flex gap="middle" justify="space-between">
      {participant.fullName}
      <Button
        icon={<DeleteTwoTone twoToneColor={token.colorError} />}
        shape="circle"
        size="small"
        type="text"
      />
    </Flex>
  );
};
