import { Modal } from 'antd';

import { SportsmanModalProps } from '../../../../manage-sportsmen.types';

export const InternalSportsmanModal = ({
  title,
  isOpen,
  onClose,
}: SportsmanModalProps<unknown>) => {
  return (
    <Modal
      centered
      destroyOnClose
      maskClosable={false}
      open={isOpen}
      title={title}
      onCancel={onClose}
    >
      InternalSportsmanModal
    </Modal>
  );
};
