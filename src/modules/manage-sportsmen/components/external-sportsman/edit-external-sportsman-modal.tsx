import { ModalProps } from '../../manage-sportsmen.types';
import { useManageSportsmenStore } from '../../manage-sportsmen.store';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';

export const EditExternalSportsmanModal = ({ isOpen, onClose }: ModalProps) => {
  const sportsmanId = useManageSportsmenStore((state) => state.sportsmanId);

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
