import { useQueryClient } from '@tanstack/react-query';

import { API } from '@api/index';
import { getFullName } from '@utils/get-fullname';

import { AddParticipantsValues } from '../../manage-participants-tree.types';

export const useAddIndividuals = (competitionId: number) => {
  const queryClient = useQueryClient();

  const { mutate: addIndividuals } =
    API.individuals.useCreateCompetitionIndividualsMutation();

  const handleAddIndividuals = ({ participantIds }: AddParticipantsValues) => {
    const data = participantIds.map((skydiverId) => ({ skydiverId }));

    addIndividuals(
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

  return { addIndividuals: handleAddIndividuals };
};

export const useSkydiverOptions = (competitionId: number) => {
  const { data: skydivers = [] } =
    API.skydivers.useAvailableCompetitionSkydiversQuery(competitionId);

  const options = skydivers.map(({ id, name }) => ({
    value: id,
    label: getFullName(name),
  }));

  return { options };
};
