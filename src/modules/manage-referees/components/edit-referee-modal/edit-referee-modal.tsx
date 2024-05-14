import { JudgesModal } from '../referees-modal';
import { EditJudgeModalProps } from '../referees-modal/referees-modal.types';

export const EditJudgeModal = ({
  referee,
  isOpen,
  onClose,
}: EditJudgeModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <JudgesModal
      isOpen={isOpen}
      key={referee.id}
      referee={referee}
      title="Редактирование судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
