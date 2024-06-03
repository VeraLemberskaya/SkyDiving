import { SizeType } from 'antd/lib/config-provider/SizeContext';

export interface DeletePopConfirmProps {
  size?: SizeType;
  title: string;
  disabled?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}
