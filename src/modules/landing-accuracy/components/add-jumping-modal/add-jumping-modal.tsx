import { ModalProps } from '../../landing-accuracy.types';
import { JumpingModal } from '../jumping-modal';

export const AddJumpingModal = ({ isOpen, onClose }: ModalProps) => {
  const handleSubmit = () => {
    //add jumping
  };

  return (
    <JumpingModal
      isOpen={isOpen}
      title="Добавление прыжка:"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
