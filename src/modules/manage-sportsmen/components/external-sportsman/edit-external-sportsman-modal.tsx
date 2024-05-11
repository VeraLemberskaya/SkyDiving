import { EditSportsmanModalProps } from '../../manage-sportsmen.types';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';

export const EditExternalSportsmanModal = ({
  sportsmanId,
  isOpen,
  onClose,
}: EditSportsmanModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <ExternalSportsmanModal
      isOpen={isOpen}
      key={sportsmanId}
      sportsmanId={sportsmanId}
      title="Редактирование спортсмена"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
