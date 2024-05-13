import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Popconfirm, theme } from 'antd';

interface DeletePopConfirmProps {
  title: string;
  disabled?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const DeletePopConfirm = ({
  title,
  disabled = false,
  onCancel,
  onConfirm,
}: DeletePopConfirmProps) => {
  const { token } = theme.useToken();

  const color = disabled ? token.colorBorder : token.colorError;

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
        size="middle"
        type="text"
      />
    </Popconfirm>
  );
};
