import { MouseEventHandler } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import style from './update-password-button.module.scss';

interface EditButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UpdatePasswordButton = ({ onClick }: EditButtonProps) => {
  return (
    <Button
      icon={<SyncOutlined className={style.button} />}
      shape="circle"
      size="middle"
      type="text"
      onClick={onClick}
    />
  );
};
