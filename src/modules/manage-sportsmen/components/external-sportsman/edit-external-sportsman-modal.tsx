import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';

import { EditModalProps } from '../../manage-sportsmen.types';

import { ExternalSportsmanModal } from './components/external-sportsman-modal/external-sportsman-modal';
import { SportsmanFormValues } from './components/external-sportsman-modal/external-sportsman-modal.types';

export const EditExternalSportsmanModal = ({
  sportsman,
  isOpen,
  onClose,
}: EditModalProps) => {
  const queryClient = useQueryClient();
  const { mutate: updateSkydiver } =
    API.skydivers.useUpdateExternalSkydiverMutation();

  const handleSubmit = async (data: SportsmanFormValues) => {
    updateSkydiver(
      { id: sportsman.id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['skydivers'] });
        },
      },
    );
  };

  return (
    <ExternalSportsmanModal
      isOpen={isOpen}
      key={sportsman.id}
      sportsman={sportsman}
      title="Редактирование спортсмена"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
