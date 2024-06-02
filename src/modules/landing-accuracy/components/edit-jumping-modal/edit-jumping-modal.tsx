import { EditJumpingModalProps } from '../../landing-accuracy.types';
import { JumpingModal } from '../jumping-modal';

export const EditJumpingModal = ({
  jumping,
  isOpen,
  onClose,
}: EditJumpingModalProps) => {
  const handleSubmit = () => {
    //edit jumping
  };

  return (
    <JumpingModal
      isOpen={isOpen}
      jumping={jumping}
      title="Редактирование прыжка:"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
