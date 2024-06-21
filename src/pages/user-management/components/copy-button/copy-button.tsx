import { MouseEventHandler } from 'react';
import { CopyTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

interface CopyButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CopyButton = ({ onClick }: CopyButtonProps) => {
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
