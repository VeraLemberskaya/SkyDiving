import { AddSportsmanModalProps } from '../../manage-sportsmen.types';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';

export const AddExternalSportsmanModal = ({
  isOpen,
  onClose,
}: AddSportsmanModalProps) => {
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
