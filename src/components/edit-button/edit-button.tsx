import { MouseEventHandler } from 'react';
import { EditTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

interface EditButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const EditButton = ({ onClick }: EditButtonProps) => {
  const { token } = theme.useToken();

  return (
    <Button
      icon={<EditTwoTone twoToneColor={token.colorPrimary} />}
      shape="circle"
      size="middle"
      type="text"
      onClick={onClick}
    />
  );
};
