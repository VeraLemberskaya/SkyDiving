import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';

import { ModalProps } from '../../manage-sportsmen.types';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';
import { SportsmanFormValues } from './components/external-sportsman-modal/external-sportsman-modal.types';

export const AddExternalSportsmanModal = ({ isOpen, onClose }: ModalProps) => {
  const queryClient = useQueryClient();
  const { mutate: createSkydiver } =
    API.skydivers.useCreateExternalSkydiverMutation();

  const handleSubmit = async (data: SportsmanFormValues) => {
    createSkydiver(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['skydivers'] });
      },
    });
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
