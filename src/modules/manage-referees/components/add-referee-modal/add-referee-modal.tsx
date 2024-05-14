import { JudgesModal } from '../referees-modal';
import { AddJudgeModalProps } from '../referees-modal/referees-modal.types';

export const AddJudgeModal = ({ isOpen, onClose }: AddJudgeModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <JudgesModal
      isOpen={isOpen}
      title="Добавление судьи"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
