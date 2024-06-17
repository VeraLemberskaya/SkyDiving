import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';

import {
  EditTeamFormProps,
  TeamFormValues,
} from '../../manage-participants-tree.types';
import { TeamForm } from '../team-form';

export const EditTeamForm = ({ team, competitionId }: EditTeamFormProps) => {
  const { mutate: updateTeam } = API.teams.useUpdateTeamMutation();
  const queryClient = useQueryClient();

  const handleSubmit = ({ name, skydiversIds }: TeamFormValues) => {
    const data = {
      name,
      members: skydiversIds.map((skydiverId) => ({ skydiverId })),
    };

    updateTeam(
      { teamId: team.id, competitionId, data },
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
      key={team.id}
      team={team}
      title={team.name}
      onSubmit={handleSubmit}
    />
  );
};
