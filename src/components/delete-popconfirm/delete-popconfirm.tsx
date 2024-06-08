import { MouseEventHandler } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Popconfirm, theme } from 'antd';

import { DeletePopConfirmProps } from './delete-popconfirm.types';

export const DeletePopConfirm = ({
  size = 'middle',
  title,
  disabled = false,
  onCancel,
  onConfirm,
}: DeletePopConfirmProps) => {
  const { token } = theme.useToken();

  const color = disabled ? token.colorBorder : token.colorError;

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Popconfirm
      arrow={{ pointAtCenter: true }}
      icon={null}
      placement="topRight"
      title={title}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      <Button
        disabled={disabled}
        icon={<DeleteTwoTone twoToneColor={color} />}
        shape="circle"
        size={size}
        type="text"
        onClick={handleClick}
      />
    </Popconfirm>
  );
};
