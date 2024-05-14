import { RefereesModal } from '../referees-modal';
import { AddRefereeModalProps } from '../referees-modal/referees-modal.types';

export const AddRefereeModal = ({ isOpen, onClose }: AddRefereeModalProps) => {
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
