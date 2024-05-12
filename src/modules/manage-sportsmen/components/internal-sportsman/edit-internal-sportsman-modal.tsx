import { ModalProps } from '../../manage-sportsmen.types';
import { useManageSportsmenStore } from '../../manage-sportsmen.store';

import { InternalSportsmanModal } from './components/internal-sportsman-modal';

export const EditInternalSportsmanModal = ({ isOpen, onClose }: ModalProps) => {
  const sportsmanId = useManageSportsmenStore((state) => state.sportsmanId);

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
