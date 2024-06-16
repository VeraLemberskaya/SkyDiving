import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';

import { CompetitionForm } from './competition-form';
import {
  CompetitionData,
  EditCompetitionFormProps,
} from './competition-form.types';

export const EditCompetitionForm = ({
  competitionId,
}: EditCompetitionFormProps) => {
  const { data } = API.competitions.useCompetitionQuery(competitionId);
  const queryClient = useQueryClient();
  const { mutate: update, isPending } =
    API.competitions.useUpdateCompetitionMutation();

  const handleSubmit = (data: CompetitionData) => {
    update(
      { id: competitionId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['competitions', competitionId],
          });
        },
      },
    );
  };

  return (
    <CompetitionForm
      competition={data}
      loading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
