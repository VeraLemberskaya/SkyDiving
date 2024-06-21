import { MouseEvent } from 'react';
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

  const handleConfirm = (e?: MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    onConfirm && onConfirm();
  };

  const handleCancel = (e?: MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    onCancel && onCancel();
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <Popconfirm
      arrow={{ pointAtCenter: true }}
      icon={null}
      placement="topRight"
      title={title}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
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
