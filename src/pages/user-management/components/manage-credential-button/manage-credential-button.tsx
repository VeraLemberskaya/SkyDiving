import { MouseEventHandler } from 'react';
import { IdcardTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

interface ManageCredentialButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

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
