import { RefereesModal } from '../referees-modal';
import { EditRefereeModalProps } from '../referees-modal/referees-modal.types';

export const EditRefereeModal = ({
  referee,
  isOpen,
  onClose,
}: EditRefereeModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <RefereesModal
      isOpen={isOpen}
      key={referee.id}
      referee={referee}
      title="Редактирование судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
