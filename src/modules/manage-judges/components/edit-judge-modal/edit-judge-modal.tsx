import { JudgesModal } from '../judges-modal';
import { EditJudgeModalProps } from '../judges-modal/judges-modal.types';

export const EditJudgeModal = ({
  judge,
  isOpen,
  onClose,
}: EditJudgeModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <JudgesModal
      isOpen={isOpen}
      judge={judge}
      key={judge.id}
      title="Редактирование судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
