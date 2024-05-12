import { ModalProps } from '../../manage-sportsmen.types';

import { InternalSportsmanModal } from './components/internal-sportsman-modal';

export const AddInternalSportsmanModal = ({ isOpen, onClose }: ModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <InternalSportsmanModal
      isOpen={isOpen}
      title="Добавление члена аэроклуба"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
