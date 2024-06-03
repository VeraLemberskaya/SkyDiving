import { Button, theme } from 'antd';
import { IdcardTwoTone } from '@ant-design/icons';

import { ManageCredentialButtonProps } from './manage-credential-button.types';

export const ManageCredentialButton = ({
  onClick,
}: ManageCredentialButtonProps) => {
  const { token } = theme.useToken();

  return (
    <Button
      icon={<IdcardTwoTone twoToneColor={token.colorError} />}
      size="middle"
      type="text"
      onClick={onClick}
    />
  );
};
