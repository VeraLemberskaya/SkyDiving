import { MouseEventHandler } from 'react';
import { CopyTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

interface EditButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CopyButton = ({ onClick }: EditButtonProps) => {
  const { token } = theme.useToken();

  return (
    <Button
      icon={<CopyTwoTone twoToneColor={token.colorPrimary} />}
      shape="circle"
      size="middle"
      type="text"
      onClick={onClick}
    />
  );
};
