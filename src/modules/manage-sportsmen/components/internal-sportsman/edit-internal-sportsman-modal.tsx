import { EditSportsmanModalProps } from '../../manage-sportsmen.types';

import { InternalSportsmanModal } from './components/internal-sportsman-modal';

export const EditInternalSportsmanModal = ({
  sportsmanId,
  isOpen,
  onClose,
}: EditSportsmanModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <InternalSportsmanModal
      isOpen={isOpen}
      key={sportsmanId}
      sportsmanId={sportsmanId}
      title="Редактирование члена аэроклуба"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
