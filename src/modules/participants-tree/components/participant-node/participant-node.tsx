import { Flex } from 'antd';
import { useQueryClient } from '@tanstack/react-query';

import { DeletePopConfirm } from '@components/delete-popconfirm';
import { API } from '@api/index';
import { getFullName } from '@utils/get-fullname';

import { ParticipantNodeProps } from '../../participants-tree.types';

export const ParticipantNode = ({
  competitionId,
  participant,
  deletable,
}: ParticipantNodeProps) => {
  const { firstName, secondName, patronymic } = participant.name;
  const { mutate: deleteIndividual } =
    API.individuals.useDeleteCompetitionIndividualMutation();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    deleteIndividual(
      { competitionId, individualId: participant.skydiverId },
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
    <Flex gap="middle" justify="space-between">
      {getFullName({ firstName, secondName, patronymic })}
      {deletable && (
        <DeletePopConfirm
          size="small"
          title="Вы уверены что хотите удалить спортсмена из команды?"
          onConfirm={handleDelete}
        />
      )}
    </Flex>
  );
};
