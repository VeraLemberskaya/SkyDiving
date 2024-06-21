import { useManageRefereesStore } from '../../manage-referees.store';
import { RefereesModal } from '../referees-modal';
import { ModalProps } from '../referees-modal/referees-modal.types';

export const EditRefereeModal = ({ isOpen, onClose }: ModalProps) => {
  const refereeId = useManageRefereesStore((state) => state.refereeId);

  const handleSubmit = () => {
    //submit
  };

  return (
    <RefereesModal
      isOpen={isOpen}
      key={refereeId}
      refereeId={refereeId}
      title="Редактирование судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
