import { ModalProps } from '../../manage-sportsmen.types';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';

export const AddExternalSportsmanModal = ({ isOpen, onClose }: ModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <ExternalSportsmanModal
      isOpen={isOpen}
      title="Добавление спортсмена"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
