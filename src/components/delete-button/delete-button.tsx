import { MouseEventHandler } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

interface DeleteButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  const { token } = theme.useToken();

  return (
    <Button
      icon={<DeleteTwoTone twoToneColor={token.colorError} />}
      shape="circle"
      size="middle"
      type="text"
      onClick={onClick}
    />
  );
};
