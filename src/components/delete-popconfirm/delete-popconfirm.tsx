import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Popconfirm, theme } from 'antd';

interface DeletePopConfirmProps {
  title: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const DeletePopConfirm = ({
  title,
  onCancel,
  onConfirm,
}: DeletePopConfirmProps) => {
  const { token } = theme.useToken();

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
        icon={<DeleteTwoTone twoToneColor={token.colorError} />}
        shape="circle"
        size="middle"
        type="text"
      />
    </Popconfirm>
  );
};
