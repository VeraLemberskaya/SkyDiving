import { JudgesModal } from '../judges-modal';
import { AddJudgeModalProps } from '../judges-modal/judges-modal.types';

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
