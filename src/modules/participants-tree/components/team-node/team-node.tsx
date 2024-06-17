import { Flex } from 'antd';
import { useQueryClient } from '@tanstack/react-query';

import { DeletePopConfirm } from '@components/delete-popconfirm';
import { API } from '@api/index';

import { TeamNodeProps } from '../../participants-tree.types';

export const TeamNode = ({
  team,
  deletable,
  competitionId,
  onDelete,
}: TeamNodeProps) => {
  const { mutate: deleteTeam } = API.teams.useDeleteTeamMutation();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    deleteTeam(
      { teamId: team.id, competitionId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['competition-members', competitionId],
          });

          onDelete && onDelete();
        },
      },
    );
  };

  return (
    <Flex gap="middle" justify="space-between">
      {team.name}
      {deletable && (
        <DeletePopConfirm
          size="small"
          title={`Вы уверены что хотите удалить команду ${team.name}?`}
          onConfirm={handleDelete}
        />
      )}
    </Flex>
  );
};
