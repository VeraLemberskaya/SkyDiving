import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';

import {
  AddTeamFormProps,
  TeamFormValues,
} from '../../manage-participants-tree.types';
import { TeamForm } from '../team-form';

export const AddTeamForm = ({ competitionId }: AddTeamFormProps) => {
  const { mutate: addTeam } = API.teams.useCreateTeamMutation();
  const queryClient = useQueryClient();

  const handleSubmit = ({ name, skydiversIds }: TeamFormValues) => {
    const data = {
      name,
      members: skydiversIds.map((skydiverId) => ({ skydiverId })),
    };

    addTeam(
      { competitionId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['competition-members', competitionId],
          });
        },
      },
    );
  };

  return (
    <TeamForm
      competitionId={competitionId}
      title="Новая команда"
      onSubmit={handleSubmit}
    />
  );
};
