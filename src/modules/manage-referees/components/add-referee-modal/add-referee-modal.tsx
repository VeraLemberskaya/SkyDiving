import { RefereesModal } from '../referees-modal';
import { ModalProps } from '../referees-modal/referees-modal.types';

export const AddRefereeModal = ({ isOpen, onClose }: ModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <RefereesModal
      isOpen={isOpen}
      title="Добавление судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
